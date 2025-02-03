import { forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from '../dtos/signin.dto';
import { UserService } from 'src/users/providers/user.service';
import { HashingProvider } from './hashing.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { GenerateTokensProvider } from './generate-tokens.provider';

@Injectable()
export class SignInProvider {

    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
        private readonly hashingProvider: HashingProvider,
        private readonly jwtService: JwtService,
        private readonly generateTokensProvider: GenerateTokensProvider,
        @Inject(jwtConfig.KEY) private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ) {

    }
    public async signIn(signInDto: SignInDto) {
        let user = await this.userService.findOneByEmail(signInDto.email)

        let isEqual: boolean = false

        try {
            isEqual = await this.hashingProvider.comparePassword(signInDto.password, user.password)
        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: 'could not compare password'
            })
        }

        if (!isEqual) {
            throw new UnauthorizedException("incorrect password")
        }
        return await this.generateTokensProvider.generateToken(user)
    }
}
