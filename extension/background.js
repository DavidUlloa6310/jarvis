chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "captureScreenshot") {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(imageUri) {

        const headers = {
            "Content-Type": "application/json"
        }

        const image = imageUri.replace(/^data:image\/(png|jpeg);base64,/, ''); // base64 encoded
        const body = {
            image,
        }

        fetch("http://localhost:3001/action", { method : "POST", headers, body}).then(response => {
            if (!response.ok) {
                return new Error("Error");
            }
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

      sendResponse({ action: "click", point: [1.00, 2.00]});
    });
  }
  return true; // Indicate that sendResponse will be called asynchronously
});


// Encode the segment, hashmap the encoding with the position, pass encoding into model, 
