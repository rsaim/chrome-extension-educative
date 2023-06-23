console.log("Educative Plugin content.js");

function processPage() {
  console.log("Educative plugin: processPage");

  // Find the HTML element
  const element = document.querySelector(".jgBvsf");

  // Remove the class from the element
  if (element) {
    element.classList.remove("jgBvsf");
  } else {
    console.error("Educative plugin: class .jgBvsf not found");
  }
}

// Create a MutationObserver to observe changes in the DOM
const observer = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Check if the desired class becomes available
      const element = document.querySelector(".jgBvsf");
      if (element) {
        processPage();
        observer.disconnect();
        break;
      }
    }
  }
});

// Observe the entire document for changes in the DOM
observer.observe(document, { childList: true, subtree: true });


// Also support manual trigger from the extension
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "execute") {
    processPage();
  }
});

