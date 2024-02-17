document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("queryButton");
    if (button) {
        button.addEventListener("click", function() {
            alert("Button clicked!");
            chrome.runtime.sendMessage({ action: "captureScreenshot" });
        });
    }
});

