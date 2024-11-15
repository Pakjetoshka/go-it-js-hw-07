function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numbInput = document.querySelector("input");
const divCont = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnRemove = document.querySelector("[data-destroy]");
const size = 30;

btnCreate.addEventListener("click", createAmount);
btnRemove.addEventListener("click", destroyBoxes);

function createAmount(){
  divCont.innerHTML = "";
  const amount = numbInput.value;
  if (Number(numbInput.value)>=1 && Number(numbInput.value)<=100){
    return createBoxes(amount);
  }
  else
  {
    numbInput.value = "";
    return;
  }
}

function createBoxes(amount){
  const boxList = document.createElement("ul");
  for (let i=0; i<amount; i++)
  {
    const box = document.createElement("div");
    box.classList.add("colorBox");
    box.style.height = (`${size+(i*10)}px`);
    box.style.width = (`${size+(i*10)}px`);
    box.style.backgroundColor = (getRandomHexColor());
    boxList.append(box);
  }
  divCont.append(boxList);
  numbInput.value = "";
}

function destroyBoxes(){
  divCont.innerHTML = "";
  numbInput.value = "";
}