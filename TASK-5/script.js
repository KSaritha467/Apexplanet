let reg=false;
let cart=[];
let orders=[];
let wishlist=[];

const products=[
{name:"Laptop",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"},
{name:"Shoes",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
{name:"Watch",img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"},
{name:"Mobile",img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"},
{name:"Bag",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"},

];

function toggle(){
reg=!reg;
document.getElementById("title").innerText=reg?"Register":"Login";
document.getElementById("switch").innerText=reg?"Already account":"Create Account";
}

function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;

if(reg){

localStorage.setItem(
"user",
JSON.stringify({email,pass})
);

alert("Registered Successfully");
return;
}

let u=JSON.parse(
localStorage.getItem("user")
);

if(u&&u.email===email&&u.pass===pass){

document.getElementById("auth")
.classList.add("hide");

document.getElementById("app")
.classList.remove("hide");

loadProducts();

}
else{

alert("Wrong Login");

}

}


function stars(){
return "⭐⭐⭐⭐⭐";
}

const productsDiv=
document.getElementById("products");

function loadProducts(){

productsDiv.innerHTML="";

products.forEach(p=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=

`<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<div class="star">${stars()}</div>
<span class="wish">❤️</span>
<button>Add Cart</button>`;

div.querySelector(".wish").onclick=()=>{

wishlist.push(p.name);
alert("Added Wishlist");

};

div.querySelector("button").onclick=()=>{

cart.push(p.name);

document.getElementById("badge")
.innerText=cart.length;

};

productsDiv.appendChild(div);

});

}


function page(id){

document.getElementById("home")
.classList.add("hide");

document.getElementById("cart")
.classList.add("hide");

document.getElementById("orders")
.classList.add("hide");

document.getElementById(id)
.classList.remove("hide");

if(id==="cart")renderCart();

if(id==="orders")renderOrders();

}


function renderCart(){

let cartItems=
document.getElementById("cartItems");

cartItems.innerHTML="";

cart.forEach((item,i)=>{

let div=document.createElement("div");

div.innerHTML=

`${item}
<button>Checkout</button>`;

div.querySelector("button").onclick=()=>{

orders.push(item);

cart.splice(i,1);

document.getElementById("badge")
.innerText=cart.length;

renderCart();

};

cartItems.appendChild(div);

});

}


function renderOrders(){

let orderList=
document.getElementById("orderList");

orderList.innerHTML="";

orders.forEach(o=>{

let li=document.createElement("li");

li.innerText=o;

orderList.appendChild(li);

});

}


function filter(){

let q=document
.getElementById("search")
.value.toLowerCase();

productsDiv.innerHTML="";

products

.filter(p=>
p.name.toLowerCase()
.includes(q))

.forEach(p=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=

`<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<button>Add Cart</button>`;

div.querySelector("button").onclick=()=>{

cart.push(p.name);

document.getElementById("badge")
.innerText=cart.length;

};

productsDiv.appendChild(div);

});

}


function dark(){

document.body
.classList.toggle("dark");

}

function logout(){

location.reload();

}