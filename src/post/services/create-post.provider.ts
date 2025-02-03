import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { UserService } from 'src/users/providers/user.service';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

@Injectable()
export class CreatePostProvider {

    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,
        private readonly tagsService: TagsService,
        private readonly userService: UserService,


    ) { }
    public async createPost(createPostDto: CreatePostDto, user: ActiveUserData) {
        //let metaOptions = createPostDto.metaOptions ? this.metaOptionRepository.create(createPostDto.metaOptions) : null
        let author = undefined;
        let tags = undefined;
        try {
            tags = await this.tagsService.findMultpleTags(createPostDto.tags)
            author = await this.userService.findOneById(user.sub);
        } catch (error) {
            throw new ConflictException(error)
        }

        if (createPostDto.tags.length === tags.length) {
            throw new BadRequestException("please checks your tag  ids")
        }
        let post = this.postRepository.create({
            ...createPostDto,
            author: author,
            tags: tags
        })
        /*
        if (metaOptions) {
                    await this.metaOptionRepository.save(metaOptions);
                }
                if (metaOptions) {
                    post.metaOptions = metaOptions
                }*/
        try {

            return await this.postRepository.save(post)
        } catch (error) {
            throw new ConflictException(error, {
                description: " ensure post slug is unique inside and not duplicate"
            })
        }
    }
}
