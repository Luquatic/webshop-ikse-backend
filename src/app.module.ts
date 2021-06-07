import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://136.144.149.26/ikse_db'),
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
