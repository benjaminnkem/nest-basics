import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService, UserData } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): UserData[] {
    return this.appService.getUsers();
  }

  @Get(':name')
  getUser(@Param('name') name: string) {
    const user = this.appService.getSingleUser(name);
    if (user) return user;
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
