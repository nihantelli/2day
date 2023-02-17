class BasePhone {
    call() {
        console.log("arama yapıldı");
    }
    takePhoto() { }
}
class IPhone12 extends BasePhone {
    takePhoto() {
        console.log("fotoğraf çekildi");
    }
}
class Nokia extends BasePhone {
    takePhoto() {
        throw new Error("fotoğraf çekme özelliği yok");
    }
}
let phone;
//kötü hali
phone = new IPhone12();
phone.call();
if (phone instanceof IPhone12) {
    phone.takePhoto();
}
phone.takePhoto();
phone = new Nokia();
phone.call();
