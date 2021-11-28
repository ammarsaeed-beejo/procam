let cartItemsString = localStorage.getItem("cartItems");
var con2 =
  cartItemsString != null && cartItemsString.length > 4
    ? JSON.parse(cartItemsString)
    : [];

var con = con2.length;
const product = JSON.parse(localStorage.getItem("selecteditem"))
console.log(product);

var products = [
  {
    id: product.id,
    img: product.img,
    name: product.name,
    price: product.price,
    cart: product.cart_status,
    quantity: product.quentity,
    total: product.total_price,
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
  // if (products[index].id != id || products[index].cart == true) {
  //   } else {
  //     products[index].cart = true;
  //     console.log(con2);
  //     con2.push(products[index]);
  //     localStorage.setItem("cartItems", JSON.stringify(con2));
  //     con++;
  //     var total = (products[index].total =
  //       products[index].price * products[index].quantity);
  //     total;
  //     localStorage.setItem("total", JSON.stringify(total));
  //   }
  
  const addedItem = products.find((findproduct) => findproduct.id == id);
  const quantityVal = document.getElementById("quentity").value;
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))
  addedItem.quantity = Number(quantityVal);
  console.log(cartItems);
  if (cartItems == null) {
    console.log("true");
    localStorage.setItem("cartItems", JSON.stringify([addedItem]));
  } else {
    if (cartItems.some(item => item.id == addedItem.id)) {
      const filterdItems = cartItems.filter(item => item.id != addedItem.id);
      localStorage.setItem("cartItems", JSON.stringify([...filterdItems, addedItem]));
    } else {
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, addedItem]));
    }
  }
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

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


document.getElementById("add-button-container").innerHTML += `<button
    onclick="add(${product.id})"
    type="button" class="single_add_to_cart_button button alt kobolg-variation-selection-needed">
    Add to cart
  </button>`;

document.getElementById("title").innerText = product.name;
document.getElementById("price").innerText = product.price;
document.getElementById("img").innerHTML = `
    <img style="width: 90%;" alt="img"
        src="${product.img}">
`
document.getElementById("specification").innerHTML = `
<a href="${product.specificationlink}"></a>
`
window.add = add;
window.reduceAmount = reduceAmount;
window.addAmount = addAmount;
window.buy = buy;

