var body = document.querySelector("body");
var sliderRadios = document.querySelectorAll(".slider-radio");
var sliderItems = document.querySelectorAll(".slider-item");
var backgrounds = ["#849D8F", "#8996A6", "#9D8B84"];


var changeBackground = (index) => {
  body.style.backgroundColor = backgrounds[index];
  body.style.backgroundImage = "url('img/Slider-" + index + ".png')";
}

sliderRadios.forEach((sliderRadio, i) => {
  sliderRadio.addEventListener("click", (e) => {
    e.preventDefault();
    changeBackground(i);
    sliderRadios[i].classList.add("slider-current");
  });
});



