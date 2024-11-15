function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorChange = document.querySelector(".change-color");
const bodyElt = document.querySelector("body");
const spanElt = document.querySelector(".color");

const btnActivated = () =>{
  const hexColor = getRandomHexColor();
  bodyElt.style.backgroundColor = hexColor;
  spanElt.textContent = hexColor;
};

btnColorChange.addEventListener("click", btnActivated);

