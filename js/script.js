// TANIMLAMALAR
var productId = 0; //ürün id'si başlangıç değeri
let accept; //modaldan gelecek silme onay durumunu tutacak değişken
let countNum = 0; //ürün adedi başlangıç değeri
const productList = []; //içine productların pushlanacağı boş bir array tanımı
const addAlert = document.getElementById("addAlert");
const failAlert = document.getElementById("failAlert");
const editAlert = document.getElementById("editAlert");
const deleteAlert = document.getElementById("deleteAlert");
const nameValidation = document.getElementById("nameValidation");
const priceValidation = document.getElementById("priceValidation");
const colorValidation = document.getElementById("colorValidation");
const dayValidation = document.getElementById("dayValidation");
const nameInput = document.getElementById("txtName");
const priceInput = document.getElementById("txtPrice");
const colorInput = document.getElementById("colorCheckbox");
const publishInput = document.getElementById("checkPublish");
const productTable = document.getElementById("productTable");
const formEl = document.getElementById("form");
const btnEdit = document.getElementById("btnUpdate-table");
const btnAdd = document.getElementById("btnSave");
const btnReset = document.getElementById("btnReset");
const productCount = document.getElementById("productCount");
const productRow = document.getElementsByClassName("productRow");
const allRadioButtons = document.querySelectorAll("input[type='radio']");

// GİRİLEN ÜRÜN BİLGİLERİNİ TABLOYA EKLEYECEK METHOD
const addProduct = () => {
  //Inputa girilen verileri alıp değişkenlere atacak.
  const name = nameInput.value;
  const price = priceInput.value;
  const color = colorInput.value;
  const isPublish = publishInput.checked;
  const publishDay = document.querySelector("input[type='radio']:checked");
  //FORM VALİDASYONLARI(if kullanmak zorunda kaldım)
  //Inputlara girilen değerler şartı sağlamıyorsa ürün ekleme işlemi yapmayacak ve uygun alert mesajını gösterecek.
  if (
    name.length <= 10 &&
    name.length >= 3 &&
    price >= 100 &&
    price <= 5000 &&
    color != 0 &&
    publishDay != null
  ) {
    //Aldığımız verileri newProduct adlı objede tutacak.
    productId++;
    const newProduct = {
      id: productId,
      name: name,
      price: price,
      color: color,
      isPublish: isPublish,
      publishDay: publishDay.value,
    };
    //Ürünü ürün listesine ekleyecek, listeleme methodunu çağıracak, ekleme başarılı alertini gösterecek, formun içini temizleyecek.
    productList.push(newProduct);
    listProducts();
    showSuccess();
    resetForm();
  } else {
    // Şartı sağlamayan durumu tespit edecek. Duruma uygun alert mesajı gösterecek.

    if (name.length < 3 || name.length > 10) {
      nameValidation.classList.remove("custom-hide");
    }
    if (price < 100 || price > 5000) {
      priceValidation.classList.remove("custom-hide");
    }
    if (color == 0) {
      colorValidation.classList.remove("custom-hide");
    }
    if (publishDay == null) {
      dayValidation.classList.remove("custom-hide");
    }
  }
  // 2sn sonra tüm validasyon mesajlarını kaldıracak.
  setTimeout(function () {
    nameValidation.classList.add("custom-hide");
    priceValidation.classList.add("custom-hide");
    colorValidation.classList.add("custom-hide");
    dayValidation.classList.add("custom-hide");
  }, 2000);
};
// GUNCELLE BUTONUNA TIKLANAN ELEMENTİN ÖZELLİKLERİNİ INPUTA YANSITACAK METHOD
const loadtoInputAgain = (id, event) => {
  // Id yoluyla güncellenecek elemana ulaşacak.
  const updateInputEl = productList.find((product) => product.id == id);
  nameInput.value = updateInputEl.name;
  priceInput.value = updateInputEl.price;
  colorInput.value = updateInputEl.color;
  publishInput.checked = updateInputEl.isPublish;
  allRadioButtons.forEach((radioElement) => {
    if (radioElement.value == updateInputEl.publishDay)
      radioElement.checked = true;
  });
  // Kaydet butonu görünmez olacak, yerine güncelleme butonu gözükecek.
  btnEdit.classList.add("active");
  btnAdd.classList.add("hide");
  //Güncelle butonuna basıldığında ilgili satırı öne çıkaracak.
  event.parentElement.parentElement.classList.add("focus");
};

// GİRİLEN ÜRÜN BİLGİLERİNİ(productListteki ürünler) TABLODA LİSTELEYECEK METHOD
const listProducts = () => {
  productTable.innerHTML = "";
  //Tbody elementine her döngüde yeni bir ürün satırı eklenecek.
  let products = "";
  productList.forEach((product) => {
    products += `
    <tr class="productRow"> 
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.color}</td>
    <td>${product.isPublish}</td>
    <td>${product.publishDay}</td>
    <td><button id="btnUpdate" onclick="loadtoInputAgain(${product.id},this)" type="button" class="btn btn-sm mb-2 btn-edit">Düzenle</button></td>
    <td><button id="btnDelete" type="button" class="btn btn-sm btn-delete mb-2"  data-bs-toggle="modal"
    data-bs-target="#acceptModal">Sil</button></td>
    </tr>`;
    productTable.innerHTML = products;
  });
  // Toplam ürün adedini ilgili element içine yazdıracak. ürün yoksa bildirecek.
  countNum = productList.length;
  if (countNum == 0) {
    productCount.innerHTML = `Listelenecek Ürün Bulunamadı.`;
  } else {
    productCount.innerHTML = `Ürün Adedi: ${countNum}`;
  }
};

// GÜNCELLENEN ÜRÜN BİLGİLERİNİ TABLODA GÜNCELLEYECEK METHOD
const updateProduct = () => {
  // Girilecek yeni veriler, yeni değişkenlerde tutulacak.
  const name = nameInput.value;
  const price = priceInput.value;
  const color = colorInput.value;
  const isPublish = publishInput.checked;
  const publishDay = document.querySelector("input[type='radio']:checked");
  //FORM VALİDASYONLARI (if kullanmak zorunda kaldım)
  //Inputlara girilen değerler şartı sağlamıyorsa ürün ekleme işlemi yapmayacak ve uygun alert mesajı verecek.
  if (
    name.length <= 10 &&
    name.length >= 3 &&
    price >= 100 &&
    price <= 5000 &&
    color != 0 &&
    publishDay != null
  ) {
    //Güncellenecek verinin indexini bulacak.
    let i = productList.findIndex((product) => product.id == productId);
    //Indexe göre productListteki objeye ulaşacak.
    //objedeki değerler, yeni değerlerle değişecek.
    productList[i].name = name;
    productList[i].price = price;
    productList[i].color = color;
    productList[i].isPublish = isPublish;
    productList[i].publishDay = publishDay.value;
    // Güncelleme butonu görünmez olacak, yerine kaydet butonu gözükecek.
    btnEdit.classList.remove("active");
    btnAdd.classList.remove("hide");
    //Güncelleme başarı alerti gösterecek, listeleme methodunu çağıracak,  formun içini temizleyecek.
    showUpdate();
    listProducts();
    resetForm();
    //Güncellenen satırdan focus classının kaldırılması.
    productRow.classList.remove("focus");
  } else {
    // Şartı sağlamayan durumu tespit edecek. Duruma uygun alert mesajı gösterecek.

    if (name.length < 3 || name.length > 10) {
      nameValidation.classList.remove("custom-hide");
    }
    if (price < 100 || price > 5000) {
      priceValidation.classList.remove("custom-hide");
    }
    if (color == 0) {
      colorValidation.classList.remove("custom-hide");
    }
    if (publishDay == null) {
      dayValidation.classList.remove("custom-hide");
    }
  }
  // 2sn sonra tüm validasyon mesajlarını kaldıracak.
  setTimeout(function () {
    nameValidation.classList.add("custom-hide");
    priceValidation.classList.add("custom-hide");
    colorValidation.classList.add("custom-hide");
    dayValidation.classList.add("custom-hide");
  }, 2000);
};

// Silme butonu ile açılan modaldaki onay butonu tıklanırsa bu method çalışacak.
//Bu method deleteProduct methodunu çağıracak.
const acceptDelete = () => {
  deleteProduct();
};
//SİLME METHODU
const deleteProduct = (id) => {
  //Silinecek elemanın indexi bulunup, o indexden itibaren 1 eleman silecek.
  let i = productList.findIndex((product) => product.id == id);
  productList.splice(i, 1);
  //Silme başarı alerti gösterecek, listeleme methodunu çağıracak,  formun içini temizleyecek.
  listProducts();
  showDelete();
  resetForm();
};
//TÜM INPUTLARIN İÇİNİ RESETLEYECEK METHOD
const resetForm = () => {
  formEl.reset();

  //Güncelleme butonu görünmez olacak, yerine kaydet butonu gözükecek.
  //Yani başlangıç durumuna dönecek.
  btnEdit.classList.remove("active");
  btnAdd.classList.remove("hide");

  // 2sn sonra tüm alertler kaybolacak.
  setTimeout(function () {
    addAlert.classList.add("custom-hide");
    failAlert.classList.add("custom-hide");
    editAlert.classList.add("custom-hide");
    deleteAlert.classList.add("custom-hide");
  }, 2000);
};
// ALERT GÖZÜKME-GÖZÜKMEME DURUMUNU DÜZENLEYEN METHODLAR
const showSuccess = () => {
  addAlert.classList.remove("custom-hide");
};
const showFail = () => {
  failAlert.classList.remove("custom-hide");
};
const showUpdate = () => {
  editAlert.classList.remove("custom-hide");
};
const showDelete = () => {
  deleteAlert.classList.remove("custom-hide");
};
