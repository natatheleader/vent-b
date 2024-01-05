import { PartialType } from '@nestjs/mapped-types';
import { CreateSentmentDto } from './create-sentment.dto';

export class UpdateSentmentDto extends PartialType(CreateSentmentDto) {}
