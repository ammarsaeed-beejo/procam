// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase cartItems that you want to use
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

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const total = JSON.parse(localStorage.getItem("total"));

const db = getDatabase();

function buy() {
  var cartItemsFirebase = [];
  for (let index = 0; index < cartItems.length; index++) {
    if (cartItems[index].cart) {
      var product = {
        name: cartItems[index].name,
        price: cartItems[index].price,
        quantity: cartItems[index].quantity,
        total: cartItems[index].total,
      };
      cartItemsFirebase.push(product);
    }
  }
  set(ref(db, "order/"), {
    total: total(),
    cartItems: cartItemsFirebase,
  });
  Swal.fire({
    type: "success",
    title: "Success",
    text: "Operation Completed!",
  });
  clean();
}

// function total() {
//     let total = 0;
//     for (let index = 0; index < cartItems.length; index++) {
//         if (cartItems[index].cart) {
//             total += cartItems[index].total;
//         }
//     }
//     return total;
// }

var con = 0;

var con2 = [];
//POSITION AT TABLE

function clean() {
  for (let index = 0; index < cartItems.length; index++) {
    cartItems[index].total = 0;
    cartItems[index].quantity = 1;
    cartItems[index].cart = false;
    con2 = [];
    updateCart();
  }
}

window.remove = remove;
window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;

function remove(id) {
  // for (let index = 0; index < products.length; index++) {
  //     if (products[index].id == id) {
  //         products[index].cart = false;
  //         products[index].total = 0;
  //         products[index].quantity = 1;
  //         total();
  var myItem = JSON.parse(localStorage.getItem("cartItems"));
  var filter = myItem.filter((Item) => Item.id != id);
  localStorage.setItem("cartItems", JSON.stringify(filter));
  console.log(id);
  console.log(filter);
  //         for (let index2 = 0; index2 < con2.length; index2++) {
  //             if (products[index].id == con2[index2]) {
  //                 con2.splice(index2, 1);
  //             } else {
  //             }
  //         }

  //         updateCart();
  //     } else {
  //         updateCart();
  //     }
  // }
}

function updateCart() {
  con = 0;
  var totalTable = 0;
  document.getElementById("cartItems").innerHTML = "";
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < cartItems.length; index3++) {
      if (position == cartItems[index3].id) {
        document.getElementById("cartItems").innerHTML += `
            <tr>
           <th scope="row">${con + 1}</th>
           <td><button class="btn btn-danger" onclick="remove(${cartItems[index3].id
          })">X</button></td>
           <td><img style="width: 5rem;" src="${cartItems[index3].img}" ></td>
           <td>${cartItems[index3].name}</td>
           <td>
           <button class="btn btn-primary" onclick="reduceAmount(${cartItems[index3].id
          })">-</button>
           <input style="width: 2rem;" id="input${cartItems[index3].id
          }" value="${cartItems[index3].quantity}" disabled>
           <button class="btn btn-primary" onclick="addAmount(${cartItems[index3].id
          })" >+</button>
           </td>
           <td>$ ${cartItems[index3].price * cartItems[index3].quantity}.00</td>
            </tr>
           `;
        cartItems[index3].total =
          cartItems[index3].price * cartItems[index3].quantity;
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
  for (let index = 0; index < cartItems.length; index++) {
    if (cartItems[index].id == id) {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity = cartItems[index].quantity - 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}

function addAmount(id) {
  for (let index = 0; index < cartItems.length; index++) {
    if (cartItems[index].id == id) {
      if (cartItems[index].quantity > 0) {
        cartItems[index].quantity = cartItems[index].quantity + 1;
        updateCart();
      } else {
      }
    } else {
    }
  }
}
for (let index = 0; index < cartItems.length; index++) {
  console.log(cartItems);
  document.getElementById("cart_Items").innerHTML += `
    
        <tr class="kobolg-cart-form__cart-item cart_item">
                                            <div class="product-remove">
                                                <button  class="remove" aria-label="Remove this item" onclick="remove(${cartItems[index].id})">×</bu>
                                            </dic>
                                            <td class="product-thumbnail">
                                                <a href="#">
                                                    <img class="img-responsive" src="${cartItems[index].img}"  width="600" height="600   ">
                                                </a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <h3 class="product-name product_title">
                                                    <a href="#" tabindex="0">${cartItems[index].name}</a>
                                                </h3>
                                            </td>
                                            <td class="product-price" data-title="Price">
                                                <span class="price"><span class="kobolg-Price-amount amount"><span
                                                class="kobolg-Price-currencySymbol">$</span>${cartItems[index].price}</span></span>
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
                                            </td>
                                        </tr>
                                        
        
        
        `;
}