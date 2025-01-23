import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './services/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dtos';
import { PatchPostDto } from './dtos/patch-post-dto';

@Controller('post')
@ApiTags('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Get('/:userId?')
    public getPost(@Param('userId') userId: string) {
        return this.postService.findAll(userId)
    }

    @ApiOperation({
        summary: "Creates a new blog post"
    })
    @ApiResponse({
        status: 201,
        description: "you get a 201 response if your post is created successfully"
    })
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto) {
        console.log(createPostDto)
    }
    @ApiOperation({
        summary: "Updates an existing blog post"
    })
    @ApiResponse({
        status: 200,
        description: "A 200 response if the post is updated successfully"
    })
    @Patch()
    public updatePost(@Body() patchPostDto: PatchPostDto) {
        console.log(patchPostDto)
    }
}
