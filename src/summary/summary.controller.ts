import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Res } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { Response } from 'express';

@Controller('summary')
export class SummaryController {
    constructor(private readonly summaryService: SummaryService) { }
    @Get()
    async findAll(
        @Res() res: Response,
    ) {
        try {
            const data = await this.summaryService.summary();
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
