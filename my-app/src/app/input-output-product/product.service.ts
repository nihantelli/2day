import { Inject, Injectable } from '@angular/core';
import { ProductRepository } from './product-repository';
import { Product } from './models/product';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {
    console.log(`baseUrl: ${baseUrl}`);
  }
  getAll(): ReadonlyArray<Product> {
    let productList: Product[] = [];
    this.productRepository.getList().forEach((p) => {
      productList.push({
        id: p.id,
        name: p.name.toUpperCase(),
        category: p.category,
        stock: p.stock,
        price: p.price * 1.18,
        color: p.color,
      });
    });
    return productList as ReadonlyArray<Product>;
  }
  getById(id: number): Product | undefined {
    return this.productRepository.getById(id);
  }
  add(product: Product) {
    this.productRepository.add(product);
  }
  update(product: Product) {
    this.productRepository.update(product);
  }
  delete(id: number) {
    this.productRepository.delete(id);
  }
}
