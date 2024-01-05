import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPostDto: CreatePostDto, @GetUser() user: User) {
        return this.postService.create(createPostDto, user);
    }

    @Get()
    findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @GetUser() user: User) {
        return this.postService.update(+id, updatePostDto, user);
    }

    @Delete(':id')
    remove(@Param('id') id: string,  @GetUser() user: User) {
        return this.postService.remove(+id, user);
    }
}
