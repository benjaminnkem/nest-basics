import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Body,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly appService: CustomersService) {}

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.appService.findCustomerById(id);
    if (customer) {
      return customer;
    }

    return new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  createCustomer(@Body() createUserDto: CreateCustomerDto) {
    console.log(createUserDto);
  }
}
