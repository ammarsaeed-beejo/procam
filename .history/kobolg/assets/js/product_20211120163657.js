const maproductulin = document.getElementById("productul");
const localStorageData = JSON.parse(localStorage.getItem("filteredItems"));
const adam = products;

maproductulin.innerHTML = localStorageData.reduce((acc, productas) => {
  acc += `
    <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
                                    id="${productas.index}"
                                    data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
                                <div class="product-inner tooltip-left" >
                                    <div class="product-thumb">
                                            
                                            <a href="./single-product.html">


                                            <img class="img-responsive" src="${products.img}"
                                                width="600" height="778">
                                        </a>
                                    </div>
                                    <div class="product-info equal-elem">
                                        <h3 class="product-name product_title">
                                            <a href="#">${productas.name}</a>
                                        </h3>
                                        <span class="price">
                                            <span class="kobolg-Price-amount amount">
                                                <span>
                                                    <span class="kobolg-Price-amount amount">
                                                        ${products.price}
                                                    </span>
                                                    <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </li>
  `
  return acc;
}, "")


for (let index = 0; index < adam.length; index++) {
  document.getElementById(adam.id).onclick = () => {
    var name = adam[index].name;
    var price = adam[index].price;
    var quentity = adam[index].quantity;
    var id = adam[index].id;
    var cart_status = adam[index].cart;
    var total_items_price = adam[index].total;
    var img = adam[index].img;
    var info = adam[index].info;
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
