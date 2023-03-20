unit_variables = ['½', 'litre', 'tspb', 'tsp', 'mg', 'ml', 'g', 'litre', 'l']
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
                    if unit_element in s[i:i+7]:
                        if s[i:i+len(unit_element)+1].replace(' ', '') == unit_element:
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
                    name = name.split(',')[0]
                    break
        i += 1
    quantity = int(quantity_s)
    return name, quantity, unit

print(get_data_from_ingredient('1 soup, thinly cutted'))