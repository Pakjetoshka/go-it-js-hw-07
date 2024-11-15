const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    spanOutput.textContent = event.currentTarget.value.trim();
});
textInput.addEventListener("blur", (event) => {
    textInput.value = event.currentTarget.value.trim();
});

textInput.addEventListener("input", setOutput);
function setOutput() {
    if (spanOutput.textContent === "")
    {
        spanOutput.textContent = "Anonymous";
    }
}