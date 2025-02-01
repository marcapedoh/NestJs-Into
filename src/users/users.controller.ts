import { Body, Controller, DefaultValuePipe, Get, Header, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDTO } from './dtos/create-many-user.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly userService: UserService) { }
    @Get('/:id/:optional?')
    @ApiOperation({
        summary: "Fetches a list of registered users on the application",
    })
    @ApiResponse({
        status: 200,
        description: "Users fetched successfully based on the query"
    })
    @ApiQuery({
        name: 'limit',
        type: "number",
        required: false,
        description: "the number of entries returned per query",
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: "number",
        required: false,
        description: "the position of the page number that you want the API to return ",
        example: 1
    })
    public getUsers(/*@Param('id', ParseIntPipe) id: number | undefined*/ @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return this.userService.findAll(getUsersParamDto, limit, page)
    }

    @Post()
    public createUsers(@Body() createUserDTO: CreateUserDto,
    ) {
        return this.userService.createUser(createUserDTO);
    }

    @Post('create-many')
    public createManyUsers(@Body() createManyUsersDTO: CreateManyUsersDTO
    ) {
        return this.userService.createMany(createManyUsersDTO);
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto) {
        return patchUserDto
    }
}
