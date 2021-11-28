import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

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

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const total = JSON.parse(localStorage.getItem("total"));
console.log(localStorage.getItem("cartItems"));
const total_price = cartItems.reduce((total,item) => {
  total += item.price*item.quantity;
  return total;
},0);
console.log(total_price);

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

var con = 0;

var con2 = [];

function clean() {
  for (let index = 0; index < cartItems.length; index++) {
    cartItems[index].total = 0;
    cartItems[index].quantity = 1;
    cartItems[index].cart = false;
    con2 = [];
    updateCart();
  }
}

function remove(id) {
  var myItem = JSON.parse(localStorage.getItem("cartItems"));
  var filter = myItem.filter((Item) => Item.id != id);
  localStorage.setItem("cartItems", JSON.stringify(filter));
  console.log(id);
  console.log(filter);

}

function updateCart() {
  con = 0;
  var totalTable = 0;
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < cartItems.length; index3++) {
      if (position == cartItems[index3].id) {

        cartItems[index3].total =
          cartItems[index3].price * cartItems[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }

}

function reduceAmount(id) {
  const Quen_input = document.getElementById("Quen_val");
  const current_item = cartItems.find(cartItems => cartItems.id == id);
  if (current_item.quantity > 1) {
    current_item.quantity = current_item.quantity - 1;
    updateCart();
    localStorage.setItem("cartItems", JSON.stringify(current_item));
    Quen_input.value = current_item.quantity;
  } else {

  }
  // if (products[index].id == id) {
  // if (products[index].quantity > 1) {
  //   products[index].quantity = products[index].quantity - 1;
  //   console.log(products[index].quantity);
  //   updateCart();
  // } else {
  // }
  // } else {
  // }
}

function addAmount(id) {
  const Quen_input = document.getElementById("Quen_val");
  const current_item = cartItems.find(cartItems => cartItems.id == id);
  const Quen_localstorage = JSON.parse(localStorage.getItem("cartItems"));

  if (true) {
    current_item.quantity = Number(current_item.quantity) + 1;
    updateCart();
    localStorage.setItem("cartItems", JSON.stringify(current_item));
    Quen_input.value = current_item.quantity;
  } else {

  }
  // for (let index = 0; index < products.length; index++) {
  //   if (products[index].id == id) {
  //     if (products[index].quantity > 0) {
  //       products[index].quantity = products[index].quantity + 1;
  //       updateCart();
  //     } else {
  //     }
  //   } else {
  //   }
  // }
}

for (let index = 0; index < cartItems.length; index++) {
  document.getElementById("cart_Items").innerHTML += `
       
                                            <td class="product-remove">
                                                <button  class="remove" aria-label="Remove this item" onclick="remove(${cartItems[index].id})">×</button>
                                            </td>
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

                                                   <input type="text" data-step="1" min="1" max=""
                                                       name="quantity[25]" value="1" title="Qty" id="quentity"
                                                       class="input-qty input-text qty text" size="4"
                                                       pattern="[0-9]*" inputmode="numeric">
                                                   <a class="btn-number qtyplus quantity-plus" href="#">+</a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="kobolg-Price-amount amount"><span
                                                        class="kobolg-Price-currencySymbol">$</span>150.00</span>
                                            </td>
                                        <br>
        `;
      
document.getElementById("quentity").value = cartItems[index].quantity;
}


document.getElementById("order-total").innerHTML = `
  <th>Total</th>
                                                <td data-title="Total"><strong><span
                                                            class="kobolg-Price-amount amount"><span
                                                                class="kobolg-Price-currencySymbol">$</span>${total_price}</span></strong>
                                                </td>

`;

window.remove = remove;
window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;