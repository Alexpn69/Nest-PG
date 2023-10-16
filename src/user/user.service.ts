import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly loggerService: LoggerService,
  ) {}

  async createUser(user: CreateUserDto): Promise<User> {
    try {
      const newUser = await this.userModel.create(user);
      await this.loggerService.createLog({
        action: 'create',
        userId: newUser.id,
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<User> {
    try {
      const userToUpdate = await this.userModel.findByPk(id);
      if (!userToUpdate) {
        throw new Error(`There isnt user with id:${id}`);
      }
      return await userToUpdate.update(user);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userModel.findAll({
        order: [['id', 'ASC']],
      });
    } catch (error) {
      console.log(error);
    }
  }
}
