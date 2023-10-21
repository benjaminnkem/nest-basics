import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/user-not-found.exceptions';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUsers } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (!user) throw new UserNotFoundException();

    return new SerializedUsers(user);
  }
}
