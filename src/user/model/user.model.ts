import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  DataType,
  AfterUpdate,
} from 'sequelize-typescript';
import { Log } from 'src/logger/model/log.model';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @AfterUpdate
  static async afterCreateHook(instance: User) {
    try {
      await Log.create({
        action: 'update',
        userId: instance.id,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @ApiProperty({ example: '1', description: 'uniq autoincremented id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'Bill', description: 'uniq user name' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
  @ApiProperty({ example: '42', description: 'user age' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;
}
