import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/status.enum";
import { CreatePostMetaOptionsDto } from "./create-post-meta-option.dtos";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        example: "This is a title",
        description: "this is the title of the blog post"
    })
    @IsString()
    @MinLength(4)
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
    @IsString({
        each: true
    })
    @MinLength(3, { each: true })
    @ApiPropertyOptional({
        description: "Array of tags passed as string values",
        example: ["nestJs", "typescript"],
    })
    tags?: string[];
    @IsOptional()
    @ApiPropertyOptional({
        type: 'array',
        required: false,
        items: {
            type: 'object',
            properties: {
                key: {
                    type: 'string',
                    description: 'The key can be any string identifier for your meta option',
                    example: "sidebarEnabled"
                },
                value: {
                    type: 'any',
                    description: 'any value that you want to save to the key',
                    example: true
                },
            }
        }
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto[/*{ key: "sidebarEnabled", value: true }*/];
}