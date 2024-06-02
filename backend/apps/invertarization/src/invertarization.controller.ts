import { Controller, Get } from '@nestjs/common';
import { InvertarizationService } from './invertarization.service';

@Controller()
export class InvertarizationController {
  constructor(private readonly invertarizationService: InvertarizationService) {}

  @Get()
  getHello(): string {
    return this.invertarizationService.getHello();
  }
}
