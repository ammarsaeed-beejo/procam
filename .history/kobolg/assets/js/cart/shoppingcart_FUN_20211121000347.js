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
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 4000D/index.html",
  },

  {
    id: 2,
    img: "./assets/images/eos dslr/2000d.jpg",
    name: "EOS 2000D",
    lens: "EF-S 18-55mm/DC",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 2000D/index.html",
  },

  {
    id: 3,
    img: "./assets/images/eos dslr/250d.jpg",
    name: "EOS 250D",
    lens: "BK 18-55mm",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 250d/index.html",
  },

  {
    id: 4,
    img: "./assets/images/eos dslr/850d.jpg",
    name: "EOS 850D",
    lens: "EF-18-55mm",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 850d/index.html",
  },

  {
    id: 5,
    img: "./assets/images/eos dslr/850d.jpg",
    name: "EOS 850D",
    lens: "EF-18-135mm",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 850d/index.html",
  },

  {
    id: 6,
    img: "./assets/images/eos dslr/80D.jpg",
    name: "EOS 80D",
    lens: "18-135mm",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 80D/index.html",
  },

  {
    id: 7,
    img: "./assets/images/eos dslr/90d.jpg",
    name: "EOS 90D",
    lens: "EF 18-135mm",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/CANON EOS 90d/index.html",
  },

  {
    id: 8,
    img: "./assets/images/eos dslr/5d IV.jpg",
    name: "EOS 5D Mark IV",
    lens: "24-105 F4L",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS 5D Mark IV/index.html",
  },

  {
    id: 9,
    img: "./assets/images/eos dslr/m50.jpg",
    name: "EOS M50",
    lens: "EF-M 15-45S",
    price: 2500,
    color: "blk ,White",
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS M50/index.html",
  },

  {
    id: 10,
    img: "./assets/images/eos dslr/m50.jpg",
    name: "EOS M50 VLOGGER Kit",
    lens: "body only",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS M50/index.html",
  },

  {
    id: 11,
    img: "./assets/images/eos dslr/rp.jpg",
    name: "EOS RP Body",
    lens: "Mount Adapter EU26",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS RP/index.html",
  },

  {
    id: 12,
    img: "./assets/images/eos dslr/rp.jpg",
    name: "EOS RP",
    lens: "24-105 F4-7.1 IS",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS RP/index.html",
  },

  {
    id: 13,
    img: "./assets/images/eos dslr/EOS R.jpg",
    name: "EOS R Body",
    lens: "Mount Adapter EU26",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS R/index.html",
  },

  {
    id: 14,
    img: "./assets/images/eos dslr/EOS R.jpg",
    name: "EOS R RF",
    lens: "24-105 F4-7.1 IS STM",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS R/index.html",
  },

  {
    id: 15,
    img: "./assets/images/eos dslr/EOS-R6.jpg",
    name: "EOS R6",
    lens: "body only",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS R6/index.html",
  },

  {
    id: 16,
    img: "./assets/images/eos dslr/EOS-R5.jpg",
    name: "EOS R5",
    lens: "body only",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS R5/index.html",
  },

  {
    id: 17,
    img: "./assets/images/eos dslr/EOS-R3.jpg",
    name: "EOS R3",
    lens: "body only",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon EOS R3/index.html",
  },

  {
    id: 19,
    img: "./assets/images/eos dslr/LEGRIA HF R806.jpg",
    name: "Canon LEGRIA HF R806",
    lens: "body only",
    price: 2500,
    cart: false,
    quantity: 1,
    total: 0,
    type: "dslr",
    specificationlink: "./cam/dslr/Canon LEGRIA HF R806/index.html",
  },

  ///////////////////////////////////////////////////////////////COMPACT////////////////////////////////////////////////////////////////////////////

  {
    id: 20,
    img: "./assets/images/Compact/ixus-185-bk-frt-flipped-800x524.jpg",
    name: "IXUS 185",
    price: 249,
    color: "Black,Silver,red",
    cart: false,
    quantity: 1,
    href: "./compact/IXUS 185.html",
    total: 0,
    type: "compact",
    specificationlink: "./cam/copact/Canon PowerShot SX430 IS/index.html",
  },

  {
    id: 21,
    img: "./assets/images/Compact/PowerShot SX620.jpg",
    name: "POWERSHOT SX-620 HS",
    price: 129,
    color: "Black,red",
    cart: false,
    quantity: 1,
    href: "./compact/POWERSHOT SX-620.html",
    total: 0,
    type: "compact",
  },

  {
    id: 23,
    img: "./assets/images/Compact/PowerShot SX540 HS.jpg",
    name: "POWERSHOT SX540 HS",
    price: 199,
    cart: false,
    quantity: 1,
    href: "/kobolg/DSLR/PowerShot SX540 HS.html",
    total: 0,
    type: "compact",
  },

  {
    id: 24,
    img: "./assets/images/Compact/PowerShot-SX430.jpg",
    name: "POWERSHOT SX-430 IS BK",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },

  {
    id: 25,
    img: "./assets/images/Compact/PowerShot SX70 HS.jpg",
    name: "PowerShot SX70 HS",
    price: 499,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },

  {
    id: 26,
    img: "./assets/images/Compact/canon_powershot_g7_x_mark_iii.jpg",
    name: "POWERSHOT G7X MK-III",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "compact",
  },

  ///////////////////////////////////////////////////////////////ACCESSORIES////////////////////////////////////////////////////////////////////////////

  {
    id: 27,
    img: "./assets/images/ACCESSORIES/Canon RP-108  H-Capacity Paper.jpg",
    name: "Canon RP-108  H-Capacity Paper",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "accessories",
  },

  {
    id: 28,
    img: "./assets/images/ACCESSORIES/CAMERA MOUNT ADAP EF-EOS M.jpg",
    name: "CAMERA MOUNT ADAP EF-EOS M",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "accessories",
  },

  /////////////////////////////////////////////////////////////////////Lenses/////////////////////////////////////////////////////////////////////////////

  {
    id: 29,
    img: "./assets/images/lenses/50mm.jpg",
    name: "EF 50mm f/1.8 STM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 30,
    img: "./assets/images/lenses/EF 50mm f-1.4.jpg",
    name: "EF 50mm f/1.4 USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 31,
    img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
    name: "EF 50mm f/1.2L USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 32,
    img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
    name: "EF 85mm f/1.8 USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 33,
    img: "./assets/images/lenses/EF_50mm_f1.2L.jpg",
    name: "EF 85MM F/1.4L IS USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 34,
    img: "./assets/images/lenses/85mm.jpg",
    name: "EF 85mm f/1.2L II USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 35,
    img: "./assets/images/lenses/100mm-macro.jpg",
    name: "EF 100mm f/2.8L Macro IS USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 36,
    img: "./assets/images/lenses/EF-16-35mm.jpg",
    name: "EF 16-35mm f/2.8L III USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 37,
    img: "./assets/images/lenses/ef-24-70mm-f2.8L-II.jpg",
    name: "EF 24-70mm f/2.8L II USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 38,
    img: "./assets/images/lenses/70-200mm.jpg",
    name: "EF 70-200mm f/2.8L IS III USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  {
    id: 39,
    img: "./assets/images/lenses/400mm.jpg",
    name: "EF 400MM F/2.8L IS III USM",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Lenses",
  },

  /////////////////////////////////////////////////////////////////////Printers/////////////////////////////////////////////////////////////////////////////

  {
    id: 40,
    img: "./assets/images/Printers/selphy-cp-1300-bk-frt_810x475.jpg",
    name: "SELPHY CP-1300",
    color: "black,white,pink",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 41,
    img: "./assets/images/Printers/Canon PIXMA MG2540.jpg",
    name: "PIXMA MG-2540S ",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 42,
    img: "./assets/images/Printers/pixma_ts3140-bk-fra_3dee65c7e1df4e208499df5a373e62d8.webp",
    name: "PIXMA TS-3140 ",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 43,
    img: "./assets/images/Printers/pixma-g3420-frt-04_gallery_bc252724311948fdb39b941dd900bfee.webp",
    name: "PIXMA G3420 Wifi ",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 44,
    img: "./assets/images/Printers/pixma-ix6850-frt_5bc8618a37e148108abf85e838027835.webp",
    name: "PIXMA iX6840",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 45,
    img: "./assets/images/Printers/pixma-tr150-eur-fra-01_c2cebf5c3e8742e5b85bf05dd314de37.webp",
    name: "PIXMA TR-150 with battery",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 46,
    img: "./assets/images/Printers/maxify_mb2140-frt_bd38c38073694f119013d71b642dbd1c.webp",
    name: "MAXIFY MB2140",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },

  {
    id: 47,
    img: "./assets/images/Printers/i-SENSYS MF640 Series-hero_810x475-50c969d8-190f-4f36-9587-be37fa8a83b7.jpg",
    name: "i-SENSYS MF-643Cdw",
    price: 299,
    cart: false,
    quantity: 1,
    total: 0,
    type: "Printers",
  },
];

var filterdslr = products.filter(function (product) {
  return product.type == "dslr";
});

var filtercompact = products.filter(function (product) {
  return product.type == "compact";
});

var filteraccessories = products.filter(function (product) {
  return product.type == "accessories";
});

var filterPrinters = products.filter(function (product) {
  return product.type == "Printers";
});

var filterLenses = products.filter(function (product) {
  return product.type == "Lenses";
});

const db = getDatabase();

function buy() {
  var productsFirebase = [];
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      var product = {
        name: products[index].name,
        price: products[index].price,
        quantity: products[index].quantity,
        total: products[index].total,
      };
      productsFirebase.push(product);
    }
  }
  set(ref(db, "order/"), {
    total: total(),
    products: productsFirebase,
  });
  Swal.fire({
    type: "success",
    title: "Success",
    text: "Operation Completed!",
  });
  clean();
}

function total() {
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].cart) {
      total += products[index].total;
    }
  }
  return total;
}

var con = 0;

var con2 = [];
//POSITION AT TABLE

function clean() {
  for (let index = 0; index < products.length; index++) {
    products[index].total = 0;
    products[index].quantity = 1;
    products[index].cart = false;
    con2 = [];
    updateCart();
  }
}

function add(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id != id || products[index].cart == true) {
    } else {
      products[index].cart = true;
      con2.push(products[index]);
      localStorage.setItem("cartItems", JSON.stringify(con2));

      con++;
      var total = (products[index].total =
        products[index].price * products[index].quantity);
      total;
      localStorage.setItem("total", JSON.stringify(total));
    }
  }

  document.getElementById("total").innerHTML = `
   <tr>
   <th scope="row"></th>
   <td></td>
   <td></td>
   <td></td>
   <td>
       <h4>Total:</h4>
   </td>
   <td>$ ${total()}.00</td>
    </tr>
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
 
    </td>
    <td>
      <button onclick="buy()"class="btn btn-success">Buy</button>
    </td>
     </tr>
   `;
}

window.add = add;

window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;

function updateCart() {
  con = 0;
  var totalTable = 0;
  document.getElementById("cartItems").innerHTML = "";
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {
        document.getElementById("cartItems").innerHTML += `
            <tr>
           <th scope="row">${con + 1}</th>
       
           <td><img style="width: 5rem;" src="${products[index3].img}" ></td>
           <td>${products[index3].name}</td>
           <td>
           <button class="btn btn-primary" onclick="reduceAmount(${
             products[index3].id
           })">-</button>
           <input style="width: 2rem;" id="input${
             products[index3].id
           }" value="${products[index3].quantity}" disabled>
           <button class="btn btn-primary" onclick="addAmount(${
             products[index3].id
           })" >+</button>
           </td>
           <td>$ ${products[index3].price * products[index3].quantity}.00</td>
            </tr>
           `;
        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }
  if (total() == 0) {
    document.getElementById("total").innerHTML = "";
  } else {
    document.getElementById("total").innerHTML = `
    <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>
        <h4>Total:</h4>
    </td>
    <td>$ ${total(totalTable)}.00</td>
     </tr>
     <tr>
     <th scope="row"></th>
     <td></td>
     <td></td>
     <td></td>
     <td>

     </td>
     <td>
       <button onclick="buy()" class="btn btn-success">Buy</button>
     </td>
      </tr>
    `;
  }
}

function reduceAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 1) {
        products[index].quantity = products[index].quantity - 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}

function addAmount(id) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id == id) {
      if (products[index].quantity > 0) {
        products[index].quantity = products[index].quantity + 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}

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
    acc += `<p data-product-id="${element.id}" style="border: 1px solid red,padding: 4px">
            ${element.name}
        </p>`;
    return acc;
  }, "");
});

searchResultsContainer.addEventListener("click", (e) => {
  const selectedProduct = products.find(
    (product) => product.id === Number(e.target.dataset.productId)
  );
  const saveditem = localStorage.setItem("item-name", selectedProduct.name);
  const saveditem2 = localStorage.setItem("item-price", selectedProduct.price);
  const saveditem3 = localStorage.setItem("item-img", selectedProduct.img);
  const saveditem4 = localStorage.setItem("item-info", selectedProduct.infp);
  const saveditem5 = localStorage.setItem(
    "item-des",
    selectedProduct.specificationlink
  );
  // localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  window.location.href = "./single-product.html";
});

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

const accessoriesitems = document.getElementById("accessories");

accessoriesitems.addEventListener("click", function (e) {
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


for (let index = 0; index < products.length; index++) {
  document.getElementById(products[index].id).onclick = () => {
    var name = products[index].name;
    var price = products[index].price;
    var quentity = products[index].quantity;
    var id = products[index].id;
    var cart_status = products[index].cart;
    var total_items_price = products[index].total;
    var img = products[index].img;
    var info = products[index].info;
    localStorage.setItem("item-name", name);
    localStorage.setItem("item-price", price);
    localStorage.setItem("item-total", total_items_price);
    localStorage.setItem("item-quentity", quentity);
    localStorage.setItem("item-cart_status", cart_status);
    localStorage.setItem("item-id", id);
    localStorage.setItem("item-img", img);
    localStorage.setItem("item-info", info);
  };
}
