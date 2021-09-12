const inputName = document.getElementById("name-input");
console.log(inputName);
console.dir(inputName);

const outputName = document.getElementById("name-output");
console.log(outputName);

const inputChange = function (event) {
    event.currentTarget.value !== ""
    ? outputName.textContent = event.currentTarget.value
    : outputName.textContent = "незнакомец"
}

inputName.addEventListener("input", inputChange);

/* function inputChange(event) {
    if (event.currentTarget.value !== "") { outputName.textContent = event.currentTarget.value }
    else outputName.textContent = "незнакомец"

}  */


