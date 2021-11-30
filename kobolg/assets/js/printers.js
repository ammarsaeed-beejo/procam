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

    {
        id: 49,
        img: "./assets/images/Printers/6921u-mf237w-frt_810x475.jpg",
        name: "i-SENSYS MF237w",
        price: 299,
        cart: false,
        quantity: 1,
        total: 0,
        type: "Printers",
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

    document.getElementById('Printers').innerHTML += `
                                    <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
                                    id="${products[index].id}"
                                    data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
                                <div class="product-inner tooltip-left" >
                                    <div class="product-thumb">
                                            
                                            <a href="./single-product.html">


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


}

for (let index = 0; index < products.length; index++) {
    document.getElementById(products[index].id).onclick = () => {
        var name = products[index].name;
        var price = products[index].price;
        var quentity = products[index].quantity;
        var id = products[index].id;
        var cart_status = products[index].cart;
        var total_items_price = products[index].total;
        var img = products[index].img;
        localStorage.setItem('item-name', name);
        localStorage.setItem('item-price', price);
        localStorage.setItem('item-total', total_items_price);
        localStorage.setItem('item-quentity', quentity);
        localStorage.setItem('item-cart_status', cart_status);
        localStorage.setItem('item-id', id);
        localStorage.setItem('item-img', img);
    };

}


const searchField = document.querySelector('#searchinput');
const searchResultsContainer = document.querySelector('#searchresult');

searchField.addEventListener('input', (e) => {

    // if input field is empty, clear the search results
    if (e.target.value === '') {
        searchResultsContainer.innerHTML = '';
        return;
    }

    // filter the products array
    const searchResults = products.filter(meal => {
        return meal.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    // before displaying the search results, clear the search results div
    searchResultsContainer.innerHTML = '';

    // display the names of the meal objects that include the text entered in input field
    searchResults.forEach((element, index) => {
        const p = document.createElement('p');
        p.textContent = element.name;
        searchResultsContainer.appendChild(p);
    });
});
