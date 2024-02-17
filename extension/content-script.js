const script = document.createElement("script");

// Add scripts you want to add into runtime here:
script.src = chrome.runtime.getURL("popup.js");

(document.head || document.documentElement).appendChild(script);
script.onload = function() {
    script.remove();
};

