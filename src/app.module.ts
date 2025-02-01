import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { PostService } from './post/services/post.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { TagsService } from './tags/providers/tags.service';
@Module({
  imports: [UsersModule, PostModule, AuthModule, TagsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        //entities: [User],
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        username: 'studentscompany_users',
        password: 'changeme',
        host: "188.213.130.121",
        database: 'nestJsConnectionTrainingCourse'
      })

    }),
    TagsModule,
    MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
