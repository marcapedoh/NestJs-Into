import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { PostService } from './post/services/post.service';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, PostModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PostService],
})
export class AppModule { }
