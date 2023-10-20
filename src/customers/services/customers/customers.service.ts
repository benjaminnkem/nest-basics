import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
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
}
