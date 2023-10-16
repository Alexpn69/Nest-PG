import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Bill', description: 'uniq user name' })
  @IsString({ message: 'Type of value isnt string' })
  readonly name: string;
  @ApiProperty({ example: '42', description: 'user age' })
  @IsNumber({}, { message: 'Type of value isnt number' })
  readonly age: number;
}
