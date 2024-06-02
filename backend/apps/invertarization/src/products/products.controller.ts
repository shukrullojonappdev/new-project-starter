import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('createProduct')
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @MessagePattern('getProducts')
  findAll() {
    return 'this.productsService.getProducts()';
    // return this.productsService.getProducts({});
  }

  @MessagePattern('getProduct')
  findOne(@Payload() id: number) {
    return this.productsService.getProduct({ id });
  }

  @MessagePattern('updateProduct')
  update(@Payload() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct({
      where: { id: updateProductDto.id },
      data: updateProductDto,
    });
  }

  @MessagePattern('removeProduct')
  remove(@Payload() id: number) {
    return this.productsService.deleteProduct({ id });
  }
}
