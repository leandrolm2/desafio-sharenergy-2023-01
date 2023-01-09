import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user: User = await this.userService.findOne(email);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (compareSync(password, user.password)) {
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  }
}
