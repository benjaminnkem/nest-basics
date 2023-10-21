import { Injectable } from '@nestjs/common';
import { SerializedUsers, Users } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: Users[] = [
    { username: 'Benjamin', password: 'pas23345' },
    { username: 'Julie', password: 'pas23efwwe345' },
    { username: 'Frank', password: 'pas22d$%3345' },
    { username: 'Mike', password: 'pas23342232345' },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUsers(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
