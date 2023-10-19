import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly appService: CustomersService) {}

  @Get(':id')
  getCustomer(@Param('id') id: number) {
    return this.appService.findCustomer(id);
  }
}
