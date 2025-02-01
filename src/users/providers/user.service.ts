import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/service/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UserService {

    constructor(
        @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService,
        @InjectRepository(User) private userRepository: Repository<User>,
        private readonly configService: ConfigService,
        @Inject(profileConfig.KEY) private readonly profilConfiguration: ConfigType<typeof profileConfig>
    ) { }

    /**
     * The method to get all the users from the database
     */
    public findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {
        const isAUth = this.authService.isAUth();
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
        ]
    }
    /**
     * Find a single user using the ID of user
     */

    public async findOneById(id: number) {
        return await this.userRepository.findOneBy({
            id: id,
        })
    }

    public async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: {
                email: createUserDto.email
            }
        })
        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser)
        return newUser
    }
}