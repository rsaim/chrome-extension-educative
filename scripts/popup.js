document.addEventListener('DOMContentLoaded', function() {
  var executeButton = document.getElementById('executeButton');

  executeButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ action: 'execute' });
  });
});
