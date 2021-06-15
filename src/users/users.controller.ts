import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {User} from './schemas/users.schema';

@UseGuards()
@Controller('/api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async create(@Body() user: CreateUserDto) {
        await this.usersService.create(user);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':username')
    findOne(@Param() params): Promise<User | undefined> {
        return this.usersService.findByUsername(params.username);
    }
}
