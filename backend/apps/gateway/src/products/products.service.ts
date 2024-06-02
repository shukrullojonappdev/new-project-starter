import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(@Inject('INVERTARIZATION_SERVICE') private client: ClientProxy) {}

  create(createProductDto: CreateProductDto) {
    return this.client.send<string>('createProduct', createProductDto);
  }

  findAll() {
    return this.client.send<string>('getProducts', '');
  }

  findOne(id: number) {
    return this.client.send<string>('getProduct', id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.client.send<string>('updateProduct', {
      id,
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.client.send<string>('deleteProduct', id);
  }
}
