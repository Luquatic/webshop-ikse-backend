import {Body, Controller, Post, UnauthorizedException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../constants';
import {UserDocument} from '../users/schemas/users.schema';
import {Model} from 'mongoose';

@Controller('login')
export class AuthController {

    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {
    }

    @Post()
    async login(@Body('username') username: string, @Body('password') plainPassword: string) {
        const user = await this.userModel.findOne({username})

        if(!user) {
            console.log('User doesn\'t exist in the database');
            throw new UnauthorizedException();
        }

        return new Promise((resolve, reject) => {
            password(plainPassword).verifyAgainst(user.password, (err, verified) => {
                    if(!verified) {
                        reject(new UnauthorizedException());
                    }

                    const authJwtToken = jwt.sign({username}, JWT_SECRET);
                    resolve({authJwtToken})
                }
            )
        });
    }
}
