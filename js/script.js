var body = document.querySelector("body.main-body");
var sliderRadios = document.querySelectorAll(".slider-radio");
var sliderItems = document.querySelectorAll(".slider-item");
var feedbackButton = document.querySelector(".main-map .feedback .btn");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = modalFeedback.querySelector(".modal-close");
var modalOverlay = document.querySelector(".modal-overlay");
var backgrounds = ["#849D8F", "#8996A6", "#9D8B84"];


var changeBackground = (index) => {
  body.style.backgroundColor = backgrounds[index];
  body.style.backgroundImage = "url('img/Slider-" + index + ".png')";
}

var closingFunc = (arrOfElements) => {
  arrOfElements.forEach((elem) => {
    elem.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalFeedback.classList.add("visually-hidden");
    });
  });
}

sliderRadios.forEach((sliderRadio, i) => {
  sliderRadio.addEventListener("click", (e) => {
    e.preventDefault();

    changeBackground(i);

    sliderRadios.forEach((sR) => {
      sR.classList.remove("slider-current");
    });
    sliderRadio.classList.add("slider-current");

    sliderItems.forEach((item) => {
      item.classList.add("visually-hidden");
    });
    sliderItems[i].classList.remove("visually-hidden");
  });
});

feedbackButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalFeedback.classList.remove("visually-hidden");
});

closingFunc([modalClose, modalOverlay]);


