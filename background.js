// background.js
chrome.webRequest.onCompleted.addListener(
    function (details) {
      console.log("Request completed: ", details);
      // You can access various details of the request in the 'details' object
    },
    { urls: ["<all_urls>"] } // Specify the URL patterns you want to monitor
  );