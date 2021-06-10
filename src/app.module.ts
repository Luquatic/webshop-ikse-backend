import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {DATABASE_CONNECTION} from './constants';
import {ProductsModule} from './products/products.module';

@Module({
    imports: [
        MongooseModule.forRoot(DATABASE_CONNECTION),
        UsersModule,
        ProductsModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
