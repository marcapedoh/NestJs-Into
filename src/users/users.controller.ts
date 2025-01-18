import { Body, Controller, DefaultValuePipe, Get, Header, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly userService: UserService) { }
    @Get('/:id/:optional?')
    public getUsers(/*@Param('id', ParseIntPipe) id: number | undefined*/ @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return this.userService.findAll(getUsersParamDto, limit, page)
    }

    @Post()
    public createUsers(@Body() createUserDTO: CreateUserDto,
    ) {
        console.log(createUserDTO)
        return "you sent a post request to users endpoint";
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto) {
        return patchUserDto
    }
}
