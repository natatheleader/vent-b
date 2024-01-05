import { Injectable } from '@nestjs/common';
import { CreateCommentReplayDto } from './dto/create-comment-replay.dto';
import { UpdateCommentReplayDto } from './dto/update-comment-replay.dto';

@Injectable()
export class CommentReplayService {
  create(createCommentReplayDto: CreateCommentReplayDto) {
    return 'This action adds a new commentReplay';
  }

  findAll() {
    return `This action returns all commentReplay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentReplay`;
  }

  update(id: number, updateCommentReplayDto: UpdateCommentReplayDto) {
    return `This action updates a #${id} commentReplay`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentReplay`;
  }
}
