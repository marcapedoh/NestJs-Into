import { Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindOneUserByEmailProvider {

    constructor(
        @InjectRepository(User) private readonly userReposiory: Repository<User>
    ) { }

    public async findOneByEmail(email: string) {
        let user: User | undefined = undefined;

        try {
            user = await this.userReposiory.findOneBy({ email: email });
        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: 'could not fetch user'
            })
        }

        if (!user) {
            throw new UnauthorizedException("use does not exist")
        }
        return user;
    }
}
