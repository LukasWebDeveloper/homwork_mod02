const logoElement = document.querySelector(".blockLogo");
const buttonElement = document.querySelector(".js-buttonLogo");

console.log("Witam wszystkich programistów ! ! !");

buttonElement.addEventListener("click", () => { 
    logoElement.classList.toggle("js-blockLogo--possition");
});