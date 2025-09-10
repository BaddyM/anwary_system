import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Res, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'express';
import { ApiParam } from '@nestjs/swagger';

@Controller('booking')
export class BookingController {
    constructor(
        private readonly bookingService: BookingService,
    ) { }

    @Post("create")
    async create(
        @Body() createBookingDto: CreateBookingDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.bookingService.create(createBookingDto);
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
            const data = await this.bookingService.findAll(parseInt(currentPage), parseInt(currentLimit));
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
        @Body() updateBookingDto: UpdateBookingDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.bookingService.update(id, updateBookingDto);
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
            const data = await this.bookingService.remove(id);
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
