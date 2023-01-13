/////Яндекс карта//////////
ymaps.ready(init);
function init() {
  let map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
  let placemark = new ymaps.Placemark(
    [55.76, 37.64],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "images/Pin.svg",
      iconImageSize: [30, 30],
      iconImageOffset: [-15, -15],
    }
  );
  map.controls.remove("geolocationControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.geoObjects.add(placemark);
}

const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger-menu");
const burgerCross = document.querySelector(".burger-menu__cross");

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  res = document.querySelector(".result"),
  plus2 = document.querySelector(".plus2"),
  minus2 = document.querySelector(".minus2"),
  res2 = document.querySelector(".result2");

const switchBtn = document.querySelector(".card__switch");

const crossSum = document.querySelector(".sum-block__cross");
const crossSum2 = document.querySelector(".sum-block__cross2");
const productBlock = document.querySelector(".product-block--1"),
  productBlock2 = document.querySelector(".product-block--2");
const fillingBlock = document.querySelector(".order__filling-block");
const wrapperProduct = document.querySelector(".order__wrapper-product");
const formInputs = document.querySelectorAll(".form__input"),
  form = document.querySelector(".form");
formAdress = document.querySelector(".form__adress");

const cardBtn = document.querySelector(".card__btn");

const showBurger = () => {
  burgerMenu.style = "display:block";
};
const plusRes = (res) => {
  const sum = Number(res.innerHTML) + 1;
  res.innerHTML = sum;
};
const minusRes = (res) => {
  const sum = Number(res.innerHTML) - 1;
  res.innerHTML = sum;
  if (sum <= 0) {
    res.innerHTML = 0;
  }
};
burgerBtn.addEventListener("click", showBurger);
burgerCross.addEventListener("click", () => {
  burgerMenu.style = "display: none";
});

minus.addEventListener("click", () => minusRes(res));
plus.addEventListener("click", () => plusRes(res));
minus2.addEventListener("click", () => minusRes(res2));
plus2.addEventListener("click", () => plusRes(res2));

crossSum.addEventListener("click", () => {
  productBlock.style = "display: block";
  productBlock.innerHTML = `
  <div class="order__recovery-block">
   <span class="--grey"
              >Товар
              <span style="font-weight: 700">Наименование товара</span> был
              удален из корзины</span
            >
            <span class="recover-btn1">Восстановить</span>
  <img src="images/cross-icon.svg" alt="" />
  </div>
`;
});
crossSum2.addEventListener("click", () => {
  productBlock2.style = "display: block";
  productBlock2.innerHTML = `
  <div class="order__recovery-block">
   <span class="--grey"
              >Товар
              <span style="font-weight: 700">Наименование товара</span> был
              удален из корзины</span
            >
            <span class="recover-btn2">Восстановить</span>
  <img src="images/cross-icon.svg" alt="" />
  </div>
`;
});

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("card__switch-in");
});
//////////Создание formData//////////////

const nameIn = document.getElementById("nameIn");
const surnameIn = document.querySelector(".surnameIn");
const mailIn = document.querySelector(".mailIn");
const phoneIn = document.querySelector(".phoneIn");
const commIn = document.querySelector(".form__comm-area");
const promoIn = document.querySelector(".promoIn");
const allSum = document.querySelector(".allSum").innerHTML;
const orderCount = document.querySelector(".order__count");
const orderTitles = document.querySelectorAll(".product-block__title");

orderCount.style = "font-size: 28px";

const sumBlockBtns = document
  .querySelectorAll(".sum-block__button")
  .forEach((e) =>
    e.addEventListener(
      "click",
      () =>
        (orderCount.innerHTML = Number(res.innerHTML) + Number(res2.innerHTML))
    )
  );

let checked = document.querySelectorAll(".pay-radio");
let payIn;

function FormData(
  count,
  name,
  surname,
  mail,
  phone,
  comm,
  pay,
  promo,
  sum,
  orderTitle
) {
  this.count = count;
  this.name = name;
  this.surname = surname;
  this.mail = mail;
  this.phone = phone;
  this.comm = comm;
  this.pay = pay;
  this.promo = promo;
  this.sum = sum;
  this.orderTitle = orderTitle;
}
let orderTitle;
cardBtn.onclick = function sayData() {
  for (let i = 0; i < checked.length; i++) {
    if (checked[i].checked) {
      payIn = checked[i].id;
      break;
    }
  }
  for (let i = 0; i < orderTitles.length; i++) {
    orderTitle = orderTitles[i].innerHTML;
  }

  const formData = new FormData(
    orderCount.innerHTML,
    nameIn.value,
    surnameIn.value,
    mailIn.value,
    phoneIn.value,
    commIn.value,
    payIn,
    promoIn.value,
    allSum,
    orderTitle
  );
  formInputs.forEach((input) => {
    if (input.value) {
      input.style = "border-color: #c8c8c8";
      input.value = "";
    } else {
      input.style = "border-color: red";
      input.placeholder = " Заполните поле...";
    }
  });
  if (formAdress.value) {
    formAdress.style = "border-color: #c8c8c8";
    formAdress.value = "";
  } else {
    formAdress.style = "border-color: red";
  }
  console.log(formData);
};
