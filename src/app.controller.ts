import { Controller, Get, Param } from '@nestjs/common';
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
    return this.appService.getSingleUser(name);
  }
}
