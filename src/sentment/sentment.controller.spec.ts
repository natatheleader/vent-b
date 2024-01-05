import { Test, TestingModule } from '@nestjs/testing';
import { SentmentController } from './sentment.controller';
import { SentmentService } from './sentment.service';

describe('SentmentController', () => {
  let controller: SentmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentmentController],
      providers: [SentmentService],
    }).compile();

    controller = module.get<SentmentController>(SentmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
