import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async createdUser(newUser: User) {
    try {
      const user = this.repository.save(newUser);
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
