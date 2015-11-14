// ==UserScript==
// @name         Triviador remove ad banner
// @namespace    https://github.com/adityavarma1234/
// @version      0.1
// @description  Triviador ad block banner remove
// @author       Aditya Varma
// @match        https://apps.facebook.com/triviador/*
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-latest.js

function hideTriviadorAdBlockBanner(){
    divAdBanner = document.getElementsById("RE_LEFT");
    console.log(divAdBanner);
    for(i = 0; i< div_ad_banner.length; i++){
        divAdBanner[i].parentNode.removeChild(divAdBanner[i]);
    }
}
if(document.readyState === "complete"){
    hideTriviadorAdBlockBanner();
    console.log('function called');
}
