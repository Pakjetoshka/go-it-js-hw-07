function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorChange = document.querySelector(".change-color");
const bodyElt = document.querySelector("body");
const spanElt = document.querySelector(".color");

const btnActivated = () =>{
  bodyElt.style.backgroundColor = getRandomHexColor();
  spanElt.style.color = getRandomHexColor();
};

btnColorChange.addEventListener("click", btnActivated);

