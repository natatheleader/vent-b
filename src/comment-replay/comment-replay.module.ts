import { Module } from '@nestjs/common';
import { CommentReplayService } from './comment-replay.service';
import { CommentReplayController } from './comment-replay.controller';

@Module({
  controllers: [CommentReplayController],
  providers: [CommentReplayService]
})
export class CommentReplayModule {}
