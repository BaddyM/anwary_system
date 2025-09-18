import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingService {
    constructor(private prisma: PrismaService) { }
    async create(createBookingDto: CreateBookingDto) {
        const data = await this.prisma.booking.create({
            data: {
                ...createBookingDto,
            },
        })
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.booking.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
            include:{
                destination:true,
            }
        });
        return data;
    }

    async update(id: string, updateBookingDto: UpdateBookingDto) {
        const data = await this.prisma.booking.update({
            where: { id },
            data: updateBookingDto,
        })
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.booking.delete({
            where: { id },
        })
        return data;
    }
}
