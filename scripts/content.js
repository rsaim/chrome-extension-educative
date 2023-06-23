console.log("Educative Plugin content.js");

function processPage() {
  console.log("ext loading2");

  // Find the HTML element
  const element = document.querySelector(".jgBvsf");

  // Remove the class from the element
  if (element) {
    element.classList.remove("jgBvsf");
  }
}

// Call the function initially
processPage();

// Execute the function every 2 seconds
setInterval(processPage, 2000);


