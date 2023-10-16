import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { Log } from './model/log.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [LoggerService],
  controllers: [LoggerController],
  imports: [SequelizeModule.forFeature([Log])],
})
export class LoggerModule {}
