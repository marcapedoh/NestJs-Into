import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/providers/mail.service';

@Injectable()
export class CreateUserProvider {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @Inject(forwardRef(() => HashingProvider)) private readonly hashingProvider: HashingProvider,
        private readonly mailService: MailService
    ) { }

    public async createUser(createUserDto: CreateUserDto) {
        let existingUser = undefined;
        try {
            existingUser = await this.userRepository.findOne({
                where: {
                    email: createUserDto.email
                }
            })

        } catch (error) {
            throw new RequestTimeoutException('Unable to process your request at the moment please try later', {
                description: 'Error connectiong to the database'
            })
        }

        if (existingUser) {
            throw new BadRequestException('The user already exists, please check your email.')
        }
        let newUser = this.userRepository.create({
            ...createUserDto,
            password: await this.hashingProvider.hashPassword(createUserDto.password)
        });

        try {
            newUser = await this.userRepository.save(newUser)
        } catch (err) {
            throw new RequestTimeoutException('Unable to process your request at the moment please try later', {
                description: 'Error connecting to the database'
            })
        }

        try {
            this.mailService.sendUserWelcome(newUser)
        } catch (error) {
            throw new RequestTimeoutException(error)
        }
        return newUser
    }
}
function InejectRepository(): (target: typeof CreateUserProvider, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

