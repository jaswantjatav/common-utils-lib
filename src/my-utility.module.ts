import { Module } from '@nestjs/common';
import { MyUtilityService } from './my-utility.service';

@Module({
  providers: [MyUtilityService],
  exports: [MyUtilityService], // Must export to make visible to main app
})
export class MyUtilityModule {}