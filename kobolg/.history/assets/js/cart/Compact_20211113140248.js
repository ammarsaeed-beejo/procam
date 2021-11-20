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

    {
        id: 1,
        img: "./assets/images/Compact/ixus-185-bk-frt-flipped-800x524.jpg",
        name: "IXUS 185",
        price: 249,
        color: "Black,Silver,red",
        cart: false,
        quantity: 1,
        href: "./compact/IXUS 185.html",
        total: 0,
    },

    {
        id: 2,
        img: "./assets/images/Compact/PowerShot SX620.jpg",
        name: "POWERSHOT SX-620 HS",
        price: 129,
        color: "Black,red",
        cart: false,
        quantity: 1,
        href: "./compact/POWERSHOT SX-620.html",
        total: 0,
    },

    {
        id: 3,
        img: "./assets/images/Compact/PowerShot SX540 HS.jpg",
        name: "POWERSHOT SX540 HS",
        price: 199,
        cart: false,
        quantity: 1,
        href: "/kobolg/DSLR/PowerShot SX540 HS.html",
        total: 0,
    },

    {
        id: 4,
        img: "./assets/images/Compact/PowerShot-SX430.jpg",
        name: "POWERSHOT SX-430 IS BK",
        price: 299,
        cart: false,
        quantity: 1,
        href: "/kobolg/DSLR/POWERSHOT SX-430 IS BK.html",
        total: 0,
    },


    {
        id: 5,
        img: "./assets/images/Compact/PowerShot SX70 HS.jpg",
        name: "PowerShot SX70 HS",
        price: 499,
        cart: false,
        quantity: 1,
        href: "/kobolg/DSLR/PowerShot SX70 HS.html",
        total: 0,
    },

    {
        id: 6,
        img: "./assets/images/Compact/canon_powershot_g7_x_mark_iii.jpg",
        name: "PowerShot G7X MK-III",
        price: 299,
        cart: false,
        quantity: 1,
        href: "/kobolg/DSLR/PowerShot G7X MK-III.html",
        total: 0,
    },







];



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

for (let index = 0; index < products.length; index++) {
    document.getElementById('Compact').innerHTML += `
                                    <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
                                    id="item"
                                    data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
                                <div class="product-inner tooltip-left" >
                                    <div class="product-thumb">
                                        <a class="thumb-link" href="${products[index].href}">
                                            <img class="img-responsive" src="${products[index].img}"
                                                width="600" height="778">
                                        </a>

                                    </div>
                                    <div class="product-info equal-elem">
                                        <h3 class="product-name product_title">
                                            <a href="#">${products[index].name}</a>
                                        </h3>


                                        <span class="price">
                                            <span class="kobolg-Price-amount amount">
                                                <span>
                                                    <span class="kobolg-Price-amount amount">
                                                        ${products[index].price}
                                                    </span>
                                                    <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </li>`;

    document.getElementById("item").onclick = () => {
        var name = products[index].name;
        var price = products[index].price;
        localStorage.setItem('item-name', name);
        localStorage.setItem('item-price', price);
    };
}
