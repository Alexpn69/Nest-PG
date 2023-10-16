import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from './model/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './user.service';
import { Log } from 'src/logger/model/log.model';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  providers: [UserService, LoggerService],
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User, Log])],
})
export class UserModule {}
