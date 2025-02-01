import { ConflictException, Injectable, RequestTimeoutException } from '@nestjs/common';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { DataSource } from 'typeorm';
import { CreateManyUsersDTO } from '../dtos/create-many-user.dto';

@Injectable()
export class UserCreateManyProvider {

    constructor(private readonly dataSource: DataSource) { }
    public async createMany(createManyUsersDto: CreateManyUsersDTO) {
        let newUsers: User[] = []

        const queryRunner = this.dataSource.createQueryRunner();
        try {
            await queryRunner.connect();

            await queryRunner.startTransaction();
        } catch (error) {
            throw new RequestTimeoutException('could not connect to the database')
        }

        try {
            for (let user of createManyUsersDto.users) {
                let newUser = queryRunner.manager.create(User, user)
                let result = await queryRunner.manager.save(newUser)
                newUsers.push(result)
            }
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw new ConflictException('could not complete the transaction', {
                description: String(error)
            })
        } finally {
            try {
                await queryRunner.release()
            } catch (error) {
                throw new RequestTimeoutException('could not release to the connection', {
                    description: String(error)
                })
            }
        }
        return newUsers
    }
}
