import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';

@Injectable()
export class AuthService {

    constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService) { }
    login(email: string, password: string) {
        const user = this.userService.findOneById(+'1234');
        return "SAMPLE_TOKEN"
    }


    public isAUth() {
        return true;
    }
}
