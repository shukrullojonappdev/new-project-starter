import { Module } from '@nestjs/common';
import { InvertarizationController } from './invertarization.controller';
import { InvertarizationService } from './invertarization.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TablesModule } from './tables/tables.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ProductsModule, CategoriesModule, TablesModule],
  controllers: [InvertarizationController],
  providers: [InvertarizationService, PrismaService],
})
export class InvertarizationModule {}
