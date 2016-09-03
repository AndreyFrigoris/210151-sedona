var link = document.querySelector(".open-close-form");
var popup = document.querySelector(".order-form");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("order-form-show");
 });
 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (popup.classList.contains("order-form-show")) {
  popup.classList.remove("order-form-show");
  }
 }
});
