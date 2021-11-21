var item_name = localStorage.getItem("item-name");
var item_price = localStorage.getItem("item-price");
var item_quentity = localStorage.getItem("item-quentity");
var item_id = localStorage.getItem("item-id");
var item_cart_status = localStorage.getItem("item-cart_status");
var item_img = localStorage.getItem("item-img");
var item_total_price = localStorage.getItem("item-total");
var cartItemsString = localStorage.getItem("cartItems");
var con2 =
  cartItemsString != null && cartItemsString.length > 4
    ? JSON.parse(cartItemsString)
    : [];
var con = con2.length;

document.getElementById("title").innerText = item_name;
document.getElementById("price").innerText = item_price;
document.getElementById("img").innerHTML = `
    <img style="width: 90%;" alt="img"
        src="${item_img}">
`;

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
}

window.add = add;
window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;

function updateCart() {
  con = 0;
  var totalTable = 0;
  for (let index = 0; index < con2.length; index++) {
    var position = con2[index];
    for (let index3 = 0; index3 < products.length; index3++) {
      if (position == products[index3].id) {

        products[index3].total =
          products[index3].price * products[index3].quantity;
      } else {
      }
    }

    con = con + 1;
  }

}

function reduceAmount(id) {
  const Quen_input = document.getElementById("Quen_val");
  const current_item = products.find(product => product.id == id);
  if (current_item.quantity > 1) {
    current_item.quantity = current_item.quantity - 1;
    updateCart();
    localStorage.setItem("cartItems", JSON.stringify(current_item));
    console.log(current_item.quantity);
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
  const current_item = products.find(product => product.id == id);
  const Quen_localstorage = JSON.parse(localStorage.getItem("cartItems"));
  console.log(Quen_localstorage);


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

document.getElementById("add-button-container").innerHTML +=`<button
    onclick="add(${item_id})"
    type="button" class="single_add_to_cart_button button alt kobolg-variation-selection-needed">
    Add to cart
  </button>`;