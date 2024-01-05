import { Injectable } from '@nestjs/common';
import { CreateSentmentDto } from './dto/create-sentment.dto';
import { UpdateSentmentDto } from './dto/update-sentment.dto';

@Injectable()
export class SentmentService {
  create(createSentmentDto: CreateSentmentDto) {
    return 'This action adds a new sentment';
  }

  findAll() {
    return `This action returns all sentment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sentment`;
  }

  update(id: number, updateSentmentDto: UpdateSentmentDto) {
    return `This action updates a #${id} sentment`;
  }

  remove(id: number) {
    return `This action removes a #${id} sentment`;
  }
}
