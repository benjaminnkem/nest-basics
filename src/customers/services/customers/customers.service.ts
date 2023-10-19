import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'foo@example.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'adam@example.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'sola@example.com',
      createdAt: new Date(),
    },
  ];

  findCustomer(id: number) {
    const user = this.users.filter((user) => user.id === id)[0];
    console.log(
      user,
      this.users.filter((user) => user.id === id),
    );

    return user;
  }
}
