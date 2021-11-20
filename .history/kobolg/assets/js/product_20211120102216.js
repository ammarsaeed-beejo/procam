const maproductulin = document.getElementById("main");
const localStorageData = JSON.parse(localStorage.getItem("filteredItems"));

main.innerHTML = localStorageData.reduce((acc, item) => {
  acc += `
  <div>
    <h2>${item.type}</h2>
    <h3>${item.price}</h3>
    <h4>${item.color}</h4>
    <img src="${item.image}" />
  </div>
  `
  return acc;
}, "")