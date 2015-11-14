// ==UserScript==
// @name         Quora hide count
// @namespace    https://github.com/adityavarma1234/
// @version      0.1
// @description  Quora hide upvote count, comments count, followers count.
// @author       Aditya Varma
// @match        https://www.quora.com/*
// @grant        none
// ==/UserScript==

function hidecount(){
    var span = document.getElementsByClassName("count");
    for(i = 0; i<span.length ; i++){
        span[i].parentNode.removeChild(span[i]);
    }
}
hidecount();
hidecount();
window.onscroll = function (e){
    hidecount();
}
