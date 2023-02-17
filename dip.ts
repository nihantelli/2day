//high level module
class ProductService {
  _productRepository: IProductRepository;
  constructor(_productRepository: IProductRepository) {
    this._productRepository = _productRepository;
  }
  Add(data: string) {
    this._productRepository.addToLog(data);
  }
}
interface IProductRepository {
  addToLog(data: string);
}
class ProductRepository implements IProductRepository {
  addToLog(data: string) {
    console.log(`${data}`);
  }
}
class ProductRepositoryWithOracle implements IProductRepository {
  addToLog(data: string) {
    console.log(`${data}(oracle)`);
  }
}
let productService = new ProductService(new ProductRepository());
productService.Add("log 1");
