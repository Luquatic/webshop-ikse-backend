import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema} from '../users/schemas/users.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'User', schema: UserSchema
    }])],
    controllers: [AuthController]
})
export class AuthModule {

}
