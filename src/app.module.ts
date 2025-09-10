import { Module } from '@nestjs/common';
import { DestinationModule } from './destination/destination.module';
import { BookingModule } from './booking/booking.module';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'uploads'),
            serveRoot: '/uploads/',
        }),
        DestinationModule,
        BookingModule,
        ContactModule,
        UserModule,
        PrismaModule,
    ],
})
export class AppModule { }
