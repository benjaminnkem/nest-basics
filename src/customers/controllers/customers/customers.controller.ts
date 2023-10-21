import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly appService: CustomersService) {}

  @Get()
  getAllUsers() {
    return this.appService.getAllCustomers();
  }

  @Get('/search/:id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.appService.findCustomerById(id);
    if (customer) {
      return customer;
    }

    return new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createUserDto: CreateCustomerDto) {
    this.appService.createCustomer(createUserDto);
  }
}
