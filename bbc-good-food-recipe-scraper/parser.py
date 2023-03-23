import json

unit_variables = ['½', 'litre', 'tspb', 'tsp', 'mg', 'ml', 'g', 'litre', 'l']
censored_variables = ['of', 'large', 'dried', '(', ')', '[', ']']

def get_data_from_ingredient(s: str):
    quantity_bool, unit_bool, name_bool = False, False, False
    name = ''
    quantity_s = ''
    unit = None
    i = 0
    while i < len(s):
        if s[i].isnumeric():
            if i == 0:
                quantity_bool = True
            if quantity_bool:
                quantity_s += s[i]
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
    quantity = int(quantity_s)
    if not unit:
        unit = 'No unit'
    return {'name': name, 'quantity': quantity, 'unit': unit}

def refactor_name(name: str):
    # Filter of and other unwanted names
    new_name = name
    for censored_name in censored_variables:
        if censored_name in name:
            location = name.index(censored_name) + len(censored_name) + 1
            new_name = name[location:]
    return new_name
def parse_recipe(recipe):
    ingredients = recipe.get("ingredients")
    if ingredients:
        parsed_ingredients = [get_data_from_ingredient(ingredient) for ingredient in ingredients]
        recipe["ingredients"] = parsed_ingredients
    return recipe

def process_recipe_file(input_file_path, output_file_path):
    with open(input_file_path, "r") as input_file:
        recipes = json.load(input_file)
    parsed_recipes = [parse_recipe(recipe) for recipe in recipes]
    with open(output_file_path, "w") as output_file:
        json.dump(parsed_recipes, output_file, indent=4)

input_file_path = "recipes.json"
output_file_path = "parsed_recipes.json"
process_recipe_file(input_file_path, output_file_path)
