import korzinkaImg from './assets/korzinka.png';
import mangoImg from './assets/mango.png';
import texnomartImg from './assets/texnomart.png';
import makroImg from './assets/makro.png';
import gostyImg from './assets/gosty.png';
import shoshImg from './assets/shosh.png';
import petrovicImg from './assets/petrovic.png';

const dayDiscount = [
  {
    id: 1,
    img: korzinkaImg,  // import orqali yo'l
    title: "Korzinka.uz",
    desc: "В четверг скидки на рыбу",
    pos: "Супермаркеты"
  },
  {
    id: 2,
    img: mangoImg,
    title: "MANGO",
    desc: "Акция 1+1",
    pos: "Магазины брендовой одежды"
  },
  {
    id: 3,
    img: texnomartImg,
    title: "TEXNOMART",
    desc: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
    pos: "Магазины электроники и бытовой техники"
  },
  {
    id: 4,
    img: makroImg,
    title: "Makro",
    desc: "При покупке CIF пачка губок Salixan БЕСПЛАТНО",
    pos: "Супермаркеты"
  },
];

const bigDiscount = [
  {
    id: 1,
    img: gostyImg,
    title: "Gosty",
    desc: "Каждый вторник — 20% на все меню",
  },
  {
    id: 2,
    img: shoshImg,
    title: "SHOSH",
    desc: "Скидки на еду и напитки",
  },
  {
    id: 3,
    img: petrovicImg,
    title: "TEXNOMART",
    desc: "До — 60% на бытовую технику в ТЦ «Samarkand Darvoza»",
  },
];

export { dayDiscount, bigDiscount };
