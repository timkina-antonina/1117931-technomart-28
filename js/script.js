// modal-feedback

var feedbackPopup = document.querySelector(".modal-feedback");
if (feedbackPopup) {
  var feedbackLink = document.querySelector(".feedback-link");
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
};


// modal-addedToCart

var addedtocartPopup = document.querySelector(".modal-added-to-cart");
if (addedtocartPopup) {
  var addedtocartLinks = document.querySelectorAll(".button-buy");
  var addedtocartClose = addedtocartPopup.querySelector(".modal-close");
  var addedtocartButton = addedtocartPopup.querySelector(".modal-added-to-cart-button");

  for(var i=0;i<addedtocartLinks.length;i++) {
    addedtocartLinks[i].addEventListener("click", function(evt) {
  	  evt.preventDefault();
  	  addedtocartPopup.classList.toggle("modal-show");
    });
  }

  addedtocartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedtocartPopup.classList.remove("modal-show");
  });

  addedtocartButton.addEventListener("click", function (evt) {
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
};


// modal-map

var mapPopup = document.querySelector(".modal-map");
if (mapPopup) {
  var mapLink = document.querySelector(".button-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
};


// services-slider

var sSlider = document.querySelector(".services-slider");
if (sSlider) {
  var sSliderButtonDelivery = sSlider.querySelector(".button-slider-delivery");
  var sSliderButtonGuarantee = sSlider.querySelector(".button-slider-guarantee");
  var sSliderButtonCredit = sSlider.querySelector(".button-slider-credit");
  var sSlidDelivery = sSlider.querySelector(".slide-delivery");
  var sSlidGuarantee = sSlider.querySelector(".slide-guarantee");
  var sSlidCredit = sSlider.querySelector(".slide-credit");

  sSliderButtonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    sSliderButtonDelivery.classList.add("active");
    sSliderButtonGuarantee.classList.remove("active");
    sSliderButtonCredit.classList.remove("active");
    sSlider.classList.add("services-slider-1");
    sSlider.classList.remove("services-slider-2");
    sSlider.classList.remove("services-slider-3");
    sSlidDelivery.classList.add("slide-current");
    sSlidGuarantee.classList.remove("slide-current");
    sSlidCredit.classList.remove("slide-current");
  });

  sSliderButtonGuarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    sSliderButtonGuarantee.classList.add("active");
    sSliderButtonDelivery.classList.remove("active");
    sSliderButtonCredit.classList.remove("active");
    sSlider.classList.add("services-slider-2");
    sSlider.classList.remove("services-slider-1");
    sSlider.classList.remove("services-slider-3");
    sSlidGuarantee.classList.add("slide-current");
    sSlidDelivery.classList.remove("slide-current");
    sSlidCredit.classList.remove("slide-current");
  });

  sSliderButtonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    sSliderButtonCredit.classList.add("active");
    sSliderButtonGuarantee.classList.remove("active");
    sSliderButtonDelivery.classList.remove("active");
    sSlider.classList.add("services-slider-3");
    sSlider.classList.remove("services-slider-1");
    sSlider.classList.remove("services-slider-2");
    sSlidCredit.classList.add("slide-current");
    sSlidGuarantee.classList.remove("slide-current");
    sSlidDelivery.classList.remove("slide-current");
  });
};


// promo-slider

var pSlider = document.querySelector(".promo-slider");
if (pSlider) {
  var pSliderButtonBack = pSlider.querySelector(".button-back");
  var pSliderButtonForward = pSlider.querySelector(".button-forward");
  var pSliderButtonSlide1 = pSlider.querySelector(".button-slide-1");
  var pSliderButtonSlide2 = pSlider.querySelector(".button-slide-2");
  var pSlidePerforator = pSlider.querySelector(".slide-perforator");
  var pSlideDrill = pSlider.querySelector(".slide-drill");

  pSliderButtonForward.addEventListener("click", function (evt) {
    evt.preventDefault();
    pSlider.classList.remove("site-wrapper-1");
    pSlider.classList.add("site-wrapper-2");
    pSliderButtonSlide1.classList.remove("current");
    pSliderButtonSlide2.classList.add("current");
    pSlidePerforator.classList.remove("slider-current");
    pSlideDrill.classList.add("slider-current");
  });

  pSliderButtonBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    pSlider.classList.remove("site-wrapper-2");
    pSlider.classList.add("site-wrapper-1");
    pSliderButtonSlide1.classList.add("current");
    pSliderButtonSlide2.classList.remove("current");
    pSlideDrill.classList.remove("slider-current");
    pSlidePerforator.classList.add("slider-current");
  });

  pSliderButtonSlide2.addEventListener("click", function (evt) {
    evt.preventDefault();
    pSlider.classList.remove("site-wrapper-1");
    pSlider.classList.add("site-wrapper-2");
    pSliderButtonSlide1.classList.remove("current");
    pSliderButtonSlide2.classList.add("current");
    pSlidePerforator.classList.remove("slider-current");
    pSlideDrill.classList.add("slider-current");
  });

  pSliderButtonSlide1.addEventListener("click", function (evt) {
    evt.preventDefault();
    pSlider.classList.remove("site-wrapper-2");
    pSlider.classList.add("site-wrapper-1");
    pSliderButtonSlide1.classList.add("current");
    pSliderButtonSlide2.classList.remove("current");
    pSlideDrill.classList.remove("slider-current");
    pSlidePerforator.classList.add("slider-current");
  });
};
