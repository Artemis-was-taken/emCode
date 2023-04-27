(function() {
  // Step 1: Read the links from the links.txt file
  var links = [];
  fetch('https://raw.githubusercontent.com/Artemis-was-taken/emCode/main/links.txt')
    .then(response => response.text())
    .then(text => {
      links = text.split('\n');
      // Step 2: Create an iFrame for each link
      var i = 0;
      function createIFrame() {
        if (i >= links.length) return;
        var iframe = document.createElement('iframe');
        iframe.src = links[i];
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        document.body.appendChild(iframe);
        // Step 3: Check if the iFrame contains the message "Looks like this page isn't allowed"
        var counter = 0;
        var intervalId = setInterval(function() {
          counter++;
          if (counter > 10) {
            clearInterval(intervalId);
            i++;
            createIFrame();
          }
          else if (iframe.contentDocument.documentElement.innerText.toLowerCase().includes("looks like this page isn't allowed")) {
            clearInterval(intervalId);
            i++;
            createIFrame();
          }
        }, 1000);
      }
      createIFrame();
    })
    .catch(error => {
      console.error('Error reading links.txt file:', error);
    });
})();
