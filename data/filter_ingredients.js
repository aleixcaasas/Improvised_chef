// CONTAR INGREDIENTS I RECEPTES AMB UNA APARICIÓ
const fs = require('fs');
// Leer el archivo JSON
const input = fs.readFileSync('final_parsed_ingredients.json', 'utf8');

// Analizar el contenido en un objeto JavaScript
const data = JSON.parse(input);

let count = 0;
const recipes = new Set();

// Iterar sobre el objeto
for (let item of data) {
  // Comprobar si la longitud de "recipes_in" es 1
  if (item.recipes_in.length === 1) {
    count++;

    // Agregar el valor de la única receta al conjunto
    recipes.add(item.recipes_in[0]);
  }
}

console.log(`El número de entradas con una longitud de 1 en el campo "recipes_in" es ${count}`);
console.log(`El número de recetas diferentes dentro de estas entradas es ${recipes.size}`);

// ELIMINAR AQUESTS INGREDIENTS I RECEPTES
/*const fs = require('fs');

// Leer los archivos JSON
const ingredientsInput = fs.readFileSync('parsed_ingredients.json', 'utf8');
const recipesInput = fs.readFileSync('parsed_recipes.json', 'utf8');

// Analizar los contenidos en objetos JavaScript
const ingredientsData = JSON.parse(ingredientsInput);
const recipesData = JSON.parse(recipesInput);

// Obtener los ingredientes que sólo se utilizan en una receta
const ingredientsToRemove = new Set();
for (let item of ingredientsData) {
  if (item.recipes_in.length === 1) {
    ingredientsToRemove.add(item.id);
  }
}


// Eliminar las recetas que contienen alguno de los ingredientes a eliminar
const filteredRecipes = recipesData.filter(item => !item.ingredients.some(i => ingredientsToRemove.has(i.id)));

// Guardar las recetas filtradas en un nuevo archivo
fs.writeFileSync('filtered_recipes.json', JSON.stringify(filteredRecipes));

// Filtrar los ingredientes a mantener
const filteredIngredients = ingredientsData.filter(item => !ingredientsToRemove.has(item.id));

// Guardar los ingredientes filtrados en un nuevo archivo
fs.writeFileSync('filtered_ingredients.json', JSON.stringify(filteredIngredients));


// 
const ingredientsInput2 = fs.readFileSync('filtered_ingredients.json', 'utf8');
const recipesInput2 = fs.readFileSync('filtered_recipes.json', 'utf8');

// Analizar los contenidos en objetos JavaScript
const ingredientsData2 = JSON.parse(ingredientsInput2);
const recipesData2 = JSON.parse(recipesInput2);

// Contar el número de ingredientes y recetas
const numIngredients = ingredientsData2.length;
const numRecipes = recipesData2.length;

// Mostrar los resultados
console.log(`Número de ingredientes: ${numIngredients}`);
console.log(`Número de recetas: ${numRecipes}`);*/



// ELIMINAR RECIPES_IN QUE NO EXISTEIXEN
/*const fs = require('fs');

// Leemos los archivos de entrada
const ingredients = JSON.parse(fs.readFileSync('data/filtered_ingredients.json', 'utf8'));
const recipes = JSON.parse(fs.readFileSync('data/filtered_recipes.json', 'utf8'));

// Creamos un set con los ids de las recetas
const recipeIds = new Set(recipes.map(recipe => recipe.id));

// Filtramos la lista de recetas de cada ingrediente
ingredients.forEach(ingredient => {
  ingredient.recipes_in = ingredient.recipes_in.filter(recipeId => recipeIds.has(recipeId));
});

// Escribimos el resultado en un nuevo archivo
fs.writeFileSync('filtered_ingredients_updated.json', JSON.stringify(ingredients));*/

/*
const fs = require('fs');

const input = fs.readFileSync('filtered_ingredients.json', 'utf8');

// Analizar el contenido en un objeto JavaScript
const data = JSON.parse(input);

let count = 0;
const recipes = new Set();

// Iterar sobre el objeto
for (let item of data) {
  // Comprobar si la longitud de "recipes_in" es 1
  if (item.recipes_in.length === 0) {
    count++;

    // Agregar el valor de la única receta al conjunto
    recipes.add(item.recipes_in[0]);
  }
}

console.log(`El número de entradas con una longitud de 1 en el campo "recipes_in" es ${count}`);*/

/*const fs = require('fs');

const input = fs.readFileSync('filtered_ingredients.json', 'utf8');

// Analizar el contenido en un objeto JavaScript
const data = JSON.parse(input);

let recipes = new Set();

// Obtener un conjunto de todas las recetas en el archivo
for (let item of data) {
  if (item.recipes_in.length > 0) {
    for (let recipe of item.recipes_in) {
      recipes.add(recipe);
    }
  }
}

// Filtrar los ingredientes que están en al menos una receta
const filteredData = data.filter(item => {
  return item.recipes_in.some(recipe => recipes.has(recipe));
});

// Escribir los datos filtrados en un nuevo archivo JSON
fs.writeFileSync('filtered_ingredients_with_recipes.json', JSON.stringify(filteredData));
*/

/*const fs = require('fs');

// Leemos los archivos de entrada
const newRecipes = JSON.parse(fs.readFileSync('filtered_recipes.json', 'utf8'));
const recipesLong = JSON.parse(fs.readFileSync('recipes.json', 'utf8'));

let finalRecipes = new Set();
for(let recipe of newRecipes){
  for (let recipe2 of recipesLong) {
    if(recipe.title == recipe2.title){
      finalRecipes.add(recipe2);
    }
  }

}
console.log(finalRecipes);

fs.writeFileSync('final_recipes.json', JSON.stringify(Array.from(finalRecipes)));*/
