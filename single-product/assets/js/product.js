const maproductulin = document.getElementById("productul");
const localStorageData = JSON.parse(localStorage.getItem("filteredItems"));

maproductulin.innerHTML = localStorageData.reduce((acc, products) => {
    acc += `
    <li  class="product-item wow fadeInUp product-item rows-space-30 col-bg-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-ts-6 style-01 post-24 product type-product status-publish has-post-thumbnail product_cat-chair product_cat-table product_cat-new-arrivals product_tag-light product_tag-hat product_tag-sock first instock featured shipping-taxable purchasable product-type-variable has-default-attributes"
                                    id="${products.id}"
                                    data-wow-duration="1s" data-wow-delay="0ms" data-wow="fadeInUp">
                                <div class="product-inner tooltip-left" >
                                    <div class="product-thumb">
                                            
                                        


                                            <img class="img-responsive" src="${products.img}"
                                                width="600" height="778">
                                        
                                    </div>
                                    <div class="product-info equal-elem">
                                        <h3 class="product-name product_title">
                                            <a href="#">${products.name}</a>
                                        </h3>


                                        <span class="price">
                                            <span class="kobolg-Price-amount amount">
                                                <span>
                                                    <span class="kobolg-Price-amount amount">
                                                        ${products.price}
                                                    </span>
                                                    </span>
                                                    <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
                                                </span>
                                                    <br>
                                                    <span>
                                                    ${products.lens}
                                               
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </li>
  `;



    for (let index = 0; index < products.length; index++) {
        document.getElementById(products.id).onclick = () => {
            var name = products.name;
            var price = products.price;
            var quentity = products.quantity;
            var id = products.id;
            var cart_status = products.cart;
            var total_items_price = products.total;
            var img = products.img;
            var info = products.info;
            var link = products.specificationlink;
            localStorage.setItem("item-name", name);
            localStorage.setItem("item-price", price);
            localStorage.setItem("item-total", total_items_price);
            localStorage.setItem("item-quentity", quentity);
            localStorage.setItem("item-cart_status", cart_status);
            localStorage.setItem("item-id", id);
            localStorage.setItem("item-img", img);
            localStorage.setItem("item-info", info);
            localStorage.setItem("item-specificationlink", specificationlink);
        };
    }
    return acc;
}, "");

maproductulin.addEventListener("click", (e) => {
    //console.log(e.target.classList.contains("product-item"))
    if (e.target.closest('.product-item')) {
        const productid = e.target.closest('.product-item').id
        const selecteditem = JSON.parse(localStorage.getItem("filteredItems")).find(item => item.id == productid)
        localStorage.setItem("selecteditem",JSON.stringify(selecteditem))
        window.location.href = "./single-product.html#"+productid
    }
})

