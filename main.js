let menu  = document.querySelector(".menu"),
    links = document.querySelector(".links"),
    statu = false;
menu.onclick = function() {
    if(statu === false) {
        statu = true;
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-x");
        links.style.display = "flex"
    }else {
        statu = false;
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-x");
        links.style.display = "none"
    }
}
let service1 = `
SEO Analysis & Daily Reports
`;
let service2 = `
Healthy Food & Life
`;
let service3 = `
Car Re-search & Transport
`;
let service4 = `
Online Shopping & Tracking ID
`;
let service5 = `
Enjoy & Travel
`;












let title = document.getElementById("title"),
    image = document.getElementById("image"),
    serviceOne = document.getElementById("one"),
    serviceTwo = document.getElementById("two"),
    serviceThree = document.getElementById("three"),
    serviceFour = document.getElementById("four"),
    serviceFive = document.getElementById("five");
serviceOne.onclick = function(){
    title.innerHTML = service1;
    image.src = "images/service1.jpg";
}
serviceTwo.onclick = function(){
    title.innerHTML = service2;
    image.src = "images/service3.jpg";
}
serviceThree.onclick = function(){
    title.innerHTML = service3;
    image.src = "images/service4.jpg";
}
serviceFour.onclick = function(){
    title.innerHTML = service4;
    image.src = "images/service3.jpg";
}
serviceFive.onclick = function(){
    title.innerHTML = service5;
    image.src = "images/service1.jpg";
}





