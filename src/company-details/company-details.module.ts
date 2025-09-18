import { Module } from '@nestjs/common';
import { CompanyDetailsService } from './company-details.service';
import { CompanyDetailsController } from './company-details.controller';

@Module({
  controllers: [CompanyDetailsController],
  providers: [CompanyDetailsService],
})
export class CompanyDetailsModule {}
