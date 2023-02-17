interface IProductRepository{
    getAll();
    getById(id:number)
    save(data:string);
    update(data:string);
    delete(id:number);

}
class Product