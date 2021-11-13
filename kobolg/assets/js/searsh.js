var products = [

    {  
        name: "IXUS 185",    
    },

    {      
        name: "POWERSHOT SX-620 HS",  
    },

    {
        name: "POWERSHOT SX540 HS",     
    },

    {
        name: "POWERSHOT SX-430 IS BK",
    },


    {
        name: "PowerShot SX70 HS",
    },

    {
        name: "PowerShot G7X MK-III",
    },







];

const searchInpot = document.getElementById('searchinput');

const list = document.getElementById('listdata');

function setList(group) {
    clearList();
    for (const cam of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(cam.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('no results found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.statsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    }
}

searchInpot.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(products.filter(cam => {
            return cam.name.includes(value);
        }).sort((camA, camB) => {
            return getRelevancy(camB.name, value) - getRelevancy(camA.name, value);
        }));
    } else {
        clearList();
    }
   
})