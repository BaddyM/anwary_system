import { Injectable } from '@nestjs/common';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SummaryService {
    constructor(private prisma: PrismaService) { }
    async summary() {
        const totalDestinations = await this.prisma.destinations.count({
            where: {
                isActive: true,
            }
        });
        const activeBookings = await this.prisma.booking.count({
            where: {
                isConfirmed: true,
            }
        });
        const messages = await this.prisma.contact.count({
            where: {
                isRead: false,
            }
        });
        const data = {
            totalDestinations,
            activeBookings,
            messages,
        }
        return data;
    }
}
