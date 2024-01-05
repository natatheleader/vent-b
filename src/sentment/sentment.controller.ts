import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SentmentService } from './sentment.service';
import { CreateSentmentDto } from './dto/create-sentment.dto';
import { UpdateSentmentDto } from './dto/update-sentment.dto';

@Controller('sentment')
export class SentmentController {
  constructor(private readonly sentmentService: SentmentService) {}

  @Post()
  create(@Body() createSentmentDto: CreateSentmentDto) {
    return this.sentmentService.create(createSentmentDto);
  }

  @Get()
  findAll() {
    return this.sentmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sentmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSentmentDto: UpdateSentmentDto) {
    return this.sentmentService.update(+id, updateSentmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sentmentService.remove(+id);
  }
}
