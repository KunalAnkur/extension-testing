const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    this.addEventListener('load', function() {
        console.log("_________________________________________");
        console.log('Intercepted response:', this.responseText);
        console.log(method, url)
        console.log("_________________________________________")

        // Do something with the response text.
    });
    originalOpen.apply(this, arguments);
};