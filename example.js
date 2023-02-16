var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    ProductRepository.prototype.GetAll = function () {
        var productList = [];
        productList.push(new Product(1, "kalem1", 100));
        productList.push(new Product(2, "kalem2", 200));
        productList.push(new Product(3, "kalem3", 300));
        return productList;
    };
    return ProductRepository;
}());
var ProductRepositoryWithOracle = /** @class */ (function () {
    function ProductRepositoryWithOracle() {
    }
    ProductRepositoryWithOracle.prototype.GetAll = function () {
        var productList = [];
        productList.push(new Product(1, "oracle kalem1", 100));
        productList.push(new Product(2, "oracle kalem2", 200));
        productList.push(new Product(3, "oracle kalem3", 300));
        return productList;
    };
    return ProductRepositoryWithOracle;
}());
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this._kdv = 1.19;
        this._productRepository = productRepository;
    }
    ProductService.prototype.GetAll = function () {
        var _this = this;
        var newProductList = [];
        this._productRepository.GetAll().forEach(function (x) {
            newProductList.push(new Product(x.id, x.name, x.price * _this._kdv));
        });
        return newProductList;
    };
    return ProductService;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.CreateRepository = function () {
        return new ProductRepository();
    };
    ProductFactory.prototype.CreateRepositoryWithOracle = function () {
        return new ProductRepository();
    };
    return ProductFactory;
}());
var ProductServices = new ProductService(new ProductFactory().CreateRepositoryWithOracle());
ProductServices.GetAll().forEach(function (x) {
    console.log("".concat(x.id, " -").concat(x.name, "- ").concat(x.price));
});
