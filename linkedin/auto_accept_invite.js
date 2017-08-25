// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aditya Varma
// @match        https://www.linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var invitations_count = $("span:contains('Accept')").length;
    
    for(var i=0; i<invitations_count; i++){
        $("span:contains('Accept')")[i].click();
    }

    // Your code here...
})();
