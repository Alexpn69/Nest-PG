import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Bill', description: 'uniq user name' })
  @IsString({ message: 'Type of value isnt string' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '42', description: 'user age' })
  @IsNumber({}, { message: 'Type of value isnt number' })
  @IsNotEmpty()
  readonly age: number;
}
