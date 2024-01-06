import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePostDto {

    @IsString({message: 'Title must be a string'})
    title:                  string

    @IsNotEmpty({message: 'Detail cannot be empty'})
    @IsString({message: 'Detail must be a string'})
    detail:                 string

    @IsBoolean()
    anonumous:              boolean

    @IsBoolean()
    comment:                boolean

    @IsBoolean()
    share:                  boolean

    @IsBoolean()
    public:                 boolean

    @IsArray()
    @IsOptional()
    options:                string[]
}
