import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
@Injectable()
export class PostService {

    constructor(private readonly userService: UserService) { }
    public findAll(userId: string) {
        const user = this.userService.findOneById(userId);
        return [{
            user: user,
            title: 'Test title',
            content: 'Test content'
        }, {
            user: user,
            title: 'Test title 2',
            content: 'Test content 2'
        }]
    }
}
