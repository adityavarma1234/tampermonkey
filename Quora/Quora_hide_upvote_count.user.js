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
    for(i = 0; i<span.length; i++){
        span[i].parentNode.removeChild(span[i]);
    }
}
function hideviewsandcredibility(){
    var div_element = document.getElementsByClassName("CredibilityFact");
    for(i=0; i < div_element.length; i++){
        // div_element[i].parentNode.removeChild(div_element[i]); // uncomment this to remove credibility entirely
        div_element[i].innerHTML = div_element[i].innerHTML.replace(/(^\d+)(\.\d+|)(k Views*| Views)/i, "");
    }
}
hidecount();
hidecount();
hideviewsandcredibility();
window.onscroll = function (e){
    hidecount();
    hideviewsandcredibility()
}
