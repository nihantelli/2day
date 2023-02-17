interface IReadProductRepository {
  getAll();
  getById(id: number);
}
interface IWriteProductRepository{(method)
    IWriteProductReposiyory.update(data:string):any}
interface ITakePhoto {
  takePhoto();
}
class BasePhone {
  call() {
    console.log("arama yapıldı");
  }
  takePhoto() {}
}
class IPhone12 extends BasePhone implements ITakePhoto {
  takePhoto() {
    console.log("fotoğraf çekildi");
  }
}
class Nokia extends BasePhone {
  takePhoto() {
    throw new Error("fotoğraf çekme özelliği yok");
  }
}
let phone: BasePhone;
//kötü hali
phone = new IPhone12();

phone.call();

if (phone instanceof IPhone12) {
  (phone as IPhone12).takePhoto();
}

(phone as IPhone12).takePhoto();

phone = new Nokia();

phone.call();
