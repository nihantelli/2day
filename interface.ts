interface IRepository<T> {
  get();
  getById(id: number);
  save(data: T);
  update(data: T);
  delete(id: number);
  partialUpdate();
}
class Product {
  id: number;
  name: string;
}
class ProductRepository implements IRepository<Product> {
  get() {
    throw new Error("Method not implemented.");
  }
  getById(id: number) {
    throw new Error("Method not implemented.");
  }
  save(data: Product) {
    throw new Error("Method not implemented.");
  }
  update(data: Product) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  partialUpdate() {
    throw new Error("Method not implemented.");
  }
}
class Stock {
  id: number;
  count: number;
}
class StockRepository implements IRepository<Stock> {
  get() {
    throw new Error("Method not implemented.");
  }
  getById(id: number) {
    throw new Error("Method not implemented.");
  }
  save(data: Stock) {
    throw new Error("Method not implemented.");
  }
  update(data: Stock) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  partialUpdate() {
    throw new Error("Method not implemented.");
  }
}
