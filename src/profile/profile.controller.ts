import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpStatus, HttpCode, UseGuards, UploadedFile } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User } from '@prisma/client';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/common/utils/file-upload.utils';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { diskStorage } from 'multer';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseInterceptors(FileInterceptor('profile', {
        storage: diskStorage({
            destination: './uploads/profile/profile-image',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    //add validators
    create(@UploadedFile() file: Express.Multer.File, @Body() createProfileDto: CreateProfileDto, @GetUser() user: User) {
        return this.profileService.create(file, createProfileDto, user);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.profileService.findAll();
    }

    @Get('me')
    @HttpCode(HttpStatus.OK)
    findMe(@GetUser() user: User) {
        return this.profileService.findMe(user);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(+id);
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(FileInterceptor('profile', {
        storage: diskStorage({
            destination: './uploads/profile/profile-image',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    update(@UploadedFile() file: Express.Multer.File, @GetUser() user: User, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(file, user, updateProfileDto);
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    remove(@GetUser() user: User) {
        return this.profileService.remove(user);
    }
}

