import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { User } from '@prisma/client';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class PostService {
    constructor (
        private prisma: PrismaService, 
    ) {}
    
    async create(createPostDto: CreatePostDto, user: User) {
        try {
            const post = await this.prisma.post.create({
                data: {
                    title: createPostDto.title,
                    detail: createPostDto.detail,
                    anonumous: createPostDto.anonumous,
                    comment: createPostDto.comment,
                    share: createPostDto.share,
                    user_id: user.id 
                }
            });

            if (post) {
                if (isNotEmpty(createPostDto.options)) {
                    createPostDto.options.forEach(async option => {
                        const opt = await this.prisma.option.create({
                            data: {
                                option: option,
                                post_id: post.id,
                            }
                        })
                    });
                }
                return post;
            }
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException (
                        'Credentials Taken'
                    )
                }
            }
            throw new ForbiddenException (
                'There has been an error. Please check the inputs and try again.'
            )
        }
    }

    async findAll() {
        const posts = await this.prisma.post.findMany();

        if (posts) {
            return posts;
        } else {
            return { 'message': 'No post found.' }
        }
    }

    async findOne(id: number) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: id
            }
        })

        if (post) {
            return post;
        } else {
            return { 'message': 'No post found.' }
        }
    }

    async update(id: number, updatePostDto: UpdatePostDto, user: User) {
        const post = await this.prisma.post.findFirst({
            where: {
                id: id,
            }
        })

        if (post && post.user_id == user.id) {
            try {
                const newPost = await this.prisma.post.update({
                    where: {
                        id: id,
                    },
                    data: {
                        title: updatePostDto.title,
                        detail: updatePostDto.detail,
                        anonumous: updatePostDto.anonumous,
                        comment: updatePostDto.comment,
                        share: updatePostDto.share,
                    },
                });

                if (newPost) {
                    return newPost;
                } else {
                    throw new ForbiddenException(
                        'There has been an error. Please check the inputs and try again.'
                    )
                }
            } catch (error) {
                if (error instanceof PrismaClientKnownRequestError) {
                    if (error.code === 'P2002') {
                        throw new ForbiddenException(
                            'Credentials Taken'
                        )
                    }
                }
                throw new ForbiddenException(
                    'There has been an error. Please check the inputs and try again.'
                )
            }
        } else {
            throw new ForbiddenException(
                'Can\'t update. Please try again.'
            )
        }
    }

    async remove(id: number, user: User) {
        const post = await this.prisma.post.findFirst({
            where: {
                id: id,
            }
        })

        if (post && post.user_id == user.id) {
            const deletePost = this.prisma.post.delete({
                where: {
                    id: id,
                }
            })

            if (deletePost) {
                return { 'message': 'Post Deleted Successfully.' }
            }
        } else {
            throw new ForbiddenException(
                'Can\'t delete. Please Try Again.'
            )
        }
    }
}
