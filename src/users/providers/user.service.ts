import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/service/auth.service";

@Injectable()
export class UserService {

    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService) { }
    public findAll(getUserParamDto: GetUsersParamDto, limit: number, page: number) {
        const isAUth = this.authService.isAUth();
        console.log(isAUth)
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

    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@doe.com'
        }
    }
}