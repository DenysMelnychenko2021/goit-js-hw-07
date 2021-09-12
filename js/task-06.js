const inputById = document.getElementById("validation-input");
console.dir(inputById);

inputById.addEventListener("blur", checkLengthValue);

function checkLengthValue(event) {
    console.log("Отправка формы произошла", event);
    const lenghtValue = Number(inputById.dataset.length);
    console.log(lenghtValue);
    console.log(event.target.value.length);
    const currentLengthValue = event.target.value.length;
    
    if (currentLengthValue === lenghtValue) {
        inputById.classList ="valid"
        //inputById.classList.remove("invalid");
        //inputById.classList.add("valid");
        console.log(inputById.classList);
    } else {
        inputById.classList ="invalid"
        //inputById.classList.remove("valid");
        //inputById.classList.add("invalid");
        console.log(inputById.classList);
    }
}