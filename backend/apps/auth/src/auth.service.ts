import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: any) {}

  async signUp(login: string, password: string) {
    return 'ok';
  }

  async signIn() {
    return 'ok';
  }
}
