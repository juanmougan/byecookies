'use strict';

// TODO adapt this to delete cookies
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const URL = 'www.lanacion.com.ar'
      chrome.cookies.getAll({domain: URL}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
          let cookiePath = cookies[i].path;
          let cookieName = cookies[i].name;
          console.log("Deleting cookie with path: " + cookiePath);
          console.log("Deleting cookie with name: " + cookieName);
          chrome.cookies.remove({url: "http://" + URL + cookiePath, name: cookieName});
        }
      });
        return details.url;
    },
    {
        urls: [
            "*://*.lanacion.com.ar/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
