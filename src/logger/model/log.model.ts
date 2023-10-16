import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'logs' })
export class Log extends Model<Log> {
  @ApiProperty({ example: '1', description: 'uniq autoincremented id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'Create',
    description: 'name of action which log describes',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  action: string;
  @ApiProperty({
    example: '3',
    description: 'id of user that was created or updated',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
