import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/service/auth.service";
import { DataSource, Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { UserCreateManyProvider } from "./user-create-many.provider";
import { CreateManyUsersDTO } from "../dtos/create-many-user.dto";
import { CreateUserProvider } from "./create-user.provider";
import { FindOneUserByEmailProvider } from "./find-one-user-by-email.provider";
import { FindOneByGoogleIdProvider } from "./find-one-by-google-id.provider";
import { CreateGoogleUserProvider } from "./create-google-user.provider";
import { GoogleUser } from "../interfaces/google-user.interface";

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UserService {

    constructor(
        @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService,
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly configService: ConfigService,
        @Inject(profileConfig.KEY) private readonly profilConfiguration: ConfigType<typeof profileConfig>,
        private readonly usersCreateManyProvider: UserCreateManyProvider,
        private readonly createGoogleUserProvider: CreateGoogleUserProvider,
        private readonly createUsersProvider: CreateUserProvider,
        private readonly findOneByGoogleIdPrvider: FindOneByGoogleIdProvider,
        private readonly findOneUserByEmailProvider: FindOneUserByEmailProvider
    ) { }

    /**
     * The method to get all the users from the database
     */
    public findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {
        /* const isAUth = this.authService.isAUth();
         console.log(isAUth)
 
         const environment = this.configService.get<string>("S3_BUCKET")
         console.log(environment)
         console.log(this.profilConfiguration)
         console.log(this.profilConfiguration.apiKey)
         return [
             {
                 firstName: 'John',
                 email: 'john@doe.com'
             },
             {
                 firstName: 'Alice',
                 email: 'alice@doe.com'
             }
         ]*/

        throw new HttpException({
            status: HttpStatus.MOVED_PERMANENTLY,
            error: 'The API endpoint does not exist',
            fileName: 'user.service.ts',
            lineNumber: 14,
        }, HttpStatus.MOVED_PERMANENTLY, {
            description: 'Occured because the API endpoint was permanently moved'
        })
    }
    /**
     * Find a single user using the ID of user
     */

    public async findOneById(id: number) {
        let user = undefined;

        try {
            user = await this.userRepository.findOneBy({
                id: id,
            })
        } catch (err) {
            throw new RequestTimeoutException('Unable to process your request at the moment please try later', {
                description: 'Error connectiong to the database'
            })
        }

        if (!user) {
            throw new BadRequestException('The user id does not exist')
        }
        return await this.userRepository.findOneBy({
            id: id,
        })
    }

    public async createUser(createUserDto: CreateUserDto) {
        return this.createUsersProvider.createUser(createUserDto)
    }

    public async createMany(createManyUsersDto: CreateManyUsersDTO) {
        return await this.usersCreateManyProvider.createMany(createManyUsersDto)
    }

    public async findOneByEmail(email: string) {
        return await this.findOneUserByEmailProvider.findOneByEmail(email)
    }

    public async findOneByGoogleId(googleId: string) {
        return this.findOneByGoogleIdPrvider.findOneByGoogleId(googleId)
    }

    public async createGoogleUser(googleUser: GoogleUser) {
        return await this.createGoogleUserProvider.createGoogleUser(googleUser)
    }
}