import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from "../prisma/prisma.service";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { User } from '@prisma/client';
const fs = require('fs');

@Injectable()
export class ProfileService {
    constructor (
        private prisma: PrismaService, 
    ) {}

    async create(image: Express.Multer.File, createProfileDto: CreateProfileDto, user: User) {
        const profile = await this.prisma.profile.findFirst({
            where: {
                user_id: user.id,
            }
        })

        if (!profile) {
            const name = image.path.split('\\');

            // const sign = this.zodiac_sign(day, month)

            try {
                const profile = await this.prisma.profile.create({
                    data: {
                        first_name: createProfileDto.first_name,
                        last_name: createProfileDto.last_name,
                        sex: createProfileDto.sex,
                        date_of_birth: createProfileDto.date_of_birth,
                        astro_sign: "test",//sign
                        country: createProfileDto.country,
                        city: createProfileDto.city,
                        bio: createProfileDto.bio,
                        profile_image: name[3],
                        user_id: user.id,
                    },
                });

                if (profile) {                    
                    return {
                        profile,
                        message: 'Profile created successfully.',
                        success: true
                    }
                } else {
                    throw new ForbiddenException (
                        'There has been an error. Please check the inputs and try again.'
                    )
                }
            } catch(error) {
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
        } else {
            throw new ForbiddenException (
                'Can\'t create a profile while the user already have a profile. Please try updating the profile.'
            )
        }
    }

    async findAll() {
        const profiles = await this.prisma.profile.findMany();

        if (profiles) {
            return {
                profiles,
                message: 'Profiles returned successfully.',
                success: true
            }
        } else {
            return {
                profiles,
                message: 'No profile found.',
                success: true
            }
        }
    }

    async findMe(user: User) {
        const profile = await this.prisma.profile.findFirst({
            where: {
                user_id : user.id,
            }
        })

        if (profile) {
            return {
                profile,
                message: 'Profile returned successfully.',
                success: true
            }
        } else {
            return {
                profile,
                message: 'No profile found.',
                success: true
            }
        }
    }

    async findOne(id: number) {
        const profile = await this.prisma.profile.findUnique({
            where: {
                id : id
            }
        })

        if (profile) {
            return {
                profile,
                message: 'Profile returned successfully.',
                success: true
            }
        } else {
            return {
                profile,
                message: 'No profile found.',
                success: true
            }
        }
    }

    async update(image: Express.Multer.File, user: User, updateProfileDto: UpdateProfileDto) {
        const profile = await this.prisma.profile.findFirst({
            where: {
                user_id: user.id,
            }
        })

        if (profile) {

            if (image) {
                try {
                    const oldImage = profile.profile_image;
        
                    const name = image.path.split('\\');
        
                    const newProfile = await this.prisma.profile.update({
                        where: {
                            id: profile.id,
                        },
                        data: {
                            profile_image: name[3]
                        },
                    });

                    if (newProfile) {
                        fs.unlink("./uploads/profile/profile-image/" + oldImage, (err) => {
                            if (err) {
                            console.error(err)
                            return
                            }
                        })
                        
                    } else {
                        throw new ForbiddenException (
                            'There has been an error. Please check the inputs and try again.'
                        )
                    }
                } catch(error) {
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

            try {
                const newProfile = await this.prisma.profile.update({
                    where: {
                        id: profile.id,
                    },
                    data: {
                        first_name: updateProfileDto.first_name,
                        last_name: updateProfileDto.last_name,
                        sex: updateProfileDto.sex,
                        date_of_birth: updateProfileDto.date_of_birth,
                        astro_sign: "test",//sign
                        country: updateProfileDto.country,
                        city: updateProfileDto.city,
                        bio: updateProfileDto.bio,                       
                        user_id: user.id,
                    },
                });

                if (newProfile) {
                    return {
                        newProfile,
                        message: 'Profile updated successfully.',
                        success: true
                    }
                } else {
                    throw new ForbiddenException (
                        'There has been an error. Please check the inputs and try again.'
                    )
                }
            } catch(error) {
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
        } else {
            throw new ForbiddenException (
                'Can\'t update while there is no profile. Please create a profile first.'
            )
        }
    }

    async remove(user: User) {
        const profile = await this.prisma.profile.findFirst({
            where: {
                user_id: user.id,
            }
        })

        if (profile) {
            const image = profile.profile_image;
            try {
                const deleted_profile = await this.prisma.profile.delete({
                    where: {
                        id: profile.id,
                    }
                });

                if (deleted_profile) {
                    if (image != 'null' || image != null) {
                        fs.unlink("./uploads/profile/profile-image/" + image, (err) => {
                            if (err) {
                                console.error(err)
                                return
                            }
                        })
                    }
                    return {
                        deleted_profile,
                        message: 'Profile deleted successfully.',
                        success: true
                    }
                }
            } catch(error) {
                throw new ForbiddenException (
                    'There has been an error. Please check the inputs and try again.'
                )
            }
        } else {
            throw new ForbiddenException (
                'Can\'t delete while there is no profile. Please create a profile first.'
            )
        }
    }

    zodiac_sign(day, month) {
        let astro_sign="";
            
        // checks month and date within the 
        // valid range of a specified zodiac
        if (month == "december"){                
            if (day < 22)
                astro_sign = "sagittarius";
            else
                astro_sign ="capricorn";
        } else if (month == "january"){
            if (day < 20)
                astro_sign = "capricorn";
            else
                astro_sign = "aquarius";
        } else if (month == "february"){
            if (day < 19)
                astro_sign = "aquarius";
            else
                astro_sign = "pisces";
        } else if(month == "march"){
            if (day < 21) 
                astro_sign = "pisces";
            else
                astro_sign = "aries";
        } else if (month == "april"){
            if (day < 20)
                astro_sign = "aries";
            else
                astro_sign = "taurus";
        } else if (month == "may"){
            if (day < 21)
                astro_sign = "taurus";
            else
                astro_sign = "gemini";
        } else if( month == "june"){
            if (day < 21)
                astro_sign = "gemini";
            else
                astro_sign = "cancer";
        } else if (month == "july"){
            if (day < 23)
                astro_sign = "cancer";
            else
                astro_sign = "leo";
        } else if( month == "august"){
            if (day < 23) 
                astro_sign = "leo";
            else
                astro_sign = "virgo";
        } else if (month == "september"){
            if (day < 23)
                astro_sign = "virgo";
            else
                astro_sign = "libra";
        } else if (month == "october"){
            if (day < 23)
                astro_sign = "libra";
            else
                astro_sign = "scorpio";
        } else if (month == "november"){
            if (day < 22)
                astro_sign = "scorpio";
            else
                astro_sign = "sagittarius";
        }
                
        return astro_sign;
    }
}
