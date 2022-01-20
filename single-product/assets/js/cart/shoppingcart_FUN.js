// Import the functions you need from the SDKs you need

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwDLNDUINuCDZckS5C1M-I-9ia7ZoKIsw",
  authDomain: "pro-cam-web.firebaseapp.com",
  databaseURL: "https://pro-cam-web-default-rtdb.firebaseio.com",
  projectId: "pro-cam-web",
  storageBucket: "pro-cam-web.appspot.com",
  messagingSenderId: "1043601014942",
  appId: "1:1043601014942:web:c4608e15cdafb23fb3bb8f",
  measurementId: "G-L8XZNC95BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

var products = [
  /////////////////////////////////////////////////////////////////////////////DSLR//////////////////////////////////////////////////////////////////////////

  {
    id: 1,
    img: "./assets/images/eos dslr/4000d.jpg",
    name: "EOS 4000D",
    lens: "EF-S 18-55mm",
    price: 289,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-4000D/index.html",
    Detailed:
      ".Striking photos, cinematic movies<br>.Social sharing, remote shooting<br>.Effortless Creativity<br>.Learn as you shoot<br>.Shoot with confidence<br><br>Free gift <br> 32GB SD Card <br> " ,
      gift:"./assets/images/card/gift4.jpg",
  },

  {
    id: 2,
    img: "./assets/images/eos dslr/2000d.jpg",
    name: "EOS 2000D",
    lens: "EF-S 18-55mm/DC",
    price: 349,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-2000D/index.html",
    Detailed:
      ".Effortless creativity<br>.Shoot with confidence<br>.Easy sharing, remote shooting <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 3,
    img: "./assets/images/eos dslr/250d.jpg",
    name: "EOS 250D",
    lens: "BK 18-55mm",
    price: 550,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-250d/index.html",
    Detailed:
      ".Be creative and take control<br>.Pro quality images and movies<br>.Always capture the moment <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 4,
    img: "./assets/images/eos dslr/850d.jpg",
    name: "EOS 850D",
    lens: "EF-18-55mm",
    price: 850,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-850d/index.html",
    Detailed:
      ".Be creative and take control<br>.Pro quality images and movies<br>.Always capture the moment <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 5,
    img: "./assets/images/eos dslr/850d.jpg",
    name: "EOS 850D",
    lens: "EF-18-135mm",
    price: 1150,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-850d/index.html",
    Detailed:
      ".Be creative and take control<br>.Pro quality images and movies<br>.Always capture the moment <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 6,
    img: "./assets/images/eos dslr/80D.jpg",
    name: "EOS 80D",
    lens: "18-135mm",
    price: 1150,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-EOS-80D/index.html",
    Detailed:
      ".Unlock your creative potential<br>.Stunning quality<br>.Be in control and develop your photography<br>.Perfect your movies<br>.Easy sharing, remote shooting <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 7,
    img: "./assets/images/eos dslr/90d.jpg",
    name: "EOS 90D",
    lens: "EF 18-135mm",
    price: 1350,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/CANON-EOS-90d/index.html",
    Detailed:
      ".Catch the most fleeting moments<br>.Take a clearer view<br>.Fast as lightning, sharp as a pin<br>.A photographers camera <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 8,
    img: "./assets/images/eos dslr/5d IV.jpg",
    name: "EOS 5D Mark IV",
    lens: "24-105 F4L",
    price: 2700,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-EOS-5D-Mark-IV/index.html",
    Detailed:
      ".Step up to cinematic 4K<br>.Canon Photo Companion app<br>.High definition 4K movies <br><br>Free gift <br> 64GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 9,
    img: "./assets/images/eos dslr/m50.jpg",
    name: "EOS M50",
    lens: "EF-M 15-45S",
    price: 550,
    color: "blk ,White",
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-EOS-M50/index.html",
    Detailed:
      ".Be creative and take control<br>.Pro quality images and movies<br>.Always capture the moment <br><br>Free gift <br> 64GB Cfexpress Card",
      gift:"./assets/images/card/gift.jpg",
  },

  // {
  //   id: 10,
  //   img: "./assets/images/eos dslr/m50.jpg",
  //   name: "EOS M50 VLOGGER Kit",
  //   lens: "body only",
  //   price: 550,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "dslr",
  //   specificationlink:
  //     "./assets/js/cart/cam/dslr/Canon EOS M50/index.html",
  //   Detailed:
  //     ".A Vari-Angle screen that lets you shoot the way you want<br>.Lightweight and compact<br>.Expand your creativity",
  // },

  {
    id: 11,
    img: "./assets/images/eos dslr/rp.jpg",
    name: "EOS RP Body",
    lens: "body only",
    price: 1100,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-EOS-RP/index.html",
    Detailed:
      ".Accessible to everyone<br>.A lightweight body with a faster, smarter lens mount<br>.A new standard in full-frame image quality <br><br>Free gift <br> 64GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 12,
    img: "./assets/images/eos dslr/rp.jpg",
    name: "EOS RP",
    lens: "24-105 F4-7.1 IS",
    price: 1400,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-EOS-RP/index.html",
    Detailed:
      ".Accessible to everyone<br>.A lightweight body with a faster, smarter lens mount<br>.A new standard in full-frame image quality <br><br>Free gift <br> 64GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 13,
    img: "./assets/images/eos dslr/EOS R.jpg",
    name: "EOS R Body",
    lens: "body only",
    price: 1600,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./assets/js/cart/cam/dslr/Canon-EOS-R/index.html",
    Detailed:
      ".Connect, upload and share anywhere<br>.Tell your stories in 4K video and fill the screen with detail<br>.The perfect blend of handling and great design <br><br>Free gift <br> 64GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 14,
    img: "./assets/images/eos dslr/EOS R.jpg",
    name: "EOS R RF",
    lens: "24-105 F4-7.1 IS STM",
    price: 2000,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./assets/js/cart/cam/dslr/Canon-EOS-R/index.html",
    Detailed:
      ".Connect, upload and share anywhere<br>.Tell your stories in 4K video and fill the screen with detail<br>.The perfect blend of handling and great design <br><br>Free gift <br> 64GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  // {
  //   id: 15,
  //   img: "./assets/images/eos dslr/EOS-R6.jpg",
  //   name: "EOS R6",
  //   lens: "body only",
  //   price: 2500,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "dslr",
  //   specificationlink:
  //     "./assets/js/cart/cam/dslr/Canon EOS R6/index.html",
  // },

  // {
  //   id: 16,
  //   img: "./assets/images/eos dslr/EOS-R5.jpg",
  //   name: "EOS R5",
  //   lens: "body only",
  //   price: 2500,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "dslr",
  //   specificationlink:
  //     "./assets/js/cart/cam/dslr/Canon EOS R5/index.html",
  // },

  //{
  //   id: 17,
  //   img: "./assets/images/eos dslr/EOS-R3.jpg",
  //   name: "EOS R3",
  //   lens: "body only",
  //   price: 2500,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "dslr",
  //   specificationlink:
  //     "./assets/js/cart/cam/dslr/Canon EOS R3/index.html",
  // },

  {
    id: 19,
    img: "./assets/images/eos dslr/LEGRIA HF R806.jpg",
    name: "Canon LEGRIA HF R806",
    lens: "video",
    price: 215,
    cart: false,
    quantity: 1,
    total: 0,
    type: "video",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-LEGRIA-HF-R806/index.html",
      Detailed:
      ".Superb quality<br> .Effortless creativity<br>.Comfort and ease",
      gift:"./assets/images/card/gift2.jpg",
  },

  ///////////////////////////////////////////////////////////////COMPACT////////////////////////////////////////////////////////////////////////////

  // {
  //   id: 20,
  //   img: "./assets/images/Compact/ixus-185-bk-frt-flipped-800x524.jpg",
  //   name: "IXUS 185",
  //   lens: "compact",
  //   price: 249,
  //   color: "Black,Silver,red",
  //   cart: false,
  //   quantity: 1,
  //   href: "./compact/IXUS 185.html",
  //   total: 0,
  //   type: "compact",
  //   specificationlink:
  //     "./assets/js/cart/cam/compcat/ixus-185/ixus-185.html",
  //   Detailed:
  //     ".Tiny camera with big zoom you can take everywhere <br> .Easily connect, share and shoot remotely with Wi-Fi & NFC <br> .Create stunning Full HD movies at the touch of a button <br> .Effortlessly capture the quality your memories deserve <br> .Play and experiment with your creativity <br><br>Free gift <br> 32GB SD Card <br> Bag",
  //     gift:"./assets/images/card/gift.jpg",
  // },

  {
    id: 21,
    img: "./assets/images/Compact/PowerShot SX620.jpg",
    name: "POWERSHOT SX-620 HS",
    price: 215,
    color: "Black,red",
    cart: false,
    quantity: 1,
    lens:"compact",
    
    total: 0,
    type: "compact",
    specificationlink:
      "./assets/js/cart/cam/compcat/Canon PowerShot SX620 HS/Canon PowerShot SX620 HS.html",
  gift:"./assets/images/card/gift.jpg",
  Detailed:
      ".Tiny camera with big zoom you can take everywhere <br> .Easily connect, share and shoot remotely with Wi-Fi & NFC <br> .Create stunning Full HD movies at the touch of a button <br> .Effortlessly capture the quality your memories deserve <br> .Play and experiment with your creativity <br><br>Free gift <br> 32GB SD Card <br> Bag",
   },

  // {
  //   id: 23,
  //   img: "./assets/images/Compact/PowerShot SX540 HS.jpg",
  //   name: "POWERSHOT SX540 HS",
  //   price: 199,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "compact",
  //   specificationlink:
  //     "./assets/js/cart/cam/compcat/Canon%20PowerShot%20SX540%20HS/index.html",
  // },

  // {
  //   id: 24,
  //   img: "./assets/images/Compact/PowerShot-SX430.jpg",
  //   name: "POWERSHOT SX-430 IS BK",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "compact",
  //   specificationlink:
  //     "./assets/js/cart/cam/compcat/Canon PowerShot SX430 IS/SX430IS.html",
  // },

  {
    id: 25,
    img: "./assets/images/Compact/PowerShot SX70 HS.jpg",
    name: "PowerShot SX70 HS",
    lens: "compact",
    price: 499,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
    specificationlink:
      "./assets/js/cart/cam/compcat/PowerShot-SX70-HS/index.html",
    Detailed:
      ".DSLR looks, fixed-lens tech <br>.4k and RAW Formats<br>.Fast accurate autofocus<br>.Extensive connectivity <br><br>Free gift <br> 32GB SD Card <br> Bag",
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 26,
    img: "./assets/images/Compact/canon_powershot_g7_x_mark_iii.jpg",
    name: "POWERSHOT G7X MK-III",
    lens: "compact",
    price: 700,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
    specificationlink:
      "./assets/js/cart/cam/compcat/PowerShot-G7-X-Mark-III/index.html",
    Detailed:
      ".Quick and easy to use<br>.Super connected with Bluetooth<br>.Technology that gives you an advantage <br><br>Free gift <br> 23GB SD Card <br> Bag" ,
      gift:"./assets/images/card/gift.jpg",
  },

  {
    id: 27,
    img: "./assets/images/ACCESSORIES/Canon RP-108  H-Capacity Paper.jpg",
    name: "RP-108",
    price: 30,
    lens: "paper",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Ink Consumables",
    specificationlink: "#",
    Detailed:
    "Highlights <br>.Print up to 108 postcard-sized images<br>.Includes ink and paper<br><br> Guaranteed compatibility with:<br>.SELPHY CP820<br>.SELPHY CP910<br>.SELPHY CP1200<br>.SELPHY CP1000<br>.SELPHY CP1300 ",
    gift:"./assets/images/card/gift2.jpg",
  },

  // {
  //   id: 28,
  //   img: "./assets/images/ACCESSORIES/CAMERA MOUNT ADAP EF-EOS M.jpg",
  //   name: "CAMERA MOUNT ADAP EF-EOS M",
  //   price: 299,
  //   lens: "CAMERA MOUNT",
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "accessories",
  //   specificationlink: "#",
  // },

  /////////////////////////////////////////////////////////////////////Lenses/////////////////////////////////////////////////////////////////////////////

  // {
  //   id: 29,
  //   img: "./assets/images/lenses/50mm.jpg",
  //   name: "EF 50mm f/1.8 STM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 30,
  //   img: "./assets/images/lenses/EF 50mm f-1.4.jpg",
  //   name: "EF 50mm f/1.4 USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 31,
  //   img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
  //   name: "EF 50mm f/1.2L USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 32,
  //   img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
  //   name: "EF 85mm f/1.8 USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 33,
  //   img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
  //   name: "EF 85MM F/1.4L IS USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 34,
  //   img: "./assets/images/lenses/85mm.jpg",
  //   name: "EF 85mm f/1.2L II USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 35,
  //   img: "./assets/images/lenses/100mm-macro.jpg",
  //   name: "EF 100mm f/2.8L Macro IS USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 36,
  //   img: "./assets/images/lenses/EF-16-35mm.jpg",
  //   name: "EF 16-35mm f/2.8L III USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 37,
  //   img: "./assets/images/lenses/ef-24-70mm-f2.8L-II.jpg",
  //   name: "EF 24-70mm f/2.8L II USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 38,
  //   img: "./assets/images/lenses/70-200mm.jpg",
  //   name: "EF 70-200mm f/2.8L IS III USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  // {
  //   id: 39,
  //   img: "./assets/images/lenses/400mm.jpg",
  //   name: "EF 400MM F/2.8L IS III USM",
  //   price: 299,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Lenses",
  //   gift:"./assets/images/card/gift2.jpg",
  // },

  /////////////////////////////////////////////////////////////////////Printers/////////////////////////////////////////////////////////////////////////////

  {
    id: 40,
    img: "./assets/images/Printers/selphy-cp-1300-bk-frt_810x475.jpg",
    name: "SELPHY CP-1300",
    color: "black,white,pink",
    price: 125,
    lens: "Printers",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./assets/printers/SELPHY-CP-1300/index.html",
    Detailed:
      ".Wi-Fi printing<br>.Apple AirPrint<br>.Mopria<br>.Fast lab quality prints<br>.Large 8.1 cm tilt up screen<br>.2x6 photo-booth prints<br>.ID photo print<br>.Choice of 4 finishes",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 41,
    img: "./assets/images/Printers/Canon PIXMA MG2540.jpg",
    name: "PIXMA MG-2540S ",
    price: 30,
    lens: "Printers",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./assets/printers/Canon-PIXMA-MG2540/index.html",
    Detailed:
      ".Convenient and easy to replace<br>.High resolution photo printing<br>.High resolution scanning<br>.Optional high yield inks<br>.One-stop creative software<br>.Smart web printing<br>.Turns on when you start printing<br>.Near silent printing at home",
      gift:"./assets/images/card/gift2.jpg",
  },

  // {
  //   id: 42,
  //   img: "./assets/images/Printers/pixma_ts3140-bk-fra_3dee65c7e1df4e208499df5a373e62d8.webp",
  //   name: "PIXMA TS-3140 ",
  //   price: 299,
  //   lens: "laser",
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Printers",
  // },

  {
    id: 43,
    img: "./assets/images/Printers/pixma-g3420-frt-04_gallery_bc252724311948fdb39b941dd900bfee.webp",
    name: "PIXMA G3420 Wifi",
    price: 175,
    lens: "Printers",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./assets/printers/PIXMA-G3420/index.html",
    Detailed:
      ".Print Speeds<br>.Mobile Device printing<br>.4 easily refillable ink tank<br>.Print borderless photos in sizes up to A4<br>.Print effortlessly using Wi-Fi<br>.Simple to control with 2-line LCD<br>.Banner Printing",
      gift:"./assets/images/card/gift2.jpg",
  },

  // {
  //   id: 44,
  //   img: "./assets/images/Printers/pixma-ix6850-frt_5bc8618a37e148108abf85e838027835.webp",
  //   name: "PIXMA iX6840",
  //   price: 299,
  //   lens: "laser",
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Printers",
  // },

  // {
  //   id: 45,
  //   img: "./assets/images/Printers/pixma-tr150-eur-fra-01_c2cebf5c3e8742e5b85bf05dd314de37.webp",
  //   name: "PIXMA TR-150 with battery",
  //   price: 299,
  //   lens: "laser",
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "Printers",
  // },

  // {
  //   id: 46,
  //   img: "./assets/images/Printers/maxify_mb2140-frt_bd38c38073694f119013d71b642dbd1c.webp",
  //   name: "MAXIFY MB2140",
  //   price: 299,
  //   cart: false,
  //   lens: "ink",
  //   quantity: 1,
  //   total: 0,
  //   type: "Printers",
  // },

  // {
  //   id: 47,
  //   img: "./assets/images/Printers/i-SENSYS MF640 Series-hero_810x475-50c969d8-190f-4f36-9587-be37fa8a83b7.jpg",
  //   name: "i-SENSYS MF-643Cdw",
  //   price: 299,
  //   cart: false,
  //   lens: "all in one",
  //   quantity: 1,
  //   total: 0,
  //   type: "Printers",
  // },
  /////////////////////////////////new add//////////////////////////////////////////
  // {
  //   id: 78,
  //   img: "./assets/images/eos dslr/250d.jpg",
  //   name: "EOS 250D",
  //   lens: "ef 18-55mm",
  //   price: 850,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
  //   type: "dslr",
  //   specificationlink:
  //     "./assets/js/cart/cam/dslr/CANON EOS 250d/index.html",
  //     Detailed:".Be creative and take control<br>.Pro quality images and movies<br>.Always capture the moment"
  // },
  {
    id: 79,
    img: "./assets/images/eos dslr/1dx.jpg",
    name: "EOS 1DX Mark III",
    lens: "body only",
    price: 5800,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./assets/js/cart/cam/dslr/idxmarkIII/index.html",
    Detailed:
      ".Faster than fast. Quicker than quick<br>.Intelligent AF that will blow your mind<br>.An extension of your creative mind <br><br>Free gift <br> 64GB Cfexpress Card ", gift:"./assets/images/card/gift3.jpg",

      
  },
  {
    id: 80,
    img: "./assets/images/eos dslr/legria-hf-g50-legria02_800x364_119276884824655.png",
    name: "Canon Video Camera HF-G50",
    lens: "video",
    price: 1300,
    cart: false,
    quantity: 1,
    total: 0,
    type: "video",
    specificationlink:
      "./assets/js/cart/cam/dslr/Canon-LEGRIA-HF-R806/index.html",
      Detailed:
      ".Capture every detail with ease<br>.Film best ever moments like a pro<br> .Compose and control with the touch of a finger",
      gift:"./assets/images/card/gift2.jpg",
  },
  {
    id: 81,
    img: "./assets/images/Printers/pixma-ts3340-paper-try-up_c24866accf3d4a52a32dc94ecdcf110a.webp",
    name: "PIXMA TS3340",
    lens: "Printers",
    price: 45,
    cart: false,
    lens: "Printers",
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./assets/printers/PIXMA-TS3340/index.html",
    Detailed:
      ".Convenient quality<br>.Effortless connectivity<br>.Link to the cloud<br>.Straightforward loading<br>.Status at a glance<br>.Power saving<br>.Crisp and clear<br>.Borderless photos",
      gift:"./assets/images/card/gift2.jpg",
  },
  {
    id: 82,
    img: "./assets/images/Printers/pixma-g3410-as-paper-try-up-fra_800x606.png",
    name: "PIXMA G3415",
    lens: "Printers",
    price: 150,
    lens: "Printers",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./404.html",
    Detailed:
      ".Convenient and easy to replace<br>.High resolution photo printing<br>.High resolution scanning<br>.Optional high yield inks<br>.One-stop creative software<br>.Smart web printing<br>.Turns on when you start printing<br>.Near silent printing at home",
      gift:"./assets/images/card/gift2.jpg",
  },
  {
    id: 83,
    img: "./assets/images/Printers/MF3010_FSL_BLACK_Default_tcm13-961709.jpg",
    name: "i-SENSYS MF3010",
    lens: "Printers",
    price: 130,
    lens: "Printers",
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    Detailed: ".Copy<br>.Professional Scan quality<br>.USB connection",
    specificationlink: "./assets/printers/i-SENSYS-MF3010/index.html",
    gift:"./assets/images/card/gift2.jpg",
  },
  {
    id: 84,
    img: "./assets/images/Printers/hero_810x475_611713258607671.jpg",
    name: "i-SENSYS MF-113w",
    lens: "Printers",
    price: 160,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    Detailed:
      ".3-in-1 printer, scanner, and copier<br>.22 pages per minute print speed<br>.5-line black and white LCD display<br>.150 sheet paper capacity<br>.Up to 1,600 pages per cartridge<br>.USB connectivity",
      gift:"./assets/images/card/gift2.jpg",
    specificationlink: "#",
  },
  {
    id: 85,
    img: "./assets/images/Printers/6921u-mf237w-frt_810x475.jpg",
    name: "i-SENSYS MF237w",
    lens: "Printers",
    price: 230,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    Detailed:
      ".Automatic Document Feeder<br>.Copy<br>.Super G3 FAX<br>.Use and share over network<br>.Touch Panel<br>.USB connectivity<br>.Professional Scan quality<br>.Scanning shortcut key<br>.Use and share wirelessly<br>.Tablet and smartphone ready",
    specificationlink: "#",
    gift:"./assets/images/card/gift2.jpg",
  },
  {
    id: 86,
    img: "./assets/images/Printers/i-SENSYS LBP-113w.jpg",
    name: "i-SENSYS LBP-113w",
    lens: "Printers",
    price: 130,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
    specificationlink: "./assets/printers/i-SENSYS-LBP110/index.html",
    Detailed:
      ".Single function printer<br>.22 pages per minute print speed<br>.150 sheet paper capacity<br>.Up to 1,600 pages per cartridge<br>.LED and operation key display<br>.USB connectivity",
    specificationlink: "#",
    gift:"./assets/images/card/gift2.jpg",
  },
  /////////////////////////////////Laser Consumables////////////////////////////////////
  {
    id: 87,
    img: "./assets/images/Laser Consumables/3024c002_cartridge-054-black_01.webp",
    name: "Cartridge 054 Bk",
    lens: "Laser ink",
    price: 69,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 1,500 pages<br>.Black toner<br>.Environmentally friendly <br> <br> Guaranteed compatibility with:<br>.i-SENSYS MF645Cx<br>.i-SENSYS MF643Cdw<br>.i-SENSYS MF641Cw<br>.i-SENSYS LBP623Cdw<br>.i-SENSYS LBP621Cw",
    specificationlink: "#",
  },

  {
    id: 88,
    img: "./assets/images/Laser Consumables/3027c002_cartridge-054-cyan_01.webp",
    name: "Cartridge 054 Cyan",
    lens: "Laser ink",
    price: 65,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 1,500 pages<br>.Cyan toner<br>.Environmentally friendly <br> <br> Guaranteed compatibility with:<br>.i-SENSYS MF645Cx<br>.i-SENSYS MF643Cdw<br>.i-SENSYS MF641Cw<br>.i-SENSYS LBP623Cdw<br>.i-SENSYS LBP621Cw",
    specificationlink: "#",
  },

  {
    id: 89,
    img: "./assets/images/Laser Consumables/3026c002_cartridge-054-magenta_01.webp",
    name: "Cartridge 054 Magenta",
    lens: "Laser ink",
    price: 65,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 1,500 pages<br>.Magenta toner<br>.Environmentally friendly <br> <br> Guaranteed compatibility with:<br>.i-SENSYS MF645Cx<br>.i-SENSYS MF643Cdw<br>.i-SENSYS MF641Cw<br>.i-SENSYS LBP623Cdw<br>.i-SENSYS LBP621Cw",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 90,
    img: "./assets/images/Laser Consumables/3025c002_cartridge-054-yellow_01.webp",
    name: "Cartridge 054 Yellow",
    lens: "Laser ink",
    price: 65,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.Yield of 1,500 pages<br>.Yellow toner<br>.Environmentally friendly <br> <br> Guaranteed compatibility with:<br>.i-SENSYS MF645Cx<br>.i-SENSYS MF643Cdw<br>.i-SENSYS MF641Cw<br>.i-SENSYS LBP623Cdw<br>.i-SENSYS LBP621Cw",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 91,
    img: "./assets/images/Laser Consumables/1242c002_canon-045bk-black-toner-cartridge_1.webp",
    name: "Cartridge 045 BK",
    lens: "Laser ink",
    price: 50,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.High print quality<br>.Yield of 1,400 pages<br>.Affordable price <br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 92,
    img: "./assets/images/Laser Consumables/1239c002_canon-045y-yellow-toner-cartridge_1.webp",
    name: "Cartridge 045 Yellow",
    lens: "Laser ink",
    price: 55,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.High print quality<br>.Yield of 1,400 pages<br>.Affordable price <br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 93,
    img: "./assets/images/Laser Consumables/1241c002_canon-045c-cyan-toner-cartridge_1.webp",
    name: "Cartridge 045 Cyan",
    lens: "Laser ink",
    price: 55,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.High print quality<br>.Yield of 1,400 pages<br>.Affordable price <br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx ` ${products.name}`",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 94,
    img: "./assets/images/Laser Consumables/1240c002_canon-045m-magenta-toner-cartridge_1.webp",
    name: "Cartridge 045 Magenta",
    lens: "Laser ink",
    price: 55,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.High print quality<br>.Yield of 1,400 pages<br>.Affordable price <br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
      specificationlink:"#",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 95,
    img: "./assets/images/Laser Consumables/6272b002_crg-731-black.webp",
    name: "Cartridge 731 Black ",
    lens: "Laser ink",
    price: 50,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.Print approximately 1,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
    gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 96,
    img: "./assets/images/Laser Consumables/6269b002_crg-731-yellow.webp",
    name: "Cartridge 731 Yellow",
    lens: "Laser ink",
    price: 55,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    specificationlink:"#",
    Detailed:
    "Highlights <br>.Print approximately 1,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
    gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 97,
    img: "./assets/images/Laser Consumables/6271b002_crg-731-blue.webp",
    name: "Cartridge 731 Cyan",
    lens: "Laser ink ",
    specificationlink:"#",
    price: 55,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.Print approximately 1,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
    gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 98,
    img: "./assets/images/Laser Consumables/6270b002_crg-731-magenta.webp",
    name: "Cartridge 731 magenta",
    lens: "Laser ink",
    price: 55,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.Print approximately 1,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP611Cn<br>.i-SENSYS LBP613Cdw<br>.i-SENSYS MF631Cn<br>.i-SENSYS MF633Cdw<br>.i-SENSYS MF635Cx",
    gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 99,
    img: "./assets/images/Laser Consumables/2662b002_crg-718-black.webp",
    name: "Cartridge 718 Black",
    lens: "Laser ink",
    price: 85,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 3,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br>Guaranteed compatibility with:<br>.i-SENSYS LBP7200Cdn<br>.i-SENSYS MF729Cx<br>.i-SENSYS MF728Cdw<br>.i-SENSYS MF8330Cdn<br>.i-SENSYS MF724Cdw",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 100,
    img: "./assets/images/Laser Consumables/2659b002_crg-718-yellow.webp",
    name: "Cartridge 718 Yellow",
    lens: "Laser ink",
    price: 85,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 3,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br>Guaranteed compatibility with:<br>.i-SENSYS LBP7200Cdn<br>.i-SENSYS MF729Cx<br>.i-SENSYS MF728Cdw<br>.i-SENSYS MF8330Cdn<br>.i-SENSYS MF724Cdw",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 101,
    img: "./assets/images/Laser Consumables/2661b002_crg-718-blue.webp",
    name: "Cartridge 718 Cyan",
    lens: "Laser ink",
    specificationlink:"#",
    price: 85,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
    "Highlights <br>.Yield of 3,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br>Guaranteed compatibility with:<br>.i-SENSYS LBP7200Cdn<br>.i-SENSYS MF729Cx<br>.i-SENSYS MF728Cdw<br>.i-SENSYS MF8330Cdn<br>.i-SENSYS MF724Cdw",
    gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 102,
    img: "./assets/images/Laser Consumables/2661b002_crg-718-blue.webp",
    name: "Cartridge 718 Magenta",
    lens: "Laser ink",
    price: 85,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 3,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br> <br>Guaranteed compatibility with:<br>.i-SENSYS LBP7200Cdn<br>.i-SENSYS MF729Cx<br>.i-SENSYS MF728Cdw<br>.i-SENSYS MF8330Cdn<br>.i-SENSYS MF724Cdw",
      gift:"./assets/images/card/gift2.jpg",
  },

  {
    id: 103,
    img: "./assets/images/Laser Consumables/2164c002_cartridge-047-toner_01.webp",
    name: "Cartridge 047 Black",
    lens: "Laser ink",
    specificationlink:"#",
    price: 65,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of up to 1,600 pages<br>.Black toner <br>.Environmentally friendly<br> <br>Guaranteed compatibility with:<br>.i-SENSYS LBP112<br>.i-SENSYS LBP113w<br>.i-SENSYS MF112<br>.i-SENSYS MF113w",
  },

  {
    id: 104,
    img: "./assets/images/Laser Consumables/2165c001_cartridge-049-drum_01.webp",
    specificationlink:"#",
    name: "DRUM Cartridge 049 ",
    lens: "Laser ink",
    price: 80,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Yield of 12,000 pages<br>.Mono drum cartridge <br>.Environmentally friendly<br> <br> Guaranteed compatibility with:<br>.i-SENSYS LBP112<br>.i-SENSYS LBP113w<br>.i-SENSYS MF112<br>.i-SENSYS MF113w",
  },

  {
    id: 105,
    img: "./assets/images/Laser Consumables/3480b002_crg-719.webp",
    name: "Cartridge 719",
    specificationlink:"#",
    lens: "Laser ink",
    price: 60,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Print approximately 2,100 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br><br>Guaranteed compatibility with:<br>.i-SENSYS LBP6300dn<br>.i-SENSYS LBP6650dn<br>.i-SENSYS MF5840dn <br>.i-SENSYS MF5880dn<br>.i-SENSYS MF5980dw",
  },

  {
    id: 106,
    img: "./assets/images/Laser Consumables/3484b002_crg-725.webp",
    name: "Cartridge 725",
    lens: "Laser ink",
    price: 40,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    specificationlink:"#",
    Detailed:
      "Highlights <br>.Print approximately 1,600 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br><br>Guaranteed compatibility with:<br>.i-SENSYS LBP6020<br>.i-SENSYS LBP6020B<br>.i-SENSYS LBP6000<br>.i-SENSYS MF3010<br>.i-SENSYS LBP6030/B/w",
  },

  {
    id: 106,
    img: "./assets/images/Laser Consumables/3500b002_crg-728.webp",
    name: "Cartridge 728",
    lens: "Laser ink",
    price: 50,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Print approximately 2,100 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br><br>GuaranteedGuaranteed compatibility with:<br>.i-SENSYS MF4870dn<br>.i-SENSYS MF4410<br>.i-SENSYS MF4750<br>.i-SENSYS MF4580dn<br>.i-SENSYS MF4430",
  },

  {
    id: 106,
    img: "./assets/images/Laser Consumables/9435b002_crg-737.webp",
    name: "Cartridge 737",
    lens: "Laser ink",
    price: 65,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Laser Consumables",
    Detailed:
      "Highlights <br>.Print approximately 2,400 pages with a single cartridge<br>.Genuine Canon toner cartridges ensure detailed results and longevity<br><br>Guaranteed compatibility with:<br>.i-SENSYS MF244dw<br>.i-SENSYS MF237w<br>.i-SENSYS MF232w<br>.i-SENSYS MF211<br>.i-SENSYS MF249dw",
  },

  {
    id: 107,
    img: "./assets/images/ink Consumables/INK GI-490 Black.webp",
    name: "INK GI-490 Black",
    specificationlink:"#",
    lens: "ink",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Con",
    Detailed:
    "Highlights <br>.Experience superb print economy with this high-yield ink refill<br>.Print up to 6000 A4 pages from a single 135 ml bottle<br>.High quality pigment ink delivers deep blacks and crisp text<br><br> Guaranteed compatibility with:<br>.PIXMA G3400<br>.PIXMA G2400<br>.PIXMA G1400<br>.PIXMA G4400<br>.PIXMA G1411",
},
  

  {
    id: 108,
    img: "./assets/images/ink Consumables/INK GI-490 Yellow.webp",
    name: "INK GI-490 Yellow",
    specificationlink:"#",
    lens: "ink",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Experience superb print economy with this high-yield ink refill<br>.Print up to 6000 A4 pages from a single 135 ml bottle<br>.High quality pigment ink delivers deep blacks and crisp text<br><br> Guaranteed compatibility with:<br>.PIXMA G3400<br>.PIXMA G2400<br>.PIXMA G1400<br>.PIXMA G4400<br>.PIXMA G1411",
  },

  {
    id: 109,
    img: "./assets/images/ink Consumables/INK GI-490 Cyan.webp",
    name: "INK GI-490 Cyan",
    lens: "ink",
    specificationlink:"#",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Experience superb print economy with this high-yield ink refill<br>.Print up to 6000 A4 pages from a single 135 ml bottle<br>.High quality pigment ink delivers deep blacks and crisp text<br><br> Guaranteed compatibility with:<br>.PIXMA G3400<br>.PIXMA G2400<br>.PIXMA G1400<br>.PIXMA G4400<br>.PIXMA G1411",
  },

  {
    id: 110,
    img: "./assets/images/ink Consumables/INK GI-490 Magenta.webp",
    name: "INK GI-490 Magenta",
    lens: "ink",
    price: 15,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Experience superb print economy with this high-yield ink refill<br>.Print up to 6000 A4 pages from a single 135 ml bottle<br>.High quality pigment ink delivers deep blacks and crisp text<br><br> Guaranteed compatibility with:<br>.PIXMA G3400<br>.PIXMA G2400<br>.PIXMA G1400<br>.PIXMA G4400<br>.PIXMA G1411",
  },

  {
    id: 111,
    img: "./assets/images/ink Consumables/GI-41 PGBK.webp",
    name: "GI-41 PGBK",
    lens: "ink",
    specificationlink:"#",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.High-yield ink for a lower cost per page<br>.Print up to 6,000 pages¹ with a single 135 ml bottle of ink<br>.Key type nozzle to ensure error free refills<br><br> Guaranteed compatibility with:<br>.PIXMA G1420<br>.PIXMA G3420<br>.PIXMA G2420<br>.PIXMA G2460<br>.PIXMA G3460",
  },

  {
    id: 112,
    img: "./assets/images/ink Consumables/GI-41 Cyan.webp",
    name: "GI-41 Cyan",
    lens: "ink",
    specificationlink:"#",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.High-yield ink for a lower cost per page<br>.Print up to 6,000 pages¹ with a single 135 ml bottle of ink<br>.Key type nozzle to ensure error free refills<br><br> Guaranteed compatibility with:<br>.PIXMA G1420<br>.PIXMA G3420<br>.PIXMA G2420<br>.PIXMA G2460<br>.PIXMA G3460",
  },

  {
    id: 113,
    img: "./assets/images/ink Consumables/GI-41 Yellow.webp",
    name: "GI-41 Yellow",
    lens: "ink",
    specificationlink:"#",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.High-yield ink for a lower cost per page<br>.Print up to 6,000 pages¹ with a single 135 ml bottle of ink<br>.Key type nozzle to ensure error free refills<br><br> Guaranteed compatibility with:<br>.PIXMA G1420<br>.PIXMA G3420<br>.PIXMA G2420<br>.PIXMA G2460<br>.PIXMA G3460",
  },

  {
    id: 114,
    img: "./assets/images/ink Consumables/GI-41 Magenta.webp",
    name: "GI-41 Magenta",
    lens: "ink",
    specificationlink:"#",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.High-yield ink for a lower cost per page<br>.Print up to 6,000 pages¹ with a single 135 ml bottle of ink<br>.Key type nozzle to ensure error free refills<br><br> Guaranteed compatibility with:<br>.PIXMA G1420<br>.PIXMA G3420<br>.PIXMA G2420<br>.PIXMA G2460<br>.PIXMA G3460",
  },

  {
    id: 115,
    img: "./assets/images/ink Consumables/PGI-35 Bk ink.webp",
    name: "PGI-35 Bk ink",
    lens: "ink",
    price: 10,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    specificationlink:"#",
    Detailed:
    "Highlights <br>.Print up to 191 A4 documents<br>.Genuine Canon ink ensures crisp, sharp, and long-lasting results<br><br> Guaranteed compatibility with:<br>.PIXMA iP110<br>.PIXMA P100 with Battery (WB)<br>.PIXMA iP100<br>.PIXMA iP110 wb<br>.PIXMA TR150",
  },

  {
    id: 116,
    img: "./assets/images/ink Consumables/CLI-36 Color ink.webp",
    name: "CLI-36 Color ink",
    lens: "ink",
    price: 15,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    specificationlink:"#",
    Detailed:
    "Highlights <br>.Genuine Canon Ink produces on average 35% more quality prints than imitation cartridges<br>.Genuine Canon Ink provides consistent quality prints 100% of the time <br>.Genuine Canon Ink is 100% reliable so you can print with less stress<br><br> Guaranteed compatibility with:<br>.PIXMA iP100<br>.PIXMA iP100 with Battery WB<br>.PIXMA iP110 WB<br>.PIXMA TR150  ",
  },

  {
    id: 117,
    img: "./assets/images/ink Consumables/PG-445.webp",
    name: "PG-445",
    lens: "ink",
    price: 12,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Guaranteed compatibility with:<br>.PIXMA MG3040<br>.PIXMA MG2545S<br>.PIXMA MG2440<br>.PIXMA MG2940<br>.PIXMA MG2540",
  },

  {
    id: 118,
    img: "./assets/images/ink Consumables/CL-446.webp",
    name: "CL-446",
    specificationlink:"#",
    lens: "ink",
    price: 14,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print up to 180 A4 pages<br>.Exceptional results that last a lifetime thanks to genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MX494<br>.PIXMA MG2440<br>.PIXMA MG2545S<br>.PIXMA iP2840<br>.PIXMA MG2940",
  },

  {
    id: 119,
    img: "./assets/images/ink Consumables/PG-445XL.webp",
    specificationlink:"#",
    name: "PG-445XL",
    lens: "ink",
    price: 18,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print more for less<br>.Deliver up to 400 pages of A4 documents<br>.Deliver crisp, sharp, long-lasting results with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG3040<br>.PIXMA MG2940<br>.PIXMA MG2540S<br>.PIXMA iP2840<br>.PIXMA MG2545S",
  },

  {
    id: 120,
    img: "./assets/images/ink Consumables/CL-446XL.webp",
    name: "CL-446XL",
    lens: "ink",
    price: 20,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print more for less. Save up to 30%<br>.Up to 300 A4 pages from a single colour cartridge <br>.Exceptional results that last a lifetime thanks to genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA iP2840<br>.PIXMA MG2440<br>.PIXMA MG2540<br>.PIXMA MG2940<br>.PIXMA MX494",
    
  },

  {
    id: 121,
    img: "./assets/images/ink Consumables/PGI-450 PGBK.webp",
    name: "PGI-450 PGBK",
    lens: "ink",
    price: 12,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    specificationlink:"#",
    Detailed:
    "Guaranteed compatibility with:<br>.PIXMA MG5640<br>.PIXMA MG6640<br>.PIXMA MG7140<br>.PIXMA MG7540<br>.PIXMA MG5540",
  },

  {
    id: 122,
    img: "./assets/images/ink Consumables/CLI-451 BK.webp",
    name: "CLI-451 BK",
    lens: "ink",
    price: 9,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    specificationlink:"#",
    Detailed:
    "Highlights <br>.Print up to 495 colour photos in 10x15cm<br>.Turn your memories into stunning, long-lasting photos with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG7540<br>.PIXMA iP8740<br>.PIXMA MG6340<br>.PIXMA MG6440<br>.PIXMA iP7240",
  },

  {
    id: 123,
    img: "./assets/images/ink Consumables/CLI-451 C.webp",
    name: "CLI-451 C",
    lens: "ink",
    price: 9,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print up to 495 colour photos in 10x15cm<br>.Turn your memories into stunning, long-lasting photos with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG7540<br>.PIXMA iP8740<br>.PIXMA MG6340<br>.PIXMA MG6440<br>.PIXMA iP7240",
  },

  {
    id: 124,
    img: "./assets/images/ink Consumables/CLI-451 M.webp",
    name: "CLI-451 M",
    lens: "ink",
    price: 9,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print up to 495 colour photos in 10x15cm<br>.Turn your memories into stunning, long-lasting photos with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG7540<br>.PIXMA iP8740<br>.PIXMA MG6340<br>.PIXMA MG6440<br>.PIXMA iP7240",
  },

  {
    id: 125,
    img: "./assets/images/ink Consumables/CLI-451 Y.webp",
    specificationlink:"#",
    name: "CLI-451 Y",
    lens: "ink",
    price: 9,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print up to 495 colour photos in 10x15cm<br>.Turn your memories into stunning, long-lasting photos with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG7540<br>.PIXMA iP8740<br>.PIXMA MG6340<br>.PIXMA MG6440<br>.PIXMA iP7240",
  },

  {
    id: 126,
    img: "./assets/images/ink Consumables/CLI-451 GY.webp",
    name: "CLI-451 GY",
    specificationlink:"#",
    lens: "ink",
    price: 9,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Ink Consumables",
    Detailed:
    "Highlights <br>.Print up to 495 colour photos in 10x15cm<br>.Turn your memories into stunning, long-lasting photos with genuine Canon ink<br><br> Guaranteed compatibility with:<br>.PIXMA MG7540<br>.PIXMA iP8740<br>.PIXMA MG6340<br>.PIXMA MG6440<br>.PIXMA iP7240",
  },

  // {
  //   id: 127,
  //   img: "./assets/images/ACCESSORIES/KINGJOY VT-3500.jpg",
  //   name: "KINGJOY VT-3500",
  //   specificationlink:"#",
  //   lens: "Tripods",
  //   price: 285,
  //   cart: false,
  //   quantity: 1,
  //   total: 0,
 // gift:"./assets/images/card/gift2.jpg",
  //   type: "Tripods",
  // },

  {
    id: 128,
    img: "./assets/images/ACCESSORIES/KINGJOY VT-2500.jpg",
    name: "KINGJOY VT-2500",
    lens: "Tripods",
    specificationlink:"#",
    price: 150,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Tripods",
    Detailed:
    "Products Details:<br>.Product Type: VT-2500<br>.Section: 3<br>.Max.H: 1550mm<br>.Min.H:710mm<br>.Folded: 760mm<br>.Weight: 3.25kg<br>.Max.Load: 15kg",
  },

  {
    id: 129,
    img: "./assets/images/ACCESSORIES/KINGJOY VT-1500.jpg",
    name: "KINGJOY VT-1500",
    lens: "Tripods",
    price: 75,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Tripods",
    Detailed:
    "Products Details:<br>.Model VT-1500<br>.Sections 3<br>.Max Height 1660 mm<br>.Min Height 612 mm<br>.Folded Length 670 mm<br>.Weight 2.16 kg<br>.Max.Load15 kg",
  },

  {
    id: 130,
    img: "./assets/images/ACCESSORIES/KINGJOY VT-860.jpg",
    name: "KINGJOY VT-860",
    lens: "Tripods",
    price: 45,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Tripods",
    Detailed:
    "Products Details:<br>.Leg Material Al Alloy/Plastic<br>.Section 4<br>.Pipe Dia 23mm<br>.Extended Heigt 450-1470mm<br>.Folded Height 480mm<br>.Tripod Weight1.1KG",
  },

  {
    id: 131,
    img: "./assets/images/ACCESSORIES/KINGJOY G22+G00.jpg",
    name: "KINGJOY G22+G00",
    lens: "Tripods",
    price: 80,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    specificationlink:"#",
    type: "Tripods",
     Detailed:
    "Products Details:<br>.Material : aluminum alloy<br>.Section: 5<br>.Minimum Height: 47cm / 18.5<br>.Maximum Height: 143cm / 56.3<br>.Folded Height: 35.6cm / 14<br>.Weight:1.25 KG",
  },

  {
    id: 132,
    img: "./assets/images/ACCESSORIES/KINGJOY MP-4208F + VT-3510.jpg",
    name: "KINGJOY MP-4208F + VT-3510",
    lens: "Tripods",
    price: 150,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Tripods",
    Detailed:
    "Products Details:<br>.4-section<br>.Leg Diameter: 34.6 mm/1.36<br>.Extended height: 175 cm/68.9<br>.Folded height: 68 cm/26.77<br>.Weight: 1.79 KG/3.95 lbs<br>.Max. Load: 18 kg/39.69 lbs",
  },

  {
    id: 133,
    img: "./assets/images/ACCESSORIES/ZOMEI Q111.jpg",
    name: "ZOMEI Q111",
    lens: "Tripods",
    price: 50,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Tripods",
    Detailed:
    "FEATURES:<br>.4-section column leg with quick release locks, get the height you need (from 18in to 55in), only about 2.6lb (1.18kg) weight<br>.Awesome to be stable to take long exposures by hanging weight on the center hook<br>.Anti slip foam protect hands to absorb sweat, prevent slippery, improve the use of comfort<br>.Non slip rubber feet imitated horseshoe design for better gripping",
  },

  {
    id: 134,
    img: "./assets/images/ACCESSORIES/ZOMEI Q666.jpg",
    name: "ZOMEI Q666",
    lens: "Tripods",
    price: 100,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    specificationlink:"#",
    type: "Tripods",
    Detailed:
    "FEATURES:<br>[Portable & Adjustable] The tripod legs can be inverted and folded back on itself by up to 180 degrees, allowing for easy transportation wherever you are. Quick twist lock system allows you to have a quick operation of the tripod with a single hand, also makes it more compact .Comes with a carrying case, provides a basic protection and easy to carry anywhere you want.<br>.[Extra stable] High quality magnesium aluminum with top casting guarantee great rigidity, solid and light weight, it's 22lbs capacity should suffice for any camera, video-camera, DSLR, mirrorless, or point & shoot camera.Use the spring-loaded hook in the center-column of the tripod to add extra weight to your tripod for maximum stability.<br>. [Head & Pan Lock] Individual angle/tension adjusting knobs for the head and pan lock for easy and accurate adjustments.Create accurate panorama shots with the easy to use Zomei Q666, use the gradual panning scale for extra accuracy when aligning your next shot.",
  },

  {
    id: 135,
    img: "./assets/images/Audio/RODE VideoMic GO.jpg",
    name: "RODE VideoMic GO",
    lens: "Audio",
    price: 110,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    specificationlink:"#",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Acoustic Principle	Line Gradient<br>.Active Electronics	JFET impedance converter with bipolar output buffer<br>.Capsule	0.50<br>.Address Type	End<br>.Frequency Range	100Hz - 16kHz<br>.Maximum SPL	120dBSPL<br>.Sensitivity	-35.0dB re 1 Volt/Pascal (17.80mV @ 94 dB SPL) +/- 2 dB @ 1kHz<br>.Equivalent Noise Level (A-weighted)	34dBA<br>.Weight	73.00g<br>.Dimensions	79.00mmH x 73.00mmW x 167.00mmD<br>.Output 3.5<br>"
  },

  {
    id: 136,
    img: "./assets/images/Audio/RODE VideoMicro.jpg",
    name: "RODE VideoMicro",
    lens: "Audio",
    price: 120,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    specificationlink:"#",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Acoustic Principle	Pressure Gradient<br>.Active Electronics	JFET impedance converter<br>.Capsule	0.50<br>.Address Type	End<br>.Frequency Range	100Hz - 20kHz<br>.Maximum SPL	140dBSPL<br>.Sensitivity	-33.0dB re 1 Volt/Pascal (22.00mV @ 94 dB SPL) +/- 2 dB @ 1kHz<br>.Equivalent Noise (A-weighted)	20dBA<br>.Power Requirements	2V-5V DC<br>"
  },

  {
    id: 137,
    img: "./assets/images/Audio/RODE VideoMic Pro.jpg",
    name: "RODE VideoMic Pro",
    lens: "Audio",
    price: 250,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Acoustic Principle	Line Gradient<br>.Active Electronics	JFET impedance converter<br>.Capsule	0.50<br>.Address Type	End<br>.Frequency Range	40Hz - 20kHz (selected HPF @80)<br>.Output Impedance	200Ω<br>.Maximum SPL	134dBSPL<br>.Maximum Output Level	6.9mV (@ 1kHz, 1% THD into 1KΩ load)<br>.Sensitivity	-32.0dB re 1 Volt/Pascal (20.00mV @ 94 dB SPL) +/- 2 dB @ 1kHz<br>.Equivalent Noise Level (A-weighted)	14dBA<br>.Weight	85g<br>.Dimensions	100mmH x 75mmW x 170mmD<br>"
  },

  {
    id: 138,
    img: "./assets/images/Audio/RODE Wireless GO.jpg",
    name: "RODE Wireless GO",
    lens: "Audio",
    price: 230,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Transmitter operates as a clip-on microphone or beltpack for a lavalier/headset microphone.<br>.Ultra-compact form-factor – transmitter and receiver weigh a minuscule 31g each.<br>.Series III 2.4GHz digital wireless transmission with 128-bit encryption delivers crystal-clear audio under any conditions and excels in dense Wi-Fi and Bluetooth environments (shopping malls, conventions, hotels etc).<br>.Up to 70m range (line-of-sight), optimised for short-range operation in congested RF environments.<br>.In-built rechargeable batteries that last up to 7 hours, charged via USB-C.<br>.Super easy to use – transmitter and receiver auto-pair in under three seconds.<br>.3-stage output pad (0dB, -12dB and -24dB) and battery saver mode.<br>.Use up to eight systems in one location.<br>.Comes in either black or white.<br>.Designed and made in RØDE’s precision manufacturing facilities in Sydney, Australia."
  },

  {
    id: 139,
    img: "./assets/images/Audio/RODE Wireless GO II.jpg",
    name: "RODE Wireless GO II",
    lens: "Audio",
    price: 370,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Dual channel wireless microphone system for recording two sound sources simultaneously<br>.Series IV 2.4GHz digital transmission, 128-bit encryption – crystal-clear audio at up to 200m (line of sight), optimised for extremely stable operation in dense RF environments <br>.3.5mm TRS analog output, USB-C and iOS digital output – universal compatibility with cameras, mobile devices and computers.<br>.On-board recording – over 40 hours of internal memory<br>.Option to record each channel separately or combine them for ultimate flexibility in post-production<br>.Safety channel, flexible gain control (three-stage pad, expandable to 10-stage).<br>.Designed and made in RØDE’s precision manufacturing facilities in Australia"
  },

  {
    id: 140,
    img: "./assets/images/Audio/BOYA BY-M1.jpg",
    name: "BOYA BY-M1",
    lens: "Audio",
    price: 15,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Omnidirectional polar pattern.<br>.Flat frequency response.<br>.High quality sound.<br>. Work with cameras, smartphones and computers.<br>.One button switch between camera and smartphone mode.<br>.6m(20') length cable<br>.Foam windscreen, lapel clip, 1/4” adapter and LR44 battery included."
  },

  {
    id: 141,
    img: "./assets/images/Audio/BOYA BY-WM8 Pro-K2.jpg",
    name: "BOYA BY-WM8 Pro-K2",
    lens: "Audio",
    price: 250,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.Includes Two Transmitters and One Receiver.<br>.Dual-Channel Wireless Receiver suits for Cameras,Camcorders etc.<br>. Ideal for capturing interviews, film dialog, field recording,broadcast TV, news gathering etc.<br>. 48 Selectable UHF Channels.<br>.Broadcast-Quality Sound.<br>.Selectable Stereo and Mono Mode.<br>.F With Mute function<br>.Easy-to-read LCD displays.<br>.Automatic LCD-locked Function<br>.Monitoring sound by headphone output (Receiver)<br>.Operation range can reach up to 100m (300')(without obstacle)<br>.Two AA batteries for both transmitter and receiver"
  },

  {
    id: 142,
    img: "./assets/images/Audio/BOYA BY-WM8 PRO-K3.jpg",
    name: "BOYA BY-WM8 PRO-K3",
    lens: "Audio",
    price: 215,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "Audio",
    Detailed:
    "SPECIFICATIONS:<br>.For Mobile Journalism, Video, Vlog<br>.RX8 Pro Dual-Channel Wireless Receiver<br>.BY-WHM8 Pro Handheld Mic/Transmitter<br>.Cardioid Pickup Pattern<br>.48 Selectable Frequencies<br>.Headphone Monitor Output on Receiver<br>.Easy-to-read LCD displays.<br>.Mono and Stereo Modes on Receiver<br>.6 Hours on AA Batteries"
  },

  // {
  //   id: 143,
  //   img: "./assets/images/Audio/BOYA BY-WM8 PRO-K3.jpg",
  //   name: "BOYA BY-WM8 PRO-K3",
  //   lens: "Audio",
  //   price: 215,
  //   cart: false,
  //   quantity: 1,
  //   specificationlink:"#",
  //   total: 0,
  //gift:"./assets/images/card/gift2.jpg",
  //   type: "Audio",
  // },

  {
    id: 144,
    img: "./assets/images/card/32GB100MB.jpg",
    name: "Kingston 32GB 100MB/S",
    lens: "memory card",
    price: 10,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    specificationlink:"#",
    Detailed:
    "Specifications:<br>.Capacities2	32 GB, 64 GB, 128 GB, 256 GB, 512 GB<br>.Performance1	100MB/s Read, UHS-I Speed Class, U1, V10 (32GB-64GB)100/85MB/s Read/Write, UHS-I Speed Class, U3, V30 (128GB-512GB)<br>.Dimensions	24 mm x 32 mm x 2.1 mm<br>.Format	FAT32 (32 GB), exFAT (64 GB-512 GB)<br>.Operating temperature	-25 °C~85 °C<br>.Storage temperature	-40 °C~85 °C<br>.Voltage	3.3 V<br>.Warranty support	Lifetime",
  },

  {
    id: 145,
    img: "./assets/images/card/Kingston 64GB SDXC Canvas Go Plus 170MB.jpg",
    name: "Kingston 64GB SDXC Canvas Go Plus 170MB/s",
    lens: "memory card",
    price: 25,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.Capacities2	64GB, 128GB, 256GB, 512GB<br>.Standard/Class	Class 10, UHS-I, U3, V30<br>.Performance1	170/70MB/s Read/Write (64GB)170/90MB/s Read/Write (128GB-512GB)<br>.Format	exFAT<br>.Operating Temperatures	-25°C to 85°C<br>.Storage Temperatures	-40°C to 85°C<br>.Voltage	3.3V<br>",
  },

  {
    id: 146,
    img: "./assets/images/card/Kingston 128GB SDXC Canvas Go Plus 170MB.jpg",
    name: "Kingston 128GB SDXC Canvas Go Plus 170MB/s",
    lens: "memory card",
    price: 45,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.Capacities2	64GB, 128GB, 256GB, 512GB<br>.Standard/Class	Class 10, UHS-I, U3, V30<br>.Performance1	170/70MB/s Read/Write (64GB)170/90MB/s Read/Write (128GB-512GB)<br>.Format	exFAT<br>.Operating Temperatures	-25°C to 85°C<br>.Storage Temperatures	-40°C to 85°C<br>.Voltage	3.3V<br>",
  },

  {
    id: 147,
    img: "./assets/images/card/Sandisk Micro SD Card 64GB 170MB.jpg",
    name: "Sandisk Micro SD Card 64GB 170MB/S + adapter",
    lens: "memory card",
    price: 20,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.64GB"
  },

  {
    id: 148,
    img: "./assets/images/card/Sandisk Micro SD Card 128GB 170MB.jpg",
    name: "Sandisk Micro SD Card 128GB 170MB/S + adapter",
    lens: "memory card",
    price: 30,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.128GB"
  },

  {
    id: 149,
    img: "./assets/images/card/Sandisk Micro SD Card 256GB 170MB.jpg",
    name: "Sandisk Micro SD Card 256GB 170MB/S + adapter",
    lens: "memory card",
    price: 55,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.256GB"
  },

  {
    id: 150,
    img: "./assets/images/card/Sandisk 32GB SDHC Card 100MB.jpg",
    name: "Sandisk 32GB SDHC Card 100MB/S",
    lens: "memory card",
    price: 10,
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    specificationlink:"#",
    Detailed:
    "Specifications:<br>.32GB Storage Capacity<br>.Max Read Speed: 100 MB/s<br>.Records Full HD Video<br>.Water / Shock / X-Ray Proof<br>.Built-In Write-Protect Switch<br>.UHS-I / Class 10 / U1<br>.Min Write Speed: 10 MB/s<br>.Records Raw and JPEG Photos<br>.Temperature Proof",

  },

  {
    id: 151,
    img: "./assets/images/card/Sandisk 64GB SDHC Card 100MB.jpg",
    name: "Sandisk 64GB SDHC Card 100MB",
    lens: "memory card",
    price: 15,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.64GB Storage Capacity<br>.Max Read Speed: 100 MB/s<br>.Records Full HD Video<br>.Water / Shock / X-Ray Proof<br>.Built-In Write-Protect Switch<br>.UHS-I / Class 10 / U1<br>.Min Write Speed: 10 MB/s<br>.Records Raw and JPEG Photos<br>.Temperature Proof",
  },

  {
    id: 152,
    img: "./assets/images/card/Sandisk 64GB SDXC 150MB.jpg",
    name: "Sandisk 64GB SDXC 150MB/S",
    lens: "memory card",
    price: 20,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:"64GB",
  },

  {
    id: 153,
    img: "./assets/images/card/Sandisk Extreme PRO 64GB SDXC 170MB.jpg",
    name: "Sandisk Extreme PRO 64GB SDXC 170MB/S",
    lens: "memory card",
    price: 25,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.64GB Storage Capacity<br>.Max Read Speed: 170 MB/s<br>.Min Write Speed: 30 MB/s<br>.Built-In Write-Protect Switch<br>.UHS-I / V30 / U3 / Class 10<br>.Max Write Speed: 90 MB/s<br>.Records Full HD, 3D, and 4K Videos",
  },

  // {
  //   id: 154,
  //   img: "./assets/images/card/Sandisk Extreme PRO 64GB SDXC 170MB.jpg",
  //   name: "Sandisk Extreme PRO 64GB SDXC 170MB/S",
  //   lens: "memory card",
  //   price: 25,
  //   cart: false,
  //   quantity: 1,
  //   specificationlink:"#",
  //   total: 0,
  //gift:"./assets/images/card/gift2.jpg",
  //   type: "memory",
  //   Detailed:
  //   "Specifications:<br>.64GB Storage Capacity<br>.Max Read Speed: 170 MB/s<br>.Min Write Speed: 30 MB/s<br>.Built-In Write-Protect Switch<br>.UHS-I / V30 / U3 / Class 10<br>.Max Write Speed: 90 MB/s<br>.Records Full HD, 3D, and 4K Videos",
  // },

  {
    id: 155,
    img: "./assets/images/card/Sandisk Extreme PRO 128GB SDXC 170MB.jpg",
    name: "Sandisk Extreme PRO 128GB SDXC 170MB/S",
    lens: "memory card",
    price: 45,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.128GB Storage Capacity<br>.Max Read Speed: 170 MB/s<br>.Min Write Speed: 30 MB/s<br>.Built-In Write-Protect Switch<br>.UHS-I / V30 / U3 / Class 10<br>.Max Write Speed: 90 MB/s<br>.Records Full HD, 3D, and 4K Videos",
  },

  {
    id: 155,
    img: "./assets/images/card/Sandisk Extreme PRO 256GB SDXC 170MB.jpg",
    name: "Sandisk Extreme PRO 256GB SDXC 170MB/S",
    lens: "memory card",
    price: 85,
    cart: false,
    quantity: 1,
    specificationlink:"#",
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.256GB Storage Capacity<br>.Max Read Speed: 170 MB/s<br>.Min Write Speed: 30 MB/s<br>.Built-In Write-Protect Switch<br>.UHS-I / V30 / U3 / Class 10<br>.Max Write Speed: 90 MB/s<br>.Records Full HD, 3D, and 4K Videos",
  },

  // {
  //   id: 156,
  //   img: "./assets/images/card/Sandisk Extreme PRO 256GB SDXC 170MB.jpg",
  //   name: "Sandisk Extreme PRO 256GB SDXC 170MB/S",
  //   lens: "memory card",
  //   price: 85,
  //   cart: false,
  //   quantity: 1,
  //   specificationlink:"#",
  //   total: 0,
  //gift:"./assets/images/card/gift2.jpg",
  //   type: "memory",
  // },

  {
    id: 157,
    img: "./assets/images/card/Sandisk Extreme PRO 128GB Cfexpress Type B 1700MB.jpg",
    name: "Sandisk Extreme PRO 128GB Cfexpress Type B 1700MB/S",
    lens: "memory card",
    price: 220,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.128GB Storage Capacity<br>.Max Read Speed: 1700 MB/s<br>.Max Write Speed: 1200 MB/s<br>.Records Raw 4K Video<br>.Compatible with Select XQD Devices<br>.Downloadable Photo Recovery Software",
  },

  {
    id: 158,
    img: "./assets/images/card/Sandisk Extreme CompactFlash Card 64GB 120MB.jpg",
    name: "Sandisk Extreme CompactFlash Card 64GB 120MB/S",
    lens: "memory card",
    price: 45,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.64GB Storage Capacity<br>.Write Speed up to 85 MB/s<br>.Limited Lifetime Warranty<br>.Read Speed up to 120 MB/s<br>.UDMA 7 Compliant",
  },

  {
    id: 159,
    img: "./assets/images/card/Sandisk ImageMate PRO USB-C Reader.jpg",
    name: "Sandisk ImageMate PRO USB-C Reader",
    lens: "memory card",
    price: 35,
    specificationlink:"#",
    cart: false,
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.1 x SDXC Slot (UHS-II)<br>.1 x CompactFlash Slot (UDMA 7)<br>.CompactFlash Speeds up to 160 MB/s<br>.USB 2.0 Compatible<br>.Includes micro-USB to USB Type-C Cable<br>.1 x microSDXC Slot (UHS-II)<br>.SD/microSD Speeds up to 312 MB/s<br>.Micro-USB 3.0 Interface<br>.Plug-and-Play<br>.Windows and Mac Compatible",
  },

  {
    id: 160,
    img: "./assets/images/card/Sandisk Extreme PRO Cfexpress Card Reader.jpg",
    name: "Sandisk Extreme PRO Cfexpress Card Reader",
    lens: "memory card",
    price: 50,
    cart: false,
    specificationlink:"#",
    quantity: 1,
    total: 0,
    gift:"./assets/images/card/gift2.jpg",
    type: "memory",
    Detailed:
    "Specifications:<br>.1 x CFexpress Type B Card Slot<br>.USB 3.1 Gen 2 Type-C Port<br>.Includes USB Type-C Cable",
  },
];


const db = getDatabase();


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const searchField = document.querySelector("#searchinput");
const searchResultsContainer = document.querySelector("#searchresults");

searchField.addEventListener("input", (e) => {
  // if input field is empty, clear the search results
  if (e.target.value === "") {
    searchResultsContainer.innerHTML = "";
  }

  if (e.target.value.length > 0) {
    searchResultsContainer.style.display = "block";
  } else if (e.target.value.length == 0) {
    searchResultsContainer.style.display = "none ";
  }

  // filter the products array
  const searchResults = products.filter((meal) => {
    return meal.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  if (searchResults.length == 0) {
    searchResultsContainer.style.display = "none ";
  }

  // before displaying the search results, clear the search results div
  searchResultsContainer.innerHTML = "";

  searchResultsContainer.innerHTML = searchResults.reduce((acc, element) => {
    acc += `<p data-product-id="${element.id}" class="searshdatap">
            ${element.name}
        </p>`;
    return acc;
  }, "");
});

searchResultsContainer.addEventListener("click", (e) => {
  const selectedProduct = products.find(
    (product) => product.id === Number(e.target.dataset.productId)
  );
  console.log(selectedProduct);
  localStorage.setItem("selecteditem", JSON.stringify(selectedProduct));

  window.location.href = "./single-product.html";
});
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
const searchFieldMob = document.querySelector("#searchinputmob");
const searchResultsContainerMob = document.querySelector("#searchresultsmob");

searchFieldMob.addEventListener("input", (e) => {
  // if input field is empty, clear the search results
  if (e.target.value === "") {
    searchResultsContainerMob.innerHTML = "";
  }

  if (e.target.value.length > 0) {
    searchResultsContainerMob.style.display = "block";
  } else if (e.target.value.length == 0) {
    searchResultsContainerMob.style.display = "none ";
  }

  // filter the products array
  const searchResults = products.filter((meal) => {
    return meal.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  if (searchResults.length == 0) {
    searchResultsContainerMob.style.display = "none ";
  }

  // before displaying the search results, clear the search results div
  searchResultsContainerMob.innerHTML = "";

  searchResultsContainerMob.innerHTML = searchResults.reduce((acc, element) => {
    acc += `<p data-product-id="${element.id}" class="searshdatap">
            ${element.name}
        </p>`;
    return acc;
  }, "");
});

searchResultsContainerMob.addEventListener("click", (e) => {
  const selectedProduct = products.find(
    (product) => product.id === Number(e.target.dataset.productId)
  );
  console.log(selectedProduct);
  localStorage.setItem("selecteditem", JSON.stringify(selectedProduct));

  window.location.href = "./single-product.html";
});
/////////////////////////////////////////////////////////////////////////////////////////////

const Printersitemscat = document.getElementById("Printersli");

Printersitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const leserinksitemscat = document.getElementById("Laserinkli");

leserinksitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const audioitemscat = document.getElementById("audioli");

audioitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const carditemscat = document.getElementById("memoryli");

carditemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const Tripodsitemscat = document.getElementById("Tripodsli");

Tripodsitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});



const inksitemscat = document.getElementById("inkli");

inksitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

// const accessoriesitemscat = document.getElementById("accessoriesli");

// accessoriesitemscat.addEventListener("click", function (e) {
//   const filteredItems = products.filter(
//     (item) => item.type === e.currentTarget.dataset.type
//   );

//   localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
//   console.log(JSON.parse(localStorage.getItem("filteredItems")));
//   console.log("-------------------------------");

//   window.location.href = "./products.html";
// });

const Lensesitemscat = document.getElementById("Lensesli");

Lensesitemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const compacttemscat = document.getElementById("compactli");

compacttemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const dslrtemscat = document.getElementById("dslrli");

dslrtemscat.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

////////////////////////////////////////////////////////////////////////////////////////////

const Printersitems = document.getElementById("Printers");

Printersitems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const Lensesitems = document.getElementById("Lenses");

Lensesitems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const compacttems = document.getElementById("compact");

compacttems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const dslrtems = document.getElementById("dslr");

dslrtems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const videotems = document.getElementById("video");

videotems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const InkConsumablestems = document.getElementById("Ink Consumables");

InkConsumablestems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const laserConsumablestems = document.getElementById("Laser Consumables");

laserConsumablestems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const TripodsMonopodsstems = document.getElementById("Tripods");

TripodsMonopodsstems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const memorytems = document.getElementById("memory");

memorytems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});

const Audiotems = document.getElementById("Audio");

Audiotems.addEventListener("click", function (e) {
  const filteredItems = products.filter(
    (item) => item.type === e.currentTarget.dataset.type
  );

  localStorage.setItem("filteredItems", JSON.stringify(filteredItems));
  console.log(JSON.parse(localStorage.getItem("filteredItems")));
  console.log("-------------------------------");

  window.location.href = "./products.html";
});
