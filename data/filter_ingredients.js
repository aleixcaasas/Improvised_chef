// CONTAR INGREDIENTS I RECEPTES AMB UNA APARICIÓ

/*const fs = require('fs');

// Leer el archivo JSON
const input = fs.readFileSync('filtered_ingredients.json', 'utf8');

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
console.log(`El número de recetas diferentes dentro de estas entradas es ${recipes.size}`);*/

// ELIMINAR AQUESTS INGREDIENTS I RECEPTES
const fs = require('fs');

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
console.log(`Número de recetas: ${numRecipes}`);
