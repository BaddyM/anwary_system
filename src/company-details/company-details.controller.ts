import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, Query } from '@nestjs/common';
import { CompanyDetailsService } from './company-details.service';
import { CreateCompanyDetailDto } from './dto/create-company-detail.dto';
import { UpdateCompanyDetailDto } from './dto/update-company-detail.dto';
import { Response } from 'express';
import { ApiQuery } from '@nestjs/swagger';

@Controller('company-details')
export class CompanyDetailsController {
    constructor(private readonly companyDetailsService: CompanyDetailsService) { }

    @Post()
    async create(
        @Body() createCompanyDetailDto: CreateCompanyDetailDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.companyDetailsService.create(createCompanyDetailDto);
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
            const data = await this.companyDetailsService.findAll(parseInt(currentPage), parseInt(currentLimit));
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
        @Body() updateCompanyDetailDto: UpdateCompanyDetailDto,
        @Res() res: Response,
    ) {
        try {
            const data = await this.companyDetailsService.update(id, updateCompanyDetailDto);
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
            const data = await this.companyDetailsService.remove(id);
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
