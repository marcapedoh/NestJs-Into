import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { SignInDto } from './dtos/signin.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/auth-type';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    @Auth(AuthType.none)
    public async signIn(@Body() signinDto: SignInDto) {
        return this.authService.signIn(signinDto)
    }

    @Post('refresh-tokens')
    @HttpCode(HttpStatus.OK)
    @Auth(AuthType.none)
    public async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
        return this.authService.refreshToken(refreshTokenDto)
    }
}
