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
                                        </a>
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
                                                    <span class="kobolg-Price-currencySymbol" style="color: rgb(114, 114, 114);">jd</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </li>`;

    document.getElementById(products.id).
                        
return acc;
}, "");
