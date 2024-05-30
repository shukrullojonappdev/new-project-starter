import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return 'ok';
  }
}
