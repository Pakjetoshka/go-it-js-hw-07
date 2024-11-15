function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numbInput = document.querySelector("input");
const divCont = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnRemove = document.querySelector("[data-destroy]");
let size = 30;
const inputText = numbInput.value;
let amount = Number(inputText);

const box = `<div 
      class="colorBox"
      style="height: 30px; width: 30px; background-color: ${getRandomHexColor()};">
      </div>`;

btnCreate.addEventListener("click", createBoxes);
btnRemove.addEventListener("click", destroyBoxes);

function createBoxes(amount){
  // console.log(amount());
  console.log(numbInput.value);
console.log(inputText);
console.log(amount);

  // const box = document.createElement("div");
  // box.classList.add("colorBox");
  // box.style.height = (`${size}px`);
  // box.style.width = (`${size}px`);
  // box.style.backgroundColor = (getRandomHexColor());
  // divCont.append(box);
}







// function createBoxes(amount) {
//   divCont.innerHTML = "";
//   if (Number(numbInput.value)>=1 && Number(numbInput.value)<=100){
//     for (let i=0; i<Number(numbInput.value); i++) {
      
//     }
//   }
//   else
//   {
//     return;
//   }
//   divCont.insertAdjacentHTML("beforeend", box);
//   numbInput.value = "";
// }

function destroyBoxes(){
  divCont.innerHTML = "";
  numbInput.value = "";
}