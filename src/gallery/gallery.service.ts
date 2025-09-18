import { Injectable } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GalleryService {
    constructor(private prisma: PrismaService) { }
    async create(createGalleryDto: any) {
        const data = await this.prisma.gallery.create({
            data: createGalleryDto,
        });
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.gallery.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
            where: {
                isDeleted: false,
            }
        })
        return data;
    }

    async update(id: string, updateGalleryDto: UpdateGalleryDto) {
        const data = await this.prisma.gallery.update({
            where: { id },
            data: updateGalleryDto,
        });
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.gallery.update({
            where: { id },
            data: {
                isDeleted: true,
            },
        });
        return data;
    }
}
