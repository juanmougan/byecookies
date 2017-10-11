'use strict';
 
// TODO adapt this to delete cookies
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var currentTime = new Date();
        /*
        Here I should instead do something like
        if(isBlacklistedUrl(url)) {
			deleteCookiesForSite(url);
			navigateToSite();
        }
        */
        if(isOfficeTime(currentTime) && isWeekday(currentTime)){
            return {redirectUrl: chrome.extension.getURL('index.html')};    
        }
        return details.url;
    },
    {
        urls: [
            "*://*.facebook.com/*",
            "*://*.twitter.com/*",
            "*://*.gmail.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
