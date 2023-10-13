import { Injectable } from '@nestjs/common';

export interface UserData {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getUsers(): UserData[] {
    const users = [
      { name: 'Benjamin Nkem', age: 18 },
      { name: 'Tochi Junior', age: 20 },
      { name: 'Michael', age: 20 },
    ];

    return users;
  }
  getSingleUser(name: string): UserData {
    const filteredUser = this.getUsers().filter(
      (user) => user.name === name,
    )[0];

    return filteredUser;
  }
}
