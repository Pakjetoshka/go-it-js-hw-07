const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("blur", (event) => {
    textInput.value = event.currentTarget.value.trim();
});
textInput.addEventListener("input", setOutput);

function setOutput(event) {
    spanOutput.textContent = event.currentTarget.value.trim();
    if (textInput.value.trim() === "")
    {
        spanOutput.textContent = "Anonymous";
    }
}