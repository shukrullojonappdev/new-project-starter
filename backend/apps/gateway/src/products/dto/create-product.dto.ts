import { Prisma, Unit } from '@prisma/client';

export class CreateProductDto implements Prisma.ProductCreateInput {
  name: string;
  price: number;
  description: string;
  category: any;
  unit: Unit;
}
