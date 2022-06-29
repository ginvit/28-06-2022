import { newEl, $body } from "./utils.js";

const BASE_URL = "https://fakestoreapi.com/products";

const divEl = newEl("div");
const navEl = newEl("nav");
const titleEl = newEl("h4");
const title2El = newEl("h4");
const nameTry = newEl("p");
const name2Try = newEl("p");
const number1 = newEl("p");
const number2 = newEl("p");
const divEl2 = newEl("div");
const secEl3 = newEl("section");
const secEl4 = newEl("section");
const title3El = newEl("h4");
const title4El = newEl("h4");
const footerEl = newEl("footer");
const divEl3 = newEl("div");
const divEl4 = newEl("div");
//
divEl2.className = "articolo";
footerEl.className = "mainfooter";
titleEl.textContent = "Nome utente:";
title2El.textContent = "Nome utente:";
title3El.textContent = "Esercizio 1 - Count superiore a 200";
title4El.textContent = "Jewelery - Esercizio extra (aspetta il caricamento)";
//
const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
nameTry.textContent = userLogIn;
name2Try.textContent = userLogIn;

const cardList = (imgLink, title, price) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  secEl3.appendChild(wrapperEl);
};
const cardList2 = (imgLink, title, price) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  secEl4.appendChild(wrapperEl);
};

try {
  if (localStorage.getItem("username") !== userLogIn) {
    throw error;
  } else {
    $body.append(
      divEl,
      navEl,
      nameTry,
      divEl2,
      divEl3,
      secEl3,
      divEl4,
      secEl4,
      footerEl
    );
    divEl3.append(title3El);
    divEl4.append(title4El);
    divEl.append(navEl);
    navEl.append(titleEl, nameTry, number1);
    footerEl.append(title2El, name2Try, number2);
  }
} catch (error) {
  localStorage.setItem("username", userLogIn);
  console.log("Nome utente invalido");
  alert("Nome utente invalido, riaggiorna la pagina e rinserisci il nome");
  document.body.append(imgEl);
  imgEl.src = "http://maurizioreale.it/wp-content/uploads/2016/01/errore.png";
}

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const newList = data
      .filter((product, index) => product.rating.count >= 200)
      .map((product) => cardList(product.image, product.title, product.price));
    number1.textContent = `${newList.length}`;
    number2.textContent = `${newList.length}`;
    //return console.log(newList.length);
  });

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    data
      .filter((product, index) => product.category == "jewelery")
      .map((product) => cardList2(product.image, product.title, product.price));
  });
