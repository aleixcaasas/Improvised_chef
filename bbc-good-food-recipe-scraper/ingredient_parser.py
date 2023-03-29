import json
import re
unit_variables = ['litre', 'tbsp', 'tspb',
                  'tsp', 'mg', 'ml', 'g', 'litre', 'l']
censored_variables = ['of', 'large', 'dried', 'thumb', 'sized']
id_counter_ingredient = 0
id_counter_recipe = 0
ingredient_dict = {}
ingredient_list = []
total = 0

def get_data_from_ingredient(s: str, recipe_id: int):
    global total
    total += 1
    print(total)
    quantity_bool, unit_bool, name_bool = False, False, False
    name = ''
    quantity = 0.0
    unit = None
    i = 0
    global id_counter_ingredient
    while i < len(s):
        if s[i].isnumeric() or s[i] == "½" or s[i] == "¼":
            if i == 0:
                quantity_bool = True
            if quantity_bool:
                if s[i] == "½":
                    quantity += 0.5
                elif s[i] == "¼":
                    quantity += 0.25
                elif s[i] == "⅓":
                    quantity += 0.33
                elif s[i] == "⅔":
                    quantity += 0.66
                elif s[i] == "¾":
                    quantity += 0.75
                elif s[i] == "⅛":
                    quantity += 0.125
                elif s[i].isnumeric():
                    quantity += float(s[i])
        else:
            if quantity_bool:
                quantity_bool = False
                for unit_element in unit_variables:
                    if unit_element in s[i:i + 7]:
                        if s[i:i + len(unit_element) + 1].replace(' ', '') == unit_element:
                            unit = unit_element
                            i += len(unit)
                            break
                unit_bool = True

            if unit_bool:
                if s[i] == ' ':
                    name_bool = True
                elif name_bool:
                    name_start = i
                    name = s[name_start:]
                    name = refactor_name(name.split(',')[0])
                    break
        i += 1
    try:
        quantity = float(quantity)
    except ValueError:
        return f'{s}'
    if not unit:
        split_words = name.split()
        for unit_element in unit_variables:
            if unit_element in split_words:
                unit = unit_element
                split_words.remove(unit_element)
                name = ' '.join(split_words)
                break
        if not unit:
            unit = 'No unit'
    name = refactor_name(name.split(',')[0])
    if unit == "tspb" or unit == "tsp":
        unit = "tbsp"
    if name:
        if name not in ingredient_dict:
            ingredient_dict[name] = {'name': name, 'id': id_counter_ingredient, 'recipes_in': []}
            ingredient_list.append(ingredient_dict[name])
            id_counter_ingredient += 1
        current_id = ingredient_dict[name]['id']
        ingredient_dict[name]['recipes_in'].append(recipe_id)
        return {'id': current_id, 'name': name, 'quantity': quantity, 'unit': unit, 'orig': s}
    return {'name': s}


def refactor_name(name: str):
    # Filter of and other unwanted names
    new_name = name
    for censored_name in censored_variables:
        if censored_name in name:
            location = name.index(censored_name) + len(censored_name) + 1
            new_name = name[location:]

    # remove multiple spaces
    new_name = re.sub(r'\s+', ' ', new_name)
    pattern = r'[\[\({].*?[\)\]}]'  # to remove text inside brackets
    new_name = re.sub(pattern, '', new_name)
    pattern = r'\s*\(.+?\)'  # to remove text inside parentheses
    new_name = re.sub(pattern, '', new_name)
    new_name = re.sub(r'[^a-zA-Z\s]', '', new_name)
    new_name = new_name.strip()
    return new_name


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
        #json.dump(ingredient_dict, output_file, indent=4)

input_file_path = "recipes.json"
output_file_path = "parsed_recipes.json"
ingredient_file_path = "parsed_ingredients.json"
process_recipe_file(input_file_path, output_file_path)