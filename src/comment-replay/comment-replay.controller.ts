import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentReplayService } from './comment-replay.service';
import { CreateCommentReplayDto } from './dto/create-comment-replay.dto';
import { UpdateCommentReplayDto } from './dto/update-comment-replay.dto';

@Controller('comment-replay')
export class CommentReplayController {
  constructor(private readonly commentReplayService: CommentReplayService) {}

  @Post()
  create(@Body() createCommentReplayDto: CreateCommentReplayDto) {
    return this.commentReplayService.create(createCommentReplayDto);
  }

  @Get()
  findAll() {
    return this.commentReplayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentReplayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentReplayDto: UpdateCommentReplayDto) {
    return this.commentReplayService.update(+id, updateCommentReplayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentReplayService.remove(+id);
  }
}
