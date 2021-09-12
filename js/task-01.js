const elemsByClassItem = document.getElementsByClassName('item');
console.log("Через getElementsByClassName")
console.log(`В списке ${elemsByClassItem.length} категории`)

console.log("============================")

const categoriesById = document.querySelectorAll('#categories .item')
console.log("Через querySelectorAll")
console.log(`В списке ${categoriesById.length} категории`)

console.log("============================")

const elemsByProto = document.querySelectorAll('ul h2')
console.log("Через потомка")
console.log(`В списке ${elemsByProto.length} категории`)

console.log("============================")

const elemsByClassItemH2 = document.querySelectorAll(".item h2").forEach(function (elem) {
    console.log(`Категория: ${elem.textContent} 
Количество элементов: ${elem.nextElementSibling.children.length}`)
})