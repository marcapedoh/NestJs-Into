import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './services/post.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('posts')
export class PostController {

    constructor(private readonly postService: PostService) { }

    @Get('/:userId?')
    public getPost(@Param('userId') userId: string) {
        return this.postService.findAll(userId)
    }
}
