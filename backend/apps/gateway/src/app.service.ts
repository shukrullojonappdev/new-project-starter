import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('DEMO_SERVICE') private client: ClientProxy) {}

  getHello() {
    return this.client.send<string>('hello', '');
  }
}
