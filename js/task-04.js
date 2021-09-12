const buttonDec = document.querySelector("[data-action='decrement']")
console.log(buttonDec)

const buttonInc = document.querySelector("[data-action='increment']")
console.log(buttonInc)

const valueById = document.getElementById("value")
console.log(valueById)

let value = 0;

//const decrement = () => valueById.textContent = value -= 1;
//const increment = () => valueById.textContent = value += 1;

//buttonDec.addEventListener("click", decrement)
//buttonInc.addEventListener("click", increment)

buttonDec.addEventListener("click", () => valueById.textContent = value -= 1)
buttonInc.addEventListener("click", () => valueById.textContent = value += 1)