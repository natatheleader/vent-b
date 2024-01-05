import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplayController } from './comment-replay.controller';
import { CommentReplayService } from './comment-replay.service';

describe('CommentReplayController', () => {
  let controller: CommentReplayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentReplayController],
      providers: [CommentReplayService],
    }).compile();

    controller = module.get<CommentReplayController>(CommentReplayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
