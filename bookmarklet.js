(function() {
  // Step 1: Ask for URL
  var url = prompt('Please enter the URL of the target website (e.g. https://www.example.com):');

  // Step 2: Scrape code from target website
  fetch(url)
    .then(response => response.text())
    .then(html => {
      // Replace the code of the current page with the code from the target website
      document.documentElement.innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching target website:', error);
    });
})();
