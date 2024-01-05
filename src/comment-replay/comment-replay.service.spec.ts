import { Test, TestingModule } from '@nestjs/testing';
import { CommentReplayService } from './comment-replay.service';

describe('CommentReplayService', () => {
  let service: CommentReplayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentReplayService],
    }).compile();

    service = module.get<CommentReplayService>(CommentReplayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
