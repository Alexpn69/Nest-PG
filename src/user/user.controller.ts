import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './model/user.model';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @ApiOperation({ summary: 'User update' })
  @ApiResponse({ status: 200, type: User })
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @ApiOperation({ summary: 'List of all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
