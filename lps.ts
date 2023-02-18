interface ITakePhoto {
  takePhoto();
}

class BasePhone {
  call() {
    console.log("arama yapıldı");
  }
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

phone = new IPhone12();
phone.call();

if (phone instanceof IPhone12) {
  (phone as IPhone12).takePhoto();
}

phone = new Nokia();
