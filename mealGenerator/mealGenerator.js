var grammar = {
	"mealSun": [
        "#asianMeal#",
        "#style.capitalize# #protein# with #vegetable# and #starch#",
        "#chickenMeal#",
        "#recipes#"
    ],
    
    "mealMon": [
        "#asianMeal#",
        "#protein.capitalize# with #vegetable# and #starch#",
        "#chickenMeal#",
        "#recipes#"
    ],
    
    "mealTues": [
        "#tacoMeal#"
    ],
    
    "mealWed": [
        "#easyMeal#",
        "#recipes#"
    ],
    
    "mealThurs": [
        "#style.capitalize# #protein# with #adj# salads"
    ],
    
    "mealFri": [
        "#asianMeal#",
        "#protein.capitalize# with #vegetable# and #starch#",
        "#chickenMeal#",
        "#recipes#"
    ],
    
    "asianMeal": [
        "<a href='http://seonkyounglongest.com/easy-beef-and-broccoli'>#protein.capitalize# with Broccoli</a>",
        "Kung Pow Chicken",
        "Chicken Pad Thai",
        "<a href='http://seonkyounglongest.com/best-korean-bbq-rice-bow/'>Korean BBQ Rice Bowl</a>",
        "<a href='http://seonkyounglongest.com/chicken-bulgogi-udon/'>Chicken Bulgogi Udon Noodles</a>",
        "Stir-fry with #protein#",
        "Ramen stir-fry with #protein#",
        "Goyza and stir-fry"
        
    ],
    
    "style": [
        "greek",
        "BBQ",
        "citrus",
        "spciy",
        "tasty"
    ],
    
    "chickenMeal": [
        "Homemade chicken alfredo with #vegetable#",
        "Homemade chicken nuggets with #vegetable# and #starch#",
        "Roasted chicken with #vegetable# and #starch#",
        "Oven fry with #vegetable# and #starch#"
    ],
    
    "recipes": [
        "<a href='https://www.delish.com/cooking/recipe-ideas/a19677130/instant-pot-chicken-and-rice-recipe/'>Instant Pot Chicken and Rice</a>",
        "<a href='https://www.foodnetwork.com/recipes/food-network-kitchen/5-ingredient-instant-pot-mac-and-cheese-3649854'>Instant Pot Mac and Cheese</a>",
        "<a href='https://www.lecremedelacrumb.com/instant-pot-pot-roast-potatoes/'>Instant Pot Pot Roast</a>",
        "<a href='https://www.wellplated.com/instant-pot-teriyaki-chicken/'>Instant Pot Chicken Teriyaki</a>",
        "<a href='https://www.365daysofcrockpot.com/instant-pot-slow-cooker-mexican-stuffed-peppers/'>Instant Pot Mexican Stuffed Peppers</a>",
        "<a href='https://www.365daysofcrockpot.com/instant-pot-thai-chicken-noodles/'>Instant Pot Thai Chicken Noodles</a>",
        "<a href='https://www.365daysofcrockpot.com/instant-pot-pasta-primavera/'>Instant Pot Pasta Primavera</a>",
        "#protein.capitalize# foil packs with #vegetable#"
    ],
    
    "tacoMeal": [
        "#protein.capitalize# tacos with #tacoSide#",
        "#protein.capitalize# fajitas with #tacoSide#",
        "#protein.capitalize# burrito bowl with #tacoSide#",
    ],
    
    "tacoSide": [
        "guacamole",
        "pico",
        "mexican grilled corn",
        "cilantro-lime rice"
    ],
    
    "easyMeal": [
        "Tortellini with pesto",
        "#pasta.capitalize# with #sauce#",
        "Tortellini with #sauce#"
    ],
    
    "protein": [
        "beef",
        "chicken",
        "shrimp",
        "sausage",
        "pork",
        "chicken",
        "chicken",
        "chicken",
        "chicken"
    ],
    
    "vegetable": [
        "broccoli",
        "roasted cauliflower",
        "mixed vegetables",
        "peppers",
        "<a href='https://damndelicious.net/2014/06/21/baked-parmesan-zucchini/'>parmesan zucchini</a>",
        "green beans",
        "snap peas",
        "corn"
    ],
    
    "starch": [
        "homemade fries",
        "homemade chips",
        "roasted root vegetables",
        "roasted carrots",
        "roasted new potatoes",
        "baked potatoes",
        "a pasta packet",
        "a rice packet"
    ],
    
    "pasta": [
        "penne",
        "cannelloni",
        "cellentani",
        "gnocchi",
        "penne",
        "rigatoni",
        "fusilli",
        "ziti",
        "cavatappi",
        "cavatelli",
        "farfalle"
    ],
    
    "sauce": [
        "marinara",
        "pesto",
        "cacio e pepe",
        "bolognese",
        "sausage and green leafy stuff",
        "oil and garlic",
        "alfredo",
        "arrabbiata",
        "vodka sauce"
    ],
    
    "adj": [
        "big",
        "giant",
        "huge",
        "leafy",
        "tasty",
        "healthy"
    ],
    
    "origin": [
        "Sunday: #mealSun# <p> Monday: #mealMon# <p> Tuesday: #mealTues# <p> Wednesday: #mealWed# <p> Thursday: #mealThurs# <p> Friday: #mealFri#"
    
    ]
}