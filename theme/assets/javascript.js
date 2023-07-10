// JavaScript code here

// Hide and Remove all Anvil element
var element = document.getElementById("anvil-header");
if (element) {
  element.style.display = "none";
  element.parentNode.removeChild(element);
}
