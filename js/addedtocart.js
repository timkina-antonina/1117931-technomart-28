var addedtocartLink = document.querySelector(".button-buy");
var addedtocartPopup = document.querySelector(".modal-added-to-cart");
var addedtocartClose = addedtocartPopup.querySelector(".modal-close");

addedtocartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedtocartPopup.classList.add("modal-show");
});

addedtocartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedtocartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addedtocartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      addedtocartPopup.classList.remove("modal-show");
    }
  }
});
