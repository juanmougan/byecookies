'use strict';

// TODO adapt this to delete cookies
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const URL = 'www.lanacion.com.ar'
      chrome.cookies.getAll({domain: URL}, function(cookies) {
        for(var i=0; i<cookies.length;i++) {
          chrome.cookies.remove({url: "http://" + URL + cookies[i].path, name: cookies[i].name});
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
