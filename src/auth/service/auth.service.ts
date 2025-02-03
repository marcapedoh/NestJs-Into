import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
import { SignInDto } from '../dtos/signin.dto';
import { SignInProvider } from '../providers/sign-in.provider';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { GenerateTokensProvider } from '../providers/generate-tokens.provider';
import { RefreshTokensProvider } from '../providers/refresh-tokens.provider';

@Injectable()
export class AuthService {

    constructor(@Inject(forwardRef(() => UserService)) private readonly userService: UserService,
        private readonly signInProvider: SignInProvider,
        private readonly refreshTokenProvider: RefreshTokensProvider

    ) { }
    public async signIn(signInDto: SignInDto) {
        return await this.signInProvider.signIn(signInDto)
    }


    public async refreshToken(refreshTokenDto: RefreshTokenDto) {
        return await this.refreshTokenProvider.refreshTokens(refreshTokenDto)
    }
}
