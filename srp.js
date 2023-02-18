var srp;
(function (srp) {
    var ProductRepository = /** @class */ (function () {
        function ProductRepository() {
            this.productList = [];
        }
        ProductRepository.prototype.add = function (product) {
            this.productList.push(product);
        };
        ProductRepository.prototype.remove = function (id) {
            // this.productList.slice()
        };
        ProductRepository.prototype.update = function (product) { };
        return ProductRepository;
    }());
    var ProductPresenter = /** @class */ (function () {
        function ProductPresenter() {
        }
        ProductPresenter.prototype.writeToConsole = function (productList) {
            productList.forEach(function (x) {
                console.log(x);
            });
        };
        return ProductPresenter;
    }());
    var Product = /** @class */ (function () {
        function Product() {
        }
        return Product;
    }());
})(srp || (srp = {}));
