import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) { }
    async create(createContactDto: CreateContactDto) {
        const data = await this.prisma.contact.create({
            data: createContactDto,
        });
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.contact.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc",
            }
        });
        return data;
    }

    async update(id: string, updateContactDto: UpdateContactDto) {
        const data = await this.prisma.contact.update({
            where: {
                id,
            },
            data: updateContactDto,
        });
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.contact.delete({
            where: {
                id,
            },
        });
        return data;
    }
}
