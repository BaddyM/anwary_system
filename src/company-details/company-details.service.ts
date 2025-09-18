import { Injectable } from '@nestjs/common';
import { CreateCompanyDetailDto } from './dto/create-company-detail.dto';
import { UpdateCompanyDetailDto } from './dto/update-company-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyDetailsService {
    constructor(private prisma: PrismaService) { }
    async create(createCompanyDetailDto: CreateCompanyDetailDto) {
        const data = await this.prisma.companyInformation.create({
            data: createCompanyDetailDto,
        });
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.companyInformation.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        })
        return data;
    }

    async update(id: string, updateCompanyDetailDto: UpdateCompanyDetailDto) {
        const data = await this.prisma.companyInformation.update({
            where: { id },
            data: updateCompanyDetailDto,
        });
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.companyInformation.delete({
            where: { id },
        });
        return data;
    }
}
