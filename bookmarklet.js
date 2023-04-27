(function() {
  // Step 1: Read the links from the links.txt file
  var links = [];
  fetch('https://example.com/links.txt')
    .then(response => response.text())
    .then(text => {
      links = text.split('\n');
      // Step 2: Create an iFrame for each link
      var i = 0;
      function createIFrame() {
        if (i >= links.length) return;
        var iframe = document.createElement('iframe');
        iframe.src = links[i];
        iframe.style.width = '100%';
        iframe.style.height = '500px';
        document.body.appendChild(iframe);
        // Step 3: Check if the iFrame contains the message "Looks like this page isn't allowed"
        setTimeout(function() {
          if (iframe.contentDocument.documentElement.innerText.toLowerCase().includes("looks like this page isn't allowed")) {
            // Step 4: Move to the next link if the message is detected
            i++;
            document.body.removeChild(iframe);
            createIFrame();
          }
        }, 5000);
      }
      createIFrame();
    })
    .catch(error => {
      console.error('Error reading links.txt file:', error);
    });
})();
