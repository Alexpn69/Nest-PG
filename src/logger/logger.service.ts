import { Injectable } from '@nestjs/common';
import { Log } from './model/log.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLogDto } from './dto/create.log.dto';

@Injectable()
export class LoggerService {
  constructor(@InjectModel(Log) private logModel: typeof Log) {}

  async createLog(log: CreateLogDto): Promise<Log> {
    try {
      return await this.logModel.create(log);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllLogs(): Promise<Log[]> {
    try {
      return await this.logModel.findAll({ order: [['id', 'ASC']] });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getLogByUserId(
    id: string,
    page: number = 1,
    pageSize: number = 2,
  ): Promise<Log[]> {
    try {
      const offset = (page - 1) * pageSize;
      return await this.logModel.findAll({
        where: { userId: id },
        offset,
        limit: pageSize,
        order: [['id', 'DESC']],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
