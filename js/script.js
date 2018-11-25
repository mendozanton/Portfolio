// "use strict"
let menuIcon= document.getElementById("menu");
let menuContent= document.getElementById("menu-cont");
let contenidoMain= document.getElementById("main");
let act_desc= () => {
    menuContent.style.left=
    menuContent.style.left=="0%"?"-100%":"0%";
};
 
menuIcon.addEventListener("click", () => act_desc());
contenidoMain.addEventListener("click",()=>{
    menuContent.style.left="-100%"
});