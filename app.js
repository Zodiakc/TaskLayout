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
const productBlock = document.querySelector(".product-block"),
  productBlock2 = document.querySelector(".product-block--2");

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
  productBlock.style = "display:none";
});
crossSum2.addEventListener("click", () => {
  productBlock2.style = "display:none";
});
switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("card__switch-in");
});
//////////Создание formData//////////////
const orderAmount = document.querySelector(".order__amount").innerHTML;
const nameIn = document.querySelector(".nameIn").value
const surnameIn =   document.querySelector(".surnameIn").value
const mailIn = document.querySelector(".mailIn").value
const phoneIn =   document.querySelector(".phone").value

function FormData(title, name, surname, phone, mail, adress, comment) {
  this.title = title;
  this.name = name;
  this.surname = surname;
  this.phone = phone;
  this.mail = mail;
 

}

const formData = new FormData(
  orderAmount,
  nameIn,
  surnameIn,
  phoneIn,
  mailIn
 
  
);

cardBtn.addEventListener("click", () => {
  formInputs.forEach((input) => {
    if (input.value) {
      input.style = "border-color: #c8c8c8";
    } else {
      input.style = "border-color: red";
    }
  });
  if (formAdress.value) {
    formAdress.style = "border-color: #c8c8c8";
  } else {
    formAdress.style = "border-color: red";
  }
  console.log(formData);
});
