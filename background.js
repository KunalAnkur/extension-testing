// background.js
chrome.webRequest.onCompleted.addListener(
    function(details) {
      console.log("Request completed:", details);
      
      // You can access various details of the request in the 'details' object
      // For example, details.url, details.method, details.statusCode, etc.
      
      // Perform actions based on the completed request if needed
      
    },
    { urls: ["<all_urls>"] }, // You can specify the URL patterns you want to monitor
    ["responseHeaders"]
  );
  