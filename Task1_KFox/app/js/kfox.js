"use strict";

window.onload = function () {

    //var menu = document.getElementById("hamburger");
    document.getElementById("hamburger").addEventListener("click", function () {
        console.log("kaboom");
        var menu = document.getElementsByTagName("body")[0];        
        menu.className = (menu.className === "") ? "menu-on" : "" ;
    });   
    
    document.getElementsByTagName("nav")[0].addEventListener("click", function (e) {
        e = e || event;
        e.preventDefault();
        var menu = document.getElementsByTagName("body")[0];        
        menu.className = (menu.className === "") ? "menu-on" : "" ;
    });
};


