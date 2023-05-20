import json
import re


def read_censored_keywords(file_path):
    list = []
    with open(file_path, 'r') as f:
        for line in f:
            new_line = line.replace('\n', '')
            if new_line not in list:
                list.append(new_line)
    return list



censored_variables = read_censored_keywords('censored.json')
id_counter_ingredient = 0
id_counter_recipe = 0
ingredient_dict = {}
ingredient_list = []
total = 0

def get_data_from_ingredient(s: str, recipe_id: int):
    global total
    total += 1
    print(total)
    name = s
    i = 0
    global id_counter_ingredient
    name = refactor_name(name)
    print(name)
    if name:
        if name not in ingredient_dict:
            ingredient_dict[name] = {'name': name, 'id': id_counter_ingredient, 'recipes_in': []}
            ingredient_list.append(ingredient_dict[name])
            id_counter_ingredient += 1
        current_id = ingredient_dict[name]['id']
        ingredient_dict[name]['recipes_in'].append(recipe_id)
        return {'id': current_id, 'name': name, 'orig': s}
    return {'name': s}


def refactor_name(name: str):
    # Filter of and other unwanted names
    new_name = ''
    for char in name:
        if char == ',':
            break
        if char == '(':
            break
        new_name += char

    new_name = ''.join(i.lower() for i in new_name if not i.isdigit())
    new_name = re.sub(r'\\[uU][0-9a-fA-F]{4}', '', new_name)
    new_name = re.sub(r'[^\x00-\x7F]', '', new_name)
    new_name = " ".join(new_name.split())
    new_name_list = new_name.split()
    for censored in censored_variables:
        for subword in new_name_list:
            if subword == censored:
                new_name_list.remove(subword)
    res = []
    for word in new_name_list:
        if word == 'and':
            break
        if word == 'or':
            break
        if len(word) > 2:
            res.append(word)
    return ' '.join(res)


def parse_recipe(recipe):
    global id_counter_recipe
    recipe['id'] = id_counter_recipe
    id_counter_recipe += 1
    ingredients = recipe.get("ingredients")
    if ingredients:
        parsed_ingredients = [get_data_from_ingredient(
            ingredient, recipe['id']) for ingredient in ingredients]
        recipe["ingredients"] = parsed_ingredients
    return recipe


def process_recipe_file(input_file_path, output_file_path):
    with open(input_file_path, "r", encoding="utf-8") as input_file:
        recipes = json.load(input_file)
    parsed_recipes = [parse_recipe(recipe) for recipe in recipes]
    with open(output_file_path, "w") as output_file:
        json.dump(parsed_recipes, output_file, indent=4)

    with open(ingredient_file_path, "w") as output_file:
        json.dump(ingredient_list, output_file, indent=4)

input_file_path = "../data/final_recipes.json"
output_file_path = "../data/final_parsed_recipes_v2.json"
ingredient_file_path = "../data/final_parsed_ingredients_v2.json"
process_recipe_file(input_file_path, output_file_path)


