import { Module } from '@nestjs/common';
import { SentmentService } from './sentment.service';
import { SentmentController } from './sentment.controller';

@Module({
  controllers: [SentmentController],
  providers: [SentmentService]
})
export class SentmentModule {}
