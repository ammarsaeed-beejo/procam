// // Import the functions you need from the SDKs you need  
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCwDLNDUINuCDZckS5C1M-I-9ia7ZoKIsw",
//     authDomain: "pro-cam-web.firebaseapp.com",
//     databaseURL: "https://pro-cam-web-default-rtdb.firebaseio.com",
//     projectId: "pro-cam-web",
//     storageBucket: "pro-cam-web.appspot.com",
//     messagingSenderId: "1043601014942",
//     appId: "1:1043601014942:web:c4608e15cdafb23fb3bb8f",
//     measurementId: "G-L8XZNC95BJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);






// const db = getDatabase();

// function buy() {
//     var productsFirebase = [];
//     for (let index = 0; index < products.length; index++) {
//         if (products[index].cart) {
//             var product = {
//                 name: products[index].name,
//                 price: products[index].price,
//                 quantity: products[index].quantity,
//                 total: products[index].total,
//             };
//             productsFirebase.push(product);
//         }
//     }
//     set(ref(db, 'order/'), {
//         total: total(),
//         products: productsFirebase,
//     });
//     Swal.fire({
//         type: "success",
//         title: "Success",
//         text: "Operation Completed!",
//     });
//     clean();
// }

// function total() {
//     let total = 0;
//     for (let index = 0; index < products.length; index++) {
//         if (products[index].cart) {
//             total += products[index].total;
//         }
//     }
//     return total;
// }


// var con = 0;

// var con2 = [];
// //POSITION AT TABLE

// function clean() {
//     for (let index = 0; index < products.length; index++) {
//         products[index].total = 0;
//         products[index].quantity = 1;
//         products[index].cart = false;
//         con2 = [];
//         updateCart();
//     }
// }


// function add(id) {
//     for (let index = 0; index < products.length; index++) {
//         if (products[index].id != id || products[index].cart == true) {
//         } else {
//             products[index].cart = true;
//             con2.push(products[index]);
//             localStorage.setItem("cartItems", JSON.stringify(con2));
//             document.getElementById("cart_Items").innerHTML += `
//             <td class="product-btn btn-primary">
//                                                 <a href="#" class="remove" aria-label="Remove this item"
//                                                     data-product_id="27" data-product_sku="885B712">×</a>
//                                             </td>
//                                             <td class="product-thumbnail">
//                                                 <a href="#"><img src= "${products[index].img}"
//                                                         class="attachment-kobolg_thumbnail size-kobolg_thumbnail"
//                                                         alt="img" width="600" height="778"></a>
//                                             </td>
//                                             <td class="product-name" data-title="Product">
//                                                 <a href="#">${products[index].name}</a>
//                                             </td>
//                                             <td class="product-price" data-title="Price">
//                                                 <span class="kobolg-Price-amount amount"><span
//                                                         class="kobolg-Price-currencySymbol">$</span>150.00</span>
//                                             </td>
//                                             <td class="product-quantity" data-title="Quantity">
//                                                 <div class="quantity">
//                                                     <span class="qty-label">Quantiy:</span>
//                                                     <div class="control">
//                                                         <a class="btn-number qtyminus quantity-minus" href="#">-</a>
//                                                         <input type="text" value="1" title="Qty"
//                                                             class="input-qty input-text qty text">
//                                                         <a class="btn-number qtyplus quantity-plus" href="#">+</a>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td class="product-subtotal" data-title="Total">
//                                                 <span class="kobolg-Price-amount amount"><span
//                                                         class="kobolg-Price-currencySymbol">$</span>150.00</span>
//                                             </td>`;
//             con++;
//             var total = products[index].total = products[index].price * products[index].quantity;
//             total;
//             localStorage.setItem("total", JSON.stringify(total));
//         }
//     }

//     document.getElementById("total").innerHTML = `
//    <tr>
//    <th scope="row"></th>
//    <td></td>
//    <td></td>
//    <td></td>
//    <td>
//        <h4>Total:</h4>
//    </td>
//    <td>$ ${total()}.00</td>
//     </tr>
//     <tr>
//     <th scope="row"></th>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td>

//     </td>
//     <td>
//       <button onclick="buy()"class="btn btn-success">Buy</button>
//     </td>
//      </tr>
//    `;


// }

// window.add = add;

// window.reduceAmount = reduceAmount;
// window.addAmount = addAmount;
// window.buy = buy;


// function updateCart() {
//     con = 0;
//     var totalTable = 0;
//     document.getElementById("cartItems").innerHTML = "";
//     for (let index = 0; index < con2.length; index++) {
//         var position = con2[index];
//         for (let index3 = 0; index3 < products.length; index3++) {
//             if (position == products[index3].id) {
//                 document.getElementById("cartItems").innerHTML += `
//             <tr>
//            <th scope="row">${con + 1}</th>

//            <td><img style="width: 5rem;" src="${products[index3].img}" ></td>
//            <td>${products[index3].name}</td>
//            <td>
//            <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id
//                     })">-</button>
//            <input style="width: 2rem;" id="input${products[index3].id
//                     }" value="${products[index3].quantity}" disabled>
//            <button class="btn btn-primary" onclick="addAmount(${products[index3].id
//                     })" >+</button>
//            </td>
//            <td>$ ${products[index3].price * products[index3].quantity}.00</td>
//             </tr>
//            `;
//                 products[index3].total =
//                     products[index3].price * products[index3].quantity;
//             } else {
//             }
//         }

//         con = con + 1;
//     }
//     if (total() == 0) {
//         document.getElementById("total").innerHTML = "";
//     } else {
//         document.getElementById("total").innerHTML = `
//     <tr>
//     <th scope="row"></th>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td>
//         <h4>Total:</h4>
//     </td>
//     <td>$ ${total(totalTable)}.00</td>
//      </tr>
//      <tr>
//      <th scope="row"></th>
//      <td></td>
//      <td></td>
//      <td></td>
//      <td>

//      </td>
//      <td>
//        <button onclick="buy()" class="btn btn-success">Buy</button>
//      </td>
//       </tr>
//     `;
//     }
// }

// function reduceAmount(id) {
//     for (let index = 0; index < products.length; index++) {
//         if (products[index].id == id) {
//             if (products[index].quantity > 1) {
//                 products[index].quantity = products[index].quantity - 1;
//                 updateCart();
//             } else {
//             }
//         } else {
//         }
//     }
// }

// function addAmount(id) {
//     for (let index = 0; index < products.length; index++) {
//         if (products[index].id == id) {
//             if (products[index].quantity > 0) {
//                 products[index].quantity = products[index].quantity + 1;
//                 updateCart();
//             } else {
//             }
//         } else {
//         }
//     }
// }

// for (let index = 0; index < products.length; index++) {
//     document.getElementById('bestseller-dslrcam').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="#">
//                                             <img class="img-responsive" src="${products[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-elem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${products[index].name}</a>
//                                             <p style="font-size: 8pt; margin-top:3px;">${products[index].lens}</p>
//                                         </h3>

//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${products[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;

// }



// Import the functions you need from the SDKs you need


import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
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
    measurementId: "G-L8XZNC95BJ"
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
    },

    /////////////////////////////////////////////////////////////////COMPACT////////////////////////////////////////////////////////////////////////////

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


    /////////////////////////////////////////////////////////////////ACCESSORIES////////////////////////////////////////////////////////////////////////////

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

    ///////////////////////////////////////////////////////////////////////Lenses/////////////////////////////////////////////////////////////////////////////

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

    
  ///////////////////////////////////////////////////////////////////////Printers/////////////////////////////////////////////////////////////////////////////

    {
        id: 40,
        img: "./assets/images/Printers/selphy-cp-1300-bk-frt_810x475.webp",
        name: "SELPHY CP-1300",
        color:"black,white,pink",
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

    {
        id: 48,
        img: "./assets/images/Printers/i-SENSYS MF640 Series-hero_810x475-50c969d8-190f-4f36-9587-be37fa8a83b7.jpg",
        name: "i-SENSYS MF-643Cdw",
        price: 299,
        cart: false,
        quantity: 1,
        total: 0,
        type: "Printers",
    },

    


];

var filterdslr = products.filter(function (product) { return product.type == "dslr"; });

var filtercompact = products.filter(function (product) { return product.type == "compact"; });

var filteraccessories = products.filter(function (product) { return product.type == "accessories"; });

var filterPrinters = products.filter(function (product) { return product.type == "Printers"; });

var filterLenses = products.filter(function (product) { return product.type == "Lenses"; });









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
    set(ref(db, 'order/'), {
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
            document.getElementById("cart_Items").innerHTML += `
            <td class="product-btn btn-primary">
                                                <a href="#" class="remove" aria-label="Remove this item"
                                                    data-product_id="27" data-product_sku="885B712">×</a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src= "${products[index].img}"
                                                        class="attachment-kobolg_thumbnail size-kobolg_thumbnail"
                                                        alt="img" width="600" height="778"></a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="#">${products[index].name}</a>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="kobolg-Price-amount amount"><span
                                                        class="kobolg-Price-currencySymbol">$</span>150.00</span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <span class="qty-label">Quantiy:</span>
                                                    <div class="control">
                                                        <a class="btn-number qtyminus quantity-minus" href="#">-</a>
                                                        <input type="text" value="1" title="Qty"
                                                            class="input-qty input-text qty text">
                                                        <a class="btn-number qtyplus quantity-plus" href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="kobolg-Price-amount amount"><span
                                                        class="kobolg-Price-currencySymbol">$</span>150.00</span>
                                            </td>`;
            con++;
            var total = products[index].total = products[index].price * products[index].quantity;
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
           <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id
                    })">-</button>
           <input style="width: 2rem;" id="input${products[index3].id
                    }" value="${products[index3].quantity}" disabled>
           <button class="btn btn-primary" onclick="addAmount(${products[index3].id
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

// for (let index = 0; index < filterdslr.length; index++) {
//     document.getElementById('dslrcamera').onclick =
//     document.getElementById('dslrcam').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="${filterdslr[index].href}">
//                                             <img class="img-responsive" src="${filterdslr[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-Gelem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${filterdslr[index].name}</a>
//                                             <p  style="font-size: 8pt;">${filterdslr[index].lens}</p>
//                                         </h3>

//                                         <span class="price">
//                                              <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${filterdslr[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;
// }


// for (let index = 0; index < filtercompact.length; index++) {
//     // document.getElementById('dslrcamera').onclick =
//     document.getElementById('Compactul').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="${filtercompact[index].href}">
//                                             <img class="img-responsive" src="${filtercompact[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-Gelem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${filtercompact[index].name}</a>
//                                         </h3>

//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${filtercompact[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;

// }




// for (let index = 0; index < filteraccessories.length; index++) {
//     // document.getElementById('dslrcamera').onclick =
//     document.getElementById('accessories').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="${filteraccessories[index].href}">
//                                             <img class="img-responsive" src="${filteraccessories[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-Gelem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${filteraccessories[index].name}</a>
//                                         </h3>

//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${filteraccessories[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;

// }

// for (let index = 0; index < filterLenses.length; index++) {
//     // document.getElementById('dslrcamera').onclick =
//     document.getElementById('lenses').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="${filterLenses[index].href}">
//                                             <img class="img-responsive" src="${filterLenses[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-Gelem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${filterLenses[index].name}</a>
//                                         </h3>

//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${filterLenses[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;

// }

// for (let index = 0; index < filterPrinters.length; index++) {
//     // document.getElementById('dslrcamera').onclick =
//     document.getElementById('Printers').innerHTML += `
//                                     <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
//                                 data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
//                                 <div class="product-inner tooltip-left" >
//                                     <div class="product-thumb">
//                                         <a class="thumb-link" href="${filterPrinters[index].href}">
//                                             <img class="img-responsive" src="${filterPrinters[index].img}"
//                                                 width="600" height="778">
//                                         </a>

//                                     </div>
//                                     <div class="product-info equal-Gelem">
//                                         <h3 class="product-name product_title">
//                                             <a href="#">${filterPrinters[index].name}</a>
//                                         </h3>

//                                         <span class="price">
//                                             <span class="kobolg-Price-amount amount">
//                                                 <span>
//                                                     <span class="kobolg-Price-amount amount">
//                                                         ${filterPrinters[index].price}
//                                                     </span>
//                                                     <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
//                                                 </span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </li>`;

// }


const dslr = document.querySelector(".dslr");


dslr.addEventListener("click", function (e) {
    
    const dslrtype = products.filter(products => products.type == e.currentTarget.dataset.type)
    
    // console.log(e.target.closest(dslr.dataset))
    // console.log(e.currentTarget.dataset.type)
    console.log(dslrtype)
    // localStorage.setItem("filteredProduct", dslr)

    localStorage.setItem("filteredProduct", JSON.stringify(dslrtype));


    window.location.href = "./EOS DSLR.html"
    renderproduct()
    
    
    const ul = document.getElementById("dslrcam")

    console.log(ul)

});



// const localStoragedata = localStorage.getItem("filteredProduct")

setTimeout

function renderproduct() {
    const localStoragedata = localStorage.getItem("filteredProduct")
    console.log(localStoragedata)
    const productul = document.getElementById("dslrcam");
    console.log(productul)
}

const localStoragedata = localStorage.getItem("filteredProduct")
console.log(localStoragedata)
const productul = document.getElementById("dslrcam");
console.log(productul)





