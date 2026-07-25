"use strict"

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productDescription = document.getElementById("productDescription");
let addBtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let searchInput = document.getElementById("searchInput");

let products = [];
let currentIndex;


if(localStorage.getItem("products") != null){
    products = JSON.parse(localStorage.getItem("products"));
    displayProducts();
}

// Add Product
addBtn.onclick = function(){

    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

    clearForm();
}

function displayProducts(){

    let cartona = "";

    for(let i=0;i<products.length;i++){

        cartona += `
        <tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].description}</td>

            <td>
                <button onclick="setUpdate(${i})"
                class="btn btn-warning btn-sm">
                Update
                </button>
            </td>

            <td>
                <button onclick="deleteProduct(${i})"
                class="btn btn-danger btn-sm">
                Delete
                </button>
            </td>

        </tr>
        `;
    }

    document.getElementById("tableBody").innerHTML = cartona;
}


function clearForm(){

    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
}


function deleteProduct(index){

    products.splice(index,1);

    localStorage.setItem("products",JSON.stringify(products));

    displayProducts();
}


searchInput.onkeyup = function(){

    let cartona="";

    for(let i=0;i<products.length;i++){

        if(products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())){

            cartona+=`
            <tr>
                <td>${i+1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].category}</td>
                <td>${products[i].description}</td>

                <td>
                    <button onclick="setUpdate(${i})"
                    class="btn btn-warning btn-sm">
                    Update
                    </button>
                </td>

                <td>
                    <button onclick="deleteProduct(${i})"
                    class="btn btn-danger btn-sm">
                    Delete
                    </button>
                </td>

            </tr>
            `;
        }
    }

    document.getElementById("tableBody").innerHTML=cartona;

}


function setUpdate(index){

    currentIndex=index;

    productName.value=products[index].name;
    productPrice.value=products[index].price;
    productCategory.value=products[index].category;
    productDescription.value=products[index].description;

    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");

}


updateBtn.onclick=function(){

    products[currentIndex]={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        description:productDescription.value
    }

    localStorage.setItem("products",JSON.stringify(products));

    displayProducts();

    clearForm();

    updateBtn.classList.add("d-none");
    addBtn.classList.remove("d-none");
}