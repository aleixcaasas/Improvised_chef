var express = require("express");
var request = require("request");
var cheerio = require("cheerio");
var parse = require("iso8601-duration").parse;
var router = express();
var fs = require("fs");

router.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get("/", function (req, res) {
  var url = req.query.url,
    recipe = {
      title: null,
      description: null,
      ingredients: [],
      method: [],
      difficulty: null,
      time_preparation: null,
      time_cooking : null,
      serves: null,
      self_url: url,
      image: null,
    };

  request(url, function (err, response, html) {
    if (!err) {
      const $ = cheerio.load(html);
      try {
        if (url.match(/https:\/\/www.bbcgoodfood.com/)) {
          console.log("Good Food");

          recipe.title = $("h1").text();
          if (!recipe.title || recipe.title.length < 1) {
            return res.send({ error: "Not a valid BBC Good Food URL" });
          } else {
            $(".recipe__ingredients ul li.list-item").each(function (
              index,
              item
            ) {
              // Trim string up to line break where ingredient anchor description starts
              var lineBreak = $(this).text().indexOf("\n");
              if (lineBreak > 0) {
                recipe.ingredients.push($(this).text().substring(0, lineBreak));
              } else {
                recipe.ingredients.push($(this).text());
              }
            });
            $(".recipe__method-steps ul .list-item p").each(function (
              index,
              item
            ) {
              recipe.method.push($(this).text());
            });
            recipe.description = $(".editor-content p").text();
            recipe.time_preparation = $(".cook-and-prep-time .list time").first().text();
            recipe.time_cooking = $(".cook-and-prep-time .list time").last().text();
            recipe.difficulty = $(".post-header__row .list-item:nth-child(2) div div:nth-child(2)").text();
            recipe.serves = $(".post-header__servings")
              .children()
              .last()
              .text();
            recipe.image = $(".post-header__image-container img").attr("src");

            setTimeout(() => {
              console.log(recipe);
              fs.appendFile("data.json", JSON.stringify(recipe)+",\n", "utf-8", function(err) {
                if (err) {
                  return console.log(err);
                }
                console.log("Saved Data");
              });
            }, 2000);

          return res.send(recipe);

          }
        } else if (url.match(/https:\/\/www.bbc.co.uk\/food\//)) {
          console.log("BBC Food");
          /**
           *  Load Recipe Schema and populate recipe data from that
           */
          const schemaJSON = $("script[type='application/ld+json']")
            .map((i, el) => {
              return JSON.parse(el.children[0].data);
            })
            .filter((i, el) => {
              return el["@type"] === "Recipe";
            });
          const recipeData = schemaJSON["0"] || null;
          if (!recipeData) {
            throw new Error("Recipe not found");
          }
          recipe.title = recipeData.name;
          recipe.ingredients = recipeData.recipeIngredient;
          recipe.method = recipeData.recipeInstructions;

          const prepTime = parse(recipeData.prepTime);
          const cookTime = parse(recipeData.cookTime);
          recipe.time = {
            prep: `${prepTime.hours ? "" + prepTime.hours + " hours" : ""} ${
              prepTime.minutes ? "" + prepTime.minutes + " minutes" : ""
            }`,
            cook: `${cookTime.hours ? "" + cookTime.hours + " hours" : ""} ${
              cookTime.minutes ? "" + cookTime.minutes + " minutes" : ""
            }`,
          };

          recipe.serves = recipeData.recipeYield;
          recipe.image = recipeData.image[0];
          return res.send(recipe);
        } else {
          res.send({ error: "Website not yet supported" });
        }
      } catch (err) {
        res.send({ error: "Invalid URI" });
      }
    } else {
      res.send({ error: "Invalid URI" });
    }
  });
});

module.exports = router;
