const inputRange = document.getElementById("font-size-control");


const text = document.getElementById("text");
console.dir(text.style);

inputRange.addEventListener("input", (event) => {
    console.log(event.target.value);
    text.style.fontSize = event.target.value + "px"
})