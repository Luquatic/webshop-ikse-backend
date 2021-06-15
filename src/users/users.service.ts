import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './schemas/users.schema';
import {Model} from 'mongoose';
import {CreateUserDto} from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>,) {}

    async create(user: CreateUserDto): Promise<User> {
        user.password = await bcrypt.hash(user.password, 10);
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.userModel.findOne(user => {username});
    }
}
