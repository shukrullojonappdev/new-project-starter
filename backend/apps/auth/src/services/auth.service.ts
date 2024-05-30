import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signup() {
    return 'ok';
  }

  async signin() {
    return 'ok';
  }
}
