import { Controller } from '@nestjs/common';
import { DemoService } from './demo.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @MessagePattern('hello')
  getHello(): string {
    console.log('hello');
    return this.demoService.getHello();
  }
}
