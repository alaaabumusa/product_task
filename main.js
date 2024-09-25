var productForm = document.querySelector(".productForm");
var nameInput = document.querySelector("#name");
var decInput = document.querySelector("#description");
var priceInput = document.querySelector("#price");

var product = [];



productForm.onsubmit = function(e){
    e.preventDefault();

    var productItem = {
        name: nameInput.value,
        description: decInput.value,
        price: priceInput.value
    };

    product.push(productItem);
    
    console.log(product);
     
    printData();
};


function printData(){
    var data = ``;
    for(var i=0; i<product.length; i++){
        data += `<tr>
                    <td>${product[i].name}</td>
                    <td>${product[i].description}</td>
                    <td>${product[i].price}</td>
                </tr>`;
    
}

document.querySelector("tbody").innerHTML = data;
};
