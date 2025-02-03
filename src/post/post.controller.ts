import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { PostService } from './services/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dtos';
import { PatchPostDto } from './dtos/patch-post-dto';
import { GetPostDto } from './dtos/get-posts.dto';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

@Controller('post')
@ApiTags('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Get('/:userId?')
    public getPost(@Param('userId') userId: string, @Query() postQuery: GetPostDto) {
        return this.postService.findAll(postQuery, userId)
    }

    @ApiOperation({
        summary: "Creates a new blog post"
    })
    @ApiResponse({
        status: 201,
        description: "you get a 201 response if your post is created successfully"
    })
    @Post()
    public createPost(@ActiveUser() user: ActiveUserData, @Body() createPostDto: CreatePostDto) {

        return this.postService.createPost(createPostDto, user)
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
        return this.postService.update(patchPostDto)
    }

    @Delete()
    public deletePost(@Query("id", ParseIntPipe) id: number) {
        return this.postService.delete(id)
    }
}
