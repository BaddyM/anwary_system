import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCompanyDetailDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    contact: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    tagline?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    mission: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    vision: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    yearsOfExperience: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    happyCustomers: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    destinations: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    satifactionRate: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    about: string;
}
