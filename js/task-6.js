function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numbInput = document.querySelector("input");
const divCont = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnRemove = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", divCreate);
btnRemove.addEventListener("click", divRemove);

function divCreate() {
  divCont.innerHTML = "";
  if (Number(numbInput.value)>=1 && Number(numbInput.value)<=100){
    for (let i=0; i<numbInput.value; i++) {
      const box = `<div 
      class="colorBox"
      style="height: 30px; width: 30px; background-color: ${getRandomHexColor()};">
      </div>`;
      divCont.insertAdjacentHTML("beforeend", box);
    }
  }
  else
  {
    return;
  }
  numbInput.value = "";
}

function divRemove(){
  divCont.innerHTML = "";
  numbInput.value = "";
}


