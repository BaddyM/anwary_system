import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBookingDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    contact: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    memo?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    destinationId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    checkInDate: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    checkOutDate: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}
