import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customers } from 'src/customers/types/customers.types';

@Injectable()
export class CustomersService {
  private users: Customers[] = [
    {
      id: 1,
      email: 'foo@example.com',
      name: 'Benjamin Nkem',
    },
    {
      id: 2,
      email: 'adam@example.com',
      name: 'Martha John',
    },
    {
      id: 3,
      email: 'sola@example.com',
      name: 'Judas Iscariot',
    },
  ];

  findCustomerById(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.users.push(customerDto);
  }
}
