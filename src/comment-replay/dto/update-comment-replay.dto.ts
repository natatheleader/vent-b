import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentReplayDto } from './create-comment-replay.dto';

export class UpdateCommentReplayDto extends PartialType(CreateCommentReplayDto) {}
