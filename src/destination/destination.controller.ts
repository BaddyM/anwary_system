import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, Query, UploadedFiles, UseInterceptors, Inject } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Response } from 'express';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { memoryStorage } from "multer";
const fs = require("fs");
import * as path from 'path';
import { FilesInterceptor } from '@nestjs/platform-express';
import { randomBytes } from 'crypto';

@Controller('destination')
export class DestinationController {
    constructor(
        @Inject(DestinationService)
        private readonly destinationService: DestinationService) {}

    @Post("create")
    @UseInterceptors(
        FilesInterceptor('image', 8, {
            storage: memoryStorage(),
            limits: {
                fileSize: 1 * 1024 * 1024
            },
            fileFilter: (req, file, cb) => {
                if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                    return cb(new BadRequestException('Only image files are allowed!'), false);
                }
                cb(null, true);
            },
        }),
    )
    async create(
        @Body() createDestinationDto: CreateDestinationDto,
        @Res() res: Response,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        try {
            let fileArray: string[] = [];
            files.forEach(file => {
                const ext = path.extname(file.originalname); // keep the original file extension
                const randomPart = randomBytes(6).toString('hex'); // e.g. 'a3f4c9d2'
                const timestamp = Date.now();
                const newFileName = `item_${timestamp}_${randomPart}${ext}`;
                const uploadPath = `./uploads/${newFileName}`;
                fileArray.push(uploadPath);
                fs.writeFileSync(uploadPath, file.buffer); // Save the file manually
            });
            const dataUpload = {
                title: createDestinationDto.title,
                description: createDestinationDto.description,
                image: fileArray.join(","),
                rating: createDestinationDto.rating != null ? parseInt(createDestinationDto.rating) : 0,
                location: createDestinationDto.location,
                price: parseInt(createDestinationDto.price),
                isActive: Boolean(createDestinationDto.isActive),
            }
            const data = await this.destinationService.create(dataUpload);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`
            });
        }
    }

    @Get()
    @ApiQuery({ name: "page" })
    @ApiQuery({ name: "limit" })
    async findAll(
        @Query("page") page: any,
        @Query("limit") limit: any,
        @Res() res: Response,
    ) {
        try {
            const currentPage = page ?? 1;
            const currentLimit = limit ?? 10;
            const data = await this.destinationService.findAll(parseInt(currentPage), parseInt(currentLimit));
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`
            });
        }
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDestinationDto: UpdateDestinationDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.destinationService.update(id, updateDestinationDto);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`
            });
        }
    }

    @Delete(':id')
    async remove(
        @Param('id') id: string,
        @Res() res: Response,
    ) {
        try {
            const data = await this.destinationService.remove(id);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`
            });
        }
    }
}
