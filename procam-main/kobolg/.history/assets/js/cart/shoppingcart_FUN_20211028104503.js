// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwDLNDUINuCDZckS5C1M-I-9ia7ZoKIsw",
    authDomain: "pro-cam-web.firebaseapp.com",
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
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 2,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 3,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 4,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 5,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 6,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
    {
        id: 7,
        img: "./assets/images/esp1.png",
        name: "Canon eos R3",
        price: 1100,
        cart: false,
        quantity: 1,
        total: 0,
    },
];

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
    firebase.database().ref("cart").push({
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
            con2.push(products[index].id);
            console.log(con2);
            document.getElementById("products").innerHTML += `
                    <div class="datainfo">
                    <img class="img" src="../img/eos-r3-frt_product-gallery_01_d335ac51fa87456f97b6d9cd3b802401.webp">
                    <div class="info">
                        <h4 style="margin-bottom:20px; margin-top:20px;">canon eos r3</h4>
                        <h4>color:black</h4>
                    </div>
                    <div class="Quantity">
                        <input type="number" id="quantity" name="quantity" min="1">
                    </div>
                    <div class="price">
                        <h4>4253<span>jd</span></h4>
                    </div>
                    <div class="total">
                        <h4>4253<span>jd</span></h4>
                    </div>
                </div>
    `;
            con++;
            products[index].total = products[index].price * products[index].quantity;
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

function remove(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            products[index].cart = false;
            products[index].total = 0;
            products[index].quantity = 1;
            total();
            for (let index2 = 0; index2 < con2.length; index2++) {
                if (products[index].id == con2[index2]) {
                    con2.splice(index2, 1);
                    console.log(con2);
                } else {
                }
            }

            updateCart();
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    con = 0;
    var totalTable = 0;
    document.getElementById("products").innerHTML = "";
    for (let index = 0; index < con2.length; index++) {
        var position = con2[index];
        for (let index3 = 0; index3 < products.length; index3++) {
            if (position == products[index3].id) {
                console.log("ENCONTRADO: " + position + "  " + products[index3].id);
                document.getElementById("products").innerHTML += `
            <tr>
           <th scope="row">${con + 1}</th>
           <td><button class="btn btn-danger" onclick="remove(${products[index3].id
                    })">X</button></td>
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

console.log("hi");


(() => {
    for (let index = 0; index < products.length; index++) {
        window.onloaddocument.getElementById("bastseller").innerHTML = `
        <div class="card m-2" style="width: 10rem;">
            <img src="${products[index].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${products[index].name}</h5>
                <p class="card-text">$ ${products[index].price}.00</p>
                <button class="btn btn-primary" onclick="add('${products[index].id}')">Add</button>
            </div>
        </div>`;
    }
})();
