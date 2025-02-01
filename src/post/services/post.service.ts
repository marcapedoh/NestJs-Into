import { BadRequestException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
import { CreatePostDto } from '../dtos/create-post.dtos';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post-dto';
@Injectable()
export class PostService {

    constructor(private readonly userService: UserService,
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,

        @InjectRepository(MetaOption) private readonly metaOptionRepository: Repository<MetaOption>,

        private readonly tagsService: TagsService) { }
    public async findAll(userId: string) {
        const user = await this.userService.findOneById(+userId);
        let posts = await this.postRepository.find({
            relations: {
                metaOptions: true,
                author: true,
                tags: true
            }
        })
        return posts
    }

    public async createPost(createPostDto: CreatePostDto) {
        //let metaOptions = createPostDto.metaOptions ? this.metaOptionRepository.create(createPostDto.metaOptions) : null

        let tags = await this.tagsService.findMultpleTags(createPostDto.tags)
        let author = await this.userService.findOneById(createPostDto.authorId);
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

        return await this.postRepository.save(post)
    }

    public async delete(id: number) {

        let post = await this.postRepository.findOneBy({ id: id })

        await this.postRepository.delete(id)

        /*await this.metaOptionRepository.delete(post.metaOptions.id)
*/
        /*let inversePost = await this.metaOptionRepository.find({
            where: {
                id: post.metaOptions.id
            },
            relations: {
                post: true
            }
        })*/
        return { deleted: true, id }
    }


    public async update(patchPostDto: PatchPostDto) {
        let tags = undefined;
        let post = undefined;
        try {
            tags = await this.tagsService.findMultpleTags(patchPostDto.tags);
        } catch (err) {
            throw new RequestTimeoutException('unable to process your request please try later',);
        }

        if (!tags || tags.length !== patchPostDto.tags.length) {
            throw new BadRequestException('please check your tag Ids and ensure they are correct')
        }

        try {
            post = await this.postRepository.findOneBy({ id: patchPostDto.id })
        } catch (e) {
            throw new RequestTimeoutException('unable to process your request please try later',);

        }

        if (!post) {
            throw new BadRequestException('The post id does not exist')
        }

        post.title = patchPostDto.title ?? post.title;
        post.content = patchPostDto.content ?? post.content
        post.status = patchPostDto.status ?? post.status
        post.slug = patchPostDto.slug ?? post.slug
        post.postType = patchPostDto.postType ?? post.postType
        post.featuredImageUrl = patchPostDto.featuredImageUrl ?? post.featuredImageUrl
        post.publishOn = patchPostDto.publishOn ?? post.publishOn

        post.tags = tags
        try {
            await this.postRepository.save(post)
        } catch (err) {
            throw new RequestTimeoutException('unable to process your request please try later',);
        }
        return post;
    }
}
