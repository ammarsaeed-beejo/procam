
var item_name = localStorage.getItem('item-name');
var item_price = localStorage.getItem('item-price');

document.getElementById('title').innerText = item_name;
document.getElementById('price').innerText = item_price;
