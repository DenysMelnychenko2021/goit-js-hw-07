const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients)

const ingredientsById = document.getElementById("ingredients")
console.log(ingredientsById)

const addIngredients = ingredients.map(ingredient => {
const itemList = document.createElement("li")
  itemList.textContent = ingredient
  return itemList
})


ingredientsById.prepend(...addIngredients)
