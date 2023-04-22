const axios = require('axios');
const fs = require('fs');
// Leer el archivo JSON

/* RECUPERAR NOMÉS EL NOM DELS ALIMENTS */
/*const filePath = 'C:\\Users\\acasa\\Desktop\\ENGINYERIA INFORMATICA UAB\\3r CURS\\2n SEMESTRE\\LIS - Laboratori Integrat de Software\\Improvised_chef\\data\\parsed_ingredients.json';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const ingredients = JSON.parse(data);

  const ingredientNames = ingredients.map(ingredient => ingredient.name);

  const outputFilePath = 'C:\\Users\\acasa\\Desktop\\ENGINYERIA INFORMATICA UAB\\3r CURS\\2n SEMESTRE\\LIS - Laboratori Integrat de Software\\Improvised_chef\\data\\ingredient_names.json';

  fs.writeFile(outputFilePath, JSON.stringify(ingredientNames), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Se han escrito ${ingredientNames.length} nombres de ingredientes en ${outputFilePath}.`);
  });
});*/


// Leer archivo de palabras
const palabras = 'C:\\Users\\acasa\\Desktop\\ENGINYERIA INFORMATICA UAB\\3r CURS\\2n SEMESTRE\\LIS - Laboratori Integrat de Software\\Improvised_chef\\data\\ingredient_names.json';

fs.readFile(palabras, 'utf8', (err, data) => {
  if (err) throw err;

  // Configurar la solicitud HTTP POST
  const url = 'https://api.openai.com/v1/engine/davinci-codex/completions';
  const prompt = `Elimina todas las claves donde el campo "name" no son ingredientes de cocina en el archivo JSON:\n${data}\nResultado:`;
  const dataToSend = {
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.7
  };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Reemplazar con tu clave de API
    }
  };

  // Enviar la solicitud HTTP POST
  axios.post(url, dataToSend, config)
    .then(response => {
      const filteredIngredients = JSON.parse(response.data.choices[0].text);

      // Escribir el objeto JSON filtrado en un nuevo archivo
      fs.writeFile('filtered_ingredients.json', JSON.stringify(filteredIngredients), (err) => {
        if (err) throw err;
        console.log('El archivo filtrado se ha guardado correctamente.');
      });
    })
    .catch(error => {
      console.error(error);
    });
});
