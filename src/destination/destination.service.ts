import { Inject, Injectable } from '@nestjs/common';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DestinationService {
    constructor(
        @Inject(PrismaService)
        private prisma: PrismaService) { }
    
    async create(createDestinationDto:any) {
        const data = await this.prisma.destinations.create({
            data: {
                ...createDestinationDto
            },
        });
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.destinations.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc",
            }
        });
        return data;
    }

    async update(id: string, updateDestinationDto:any) {
        const data = await this.prisma.destinations.update({
            where: {
                id,
            },
            data: updateDestinationDto,
        })
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.destinations.delete({
            where: {
                id,
            },
        })
        return data;
    }
}
