import { BadRequestException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
import { CreatePostDto } from '../dtos/create-post.dtos';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dtos/patch-post-dto';
import { GetPostDto } from '../dtos/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { CreatePostProvider } from './create-post.provider';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
@Injectable()
export class PostService {

    constructor(
        private readonly userService: UserService,
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,

        //@InjectRepository(MetaOption) private readonly metaOptionRepository: Repository<MetaOption>,

        private readonly tagsService: TagsService,

        private readonly paginationProvider: PaginationProvider,

        private readonly createPostProvider: CreatePostProvider
    ) { }

    public async findAll(postQuery: GetPostDto, userId: string): Promise<Paginated<Post>> {
        /*const user = await this.userService.findOneById(+userId);
        let posts = await this.postRepository.find({
            relations: {
                metaOptions: true,
                author: true,
                tags: true
            },
            skip: (postQuery.page - 1) * postQuery.limit,
            take: postQuery.limit,
        })*/

        let posts = await this.paginationProvider.paginateQuery({
            limit: postQuery.limit,
            page: postQuery.page
        }, this.postRepository,)
        return posts
    }

    public async createPost(createPostDto: CreatePostDto, user: ActiveUserData) {
        return await this.createPostProvider.createPost(createPostDto, user)
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
