var feedbackLink = document.querySelector(".feedback-link");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("#feedback-name");
var feedbackEmail = feedbackPopup.querySelector("#feedback-email");
var feedbackContent = feedbackPopup.querySelector("#feedback-content");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackContent.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
