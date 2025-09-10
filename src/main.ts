import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    const config = new DocumentBuilder()
        .setTitle('Anwary Travels API')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
            },
            'token', // This name is important for step 3
        )
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
    app.enableCors({
        origin: '*',
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000, () => {
        console.log(`Running on Port ${process.env.PORT}`)
    });
}
bootstrap();
