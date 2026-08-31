// ==UserScript==
// @name         Google Search Dark Theme
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Auto Enable Google Search Dark Theme
// @author       Hansaplast
// @include      https://www.google.*/*
// @icon         https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico
// @grant        none
// @license      GPL3
// @downloadURL  https://github.com/hansaplasst/google-search-dark-theme/raw/refs/heads/main/google-search-dark-theme-user.js
// @updateURL    https://github.com/hansaplasst/google-search-dark-theme/raw/refs/heads/main/google-search-dark-theme-user.js
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(() => {
        const darkThemeToggle = document.getElementsByClassName("tFYjZe")[0];
        const themeIsLight = (window.getComputedStyle(document.body).backgroundColor === 'rgb(255, 255, 255)');

        if (darkThemeToggle && themeIsLight) {
            darkThemeToggle.click();
        }

        observer.disconnect(); // Stop the observer if the function is executed
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
})();
