import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './services/post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [UsersModule, TagsModule, TypeOrmModule.forFeature([Post, MetaOption])]
})
export class PostModule { }
