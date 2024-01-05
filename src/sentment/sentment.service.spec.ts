import { Test, TestingModule } from '@nestjs/testing';
import { SentmentService } from './sentment.service';

describe('SentmentService', () => {
  let service: SentmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SentmentService],
    }).compile();

    service = module.get<SentmentService>(SentmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
