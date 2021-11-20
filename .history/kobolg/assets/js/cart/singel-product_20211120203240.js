var item_name = localStorage.getItem("item-name");
var item_price = localStorage.getItem("item-price");
var item_quentity = localStorage.getItem("item-quentity");
var item_id = localStorage.getItem("item-id");
var item_cart_status = localStorage.getItem("item-cart_status");
var item_img = localStorage.getItem("item-img");
var item_total_price = localStorage.getItem("item-total");

document.getElementById("title").innerText = item_name;
document.getElementById("price").innerText = item_price;

document.getElementById("img").innerHTML = `
    <img style="width: 90%;" alt="img"
        src="${item_img}">
`;

document.getElementById("specification").innerHTML

var products = [
  {
    id: item_id,
    img: item_img,
    name: item_name,
    price: item_price,
    cart: item_cart_status,
    quantity: item_quentity,
    total: item_total_price,
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
      console.log(con2);
    }
  }

  
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

document.getElementById("add-button-container").innerHTML += `<button
                                            onclick="add(${item_id})"
                                            type="submit" id="add" class="single_add_to_cart_button button alt kobolg-variation-selection-needed">
                                                Add to cart
                                            </button>`;
