import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';
import { ApiParam } from '@nestjs/swagger';

@Controller('contact')
export class ContactController {
    constructor(
        private readonly contactService: ContactService,
        private prisma: PrismaService,
    ) { }

    @Post()
    async create(
        @Body() createContactDto: CreateContactDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.contactService.create(createContactDto);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: true,
                error: `Error:${e}`
            });
        }
    }

    @Get()
    @ApiParam({ name: "page" })
    @ApiParam({ name: "limit" })
    async findAll(
        @Query("page") page: any,
        @Query("limit") limit: any,
        @Res() res: Response,
    ) {
        try {
            const currentPage = page ?? 1;
            const currentLimit = limit ?? 10;
            const data = await this.contactService.findAll(parseInt(currentPage), parseInt(currentLimit));
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: true,
                error: `Error:${e}`
            });
        }
    }


    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateContactDto: UpdateContactDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.contactService.update(id, updateContactDto);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: true,
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
            const data = await this.contactService.remove(id);
            return res.status(200).json({
                success: true,
                data: data,
            });
        } catch (e) {
            console.log(e);
            throw new BadRequestException({
                success: true,
                error: `Error:${e}`
            });
        }
    }
}
