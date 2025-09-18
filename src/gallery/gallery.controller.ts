import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Response } from 'express';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { memoryStorage } from "multer";
const fs = require("fs");
import * as path from 'path';
import { FilesInterceptor } from '@nestjs/platform-express';
import { randomBytes } from 'crypto';

@Controller('gallery')
export class GalleryController {
    constructor(private readonly galleryService: GalleryService) { }

    @Post()
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
        @Body() createGalleryDto: CreateGalleryDto,
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
                const uploadPath = `./uploads/gallery/${newFileName}`;
                fileArray.push(uploadPath);
                fs.writeFileSync(uploadPath, file.buffer); // Save the file manually
            });
            const dataUpload = {
                name: createGalleryDto.name,
                image: fileArray.join(","),
                location: createGalleryDto.location,
            }
            const data = await this.galleryService.create(dataUpload);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`,
            });
        }
    }

    @Get()
    @ApiQuery({ name: "limit" })
    @ApiQuery({ name: "page" })
    async findAll(
        @Query("page") page: string,
        @Query("limit") limit: string,
        @Res() res: Response,
    ) {
        try {
            const currentPage = page ?? 1;
            const currentLimit = limit ?? 10;
            const data = await this.galleryService.findAll(parseInt(currentPage), parseInt(currentLimit));
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`,
            });
        }
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateGalleryDto: UpdateGalleryDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.galleryService.update(id, updateGalleryDto);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`,
            });
        }
    }

    @Delete(':id')
    async remove(
        @Param('id') id: string,
        @Res() res: Response,
    ) {
        try {
            const data = await this.galleryService.remove(id);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: false,
                error: `Error:${e}`,
            });
        }
    }
}
