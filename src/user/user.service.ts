import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
const bcrypt = require("bcrypt");

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    async create(createUserDto: CreateUserDto) {
        const password = await bcrypt.hash(createUserDto.password, 10)
        const data = await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: password,
            },
        })
        return data;
    }

    async findAll(page: number, limit: number) {
        const data = await this.prisma.user.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc"
            }
        });
        return data;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const data = await this.prisma.user.update({
            where: { id },
            data: updateUserDto,
        });
        return data;
    }

    async remove(id: string) {
        const data = await this.prisma.user.delete({
            where: { id }
        });
        return data;
    }

    async login(email: string, password: string) {
        const data = await this.prisma.user.findUnique({
            where: { email }
        });
        const checkPassword = await bcrypt.compare(`${password}`, data?.password);
        if (checkPassword) {
            return {
                id: data!.id,
                role: data!.role,
                name: data!.name,
            };
        }
        throw new UnauthorizedException({
            success: false,
            message: "User not authorized",
        });
    }
}
