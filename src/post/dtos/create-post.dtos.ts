import { IsArray, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-meta-option.dtos";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        example: "This is a title",
        description: "this is the title of the blog post"
    })
    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    title: string;

    @IsEnum(postType)
    @IsNotEmpty()
    @ApiProperty({
        enum: postType,
        description: "Possible values, 'POST', 'PAGE','STORY','SERIES'",
    })
    postType: postType;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        description: "This is the content of the post",
        example: "the post content"
    })
    content?: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: "For example - 'my-url'",
        example: "my-blog-post"
    })
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all small letters and uses only "-" and without spaces. For example "my-url'
    })
    @MaxLength(256)
    slug: string;


    @IsEnum(postStatus)
    @IsNotEmpty()
    @ApiProperty({
        enum: postStatus,
        description: " Possible values, 'DRAFT', 'SCHEDULED','REVIEW', 'PUBLISHED'"
    })
    status: postStatus;

    @IsOptional()
    @IsJSON()
    @ApiPropertyOptional({
        description: "Serialize your JSON object else a validation error will be thrown",
        example: "{\r\n \"@context\": \"https:\/\/schema.org\",\r\n \"@type\": \"Person\"\r\n}"
    })
    schema?: string;


    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    @ApiPropertyOptional({
        description: "featured image for your blog post",
        example: "http://localhost.com/images/image1.jpg"
    })
    featuredImageUrl?: string;


    @IsISO8601()
    @IsOptional()
    @ApiPropertyOptional({
        description: "The date on which the blog post is published",
        example: "2024-03-16T07:46:32+0000",
    })
    publishOn?: Date;


    @IsOptional()
    @IsArray()
    @IsInt({
        each: true
    })
    @ApiPropertyOptional({
        description: "Array of ids of tags",
        example: [1, 2],
    })
    tags?: number[];



    @IsOptional()
    @ApiPropertyOptional({
        type: 'object',
        required: false,
        items: {
            type: 'object',
            properties: {
                metaValue: {
                    type: 'json',
                    description: 'The metaValue is JSON string',
                    example: '{"sidebarEnabled":true}'
                }
            }
        }
    })

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto | null;

    /*@IsInt()
    @IsNotEmpty()
    @ApiProperty({
        type: 'integer',
        required: true,
        example: 1
    })
    authorId: number;*/
}