import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'toy',
      description: 'test',
      price: 1000,
    },
  ];

  create(product: Product): void {
    this.products.push(product);
  }

  // findOne(id: number): Product {
  //   return this.products.find((product: Product) => product.id === id);
  // }
}
