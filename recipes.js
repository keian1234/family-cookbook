// Add new recipes here — just append a new object to this array.
const RECIPES = [
  {
    id: "amazing-chocolate-chip-cookies",
    title: "The Best Chocolate Chip Cookie Recipe Ever",
    sourceUrl: "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg",
    category: [
      "Dessert"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "New",
    tags: [
      "Baking"
    ],
    rating: 3,
    time: "30 min",
    servings: 36,
    ingredients: [
      "1 cup salted butter, softened",
      "1 cup granulated sugar",
      "1 cup light brown sugar, packed",
      "2 tsp pure vanilla extract",
      "2 large eggs",
      "3 cups all-purpose flour",
      "1 tsp baking soda",
      "1/2 tsp baking powder",
      "1 tsp sea salt",
      "2 cups chocolate chips (12 oz)"
    ],
    steps: [
      "Preheat oven to 375°F. Line three baking sheets with parchment paper.",
      "Mix flour, baking soda, baking powder, and salt in a medium bowl; set aside.",
      "Cream together butter and sugars until combined.",
      "Beat in eggs and vanilla until light, about 1 minute.",
      "Mix in dry ingredients until combined.",
      "Add chocolate chips and mix well.",
      "Roll 2-3 tablespoons of dough into balls and place evenly spaced on prepared baking sheets.",
      "Bake for 8-10 minutes, removing when the cookies are just barely starting to turn brown.",
      "Let sit on the baking pan for 5 minutes before transferring to a cooling rack."
    ]
  },
  {
    id: "best-instapot-chili",
    title: "The Best Instapot Chili",
    sourceUrl: "https://ohsweetbasil.com/instant-pot-award-winning-chili-recipe/",
    image: "images/best-instapot-chili.jpg",
    category: [
      "🍜 Soup"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [
      "Insta Pot",
      "Comfort Food",
      "Football"
    ],
    rating: null,
    time: "50 min",
    servings: 8,
    ingredients: [
      "1 1/2 lbs ground beef",
      "6 strips bacon, chopped",
      "1 can kidney beans",
      "1 can pinto beans",
      "1 can black beans",
      "1 can fire roasted diced tomatoes",
      "1 can tomato paste",
      "1 red onion, chopped",
      "1 red bell pepper, chopped",
      "1 jalapeño, seeded and minced",
      "2 cups beef stock",
      "1 tbsp dried oregano",
      "2 tsp kosher salt",
      "2 tsp ground cumin",
      "1 tsp ground black pepper",
      "1 tsp smoked paprika",
      "2 tbsp chili powder",
      "1 tbsp Worcestershire sauce",
      "1 tbsp minced garlic",
      "Toppings: sour cream, cilantro, cheese, lime"
    ],
    steps: [
      "Turn your Instant Pot to sauté and add the bacon. Cook until crisp, stirring often to cook evenly.",
      "Remove the bacon to a paper towel lined plate.",
      "Add the onion and bell pepper and cook until tender.",
      "Add the ground beef and cook until browned.",
      "Drain off any excess grease — just tilt the pot and use a large spoon.",
      "Add all of the remaining ingredients and 3/4 of the bacon and stir to combine.",
      "Turn the Instant Pot to the chili setting (or use the manual setting if you don't have one) and cook for 18-20 minutes. Allow pressure to release naturally for 10-15 minutes, or quick release with the vent.",
      "Serve with lime, sour cream, cheese, cilantro, and the rest of the bacon!"
    ]
  },
  {
    id: "bruschetta",
    title: "Bruschetta",
    sourceUrl: "",
    image: "images/bruschetta.jpg",
    category: [
      "🍟 Apps & Sides"
    ],
    cuisine: [
      "🇮🇹 Italian"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Football",
      "Healthy",
      "Watch Parties"
    ],
    rating: 5,
    time: "20 min",
    servings: 8,
    ingredients: [
      "6 Roma tomatoes",
      "1/2 white onion",
      "Minced garlic",
      "Big bunches of basil",
      "1/4 cup olive oil",
      "3 tbsp balsamic vinegar",
      "Salt and pepper"
    ],
    steps: [
      "Chop tomatoes, white onion, minced garlic, and basil.",
      "Mix all ingredients and then add 1/4 cup olive oil, 3 tbsp balsamic vinegar, salt, and pepper"
    ]
  },
  {
    id: "buffalo-chicken-dip-healthy",
    title: "Buffalo Chicken Dip (Healthy)",
    sourceUrl: "https://thecleaneatingcouple.com/healthy-buffalo-chicken-dip/#recipe",
    image: "images/buffalo-chicken-dip-healthy.jpg",
    category: [
      "🍟 Apps & Sides"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Comfort Food",
      "Healthy",
      "Meal Prep"
    ],
    rating: 5,
    time: "2 hr",
    servings: "10+",
    ingredients: [
      "2 cups Shredded rotisserie Chicken",
      "2/3 - 3/4 container of Good Culture cottage cheese",
      "2 heaping tbsp of nonfat plain Greek yogurt",
      "1/2 shredded cheddar cheese for topping",
      "Franks Red Hot",
      "1 tbsp of Ranch sauce (or just have ranch seasoning)"
    ],
    steps: [
      "Preheat oven to 415 Farenheit.",
      "Dump your cottage cheese and Greek yogurt into a glass bowl. Use a hand blender and blend until smooth.",
      "Add chicken, Franks Red Hot, and ranch into the cottage cheese mixture. Stir until thoroughly combined.",
      "Transfer to a glass 9x9 and spread evenly. Top with shredded cheese and put in the oven. Cook for about 15ish minutes or until it bubbles and the cheese looks melted on top.",
      "Pull out of the oven and let cool before you serve."
    ]
  },
  {
    id: "buffalo-chicken-dip",
    title: "Buffalo Chicken Dip",
    sourceUrl: "https://www.mccormick.com/blogs/franks-redhot-recipes/franks-slow-cooker-buffalo-chicken-dip-recipe",
    image: "images/buffalo-chicken-dip.jpg",
    category: [
      "🍟 Apps & Sides"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Comfort Food",
      "Football",
      "Slow Cooker",
      "Watch Parties"
    ],
    rating: 5,
    time: "2 hr 15 min",
    servings: 12,
    ingredients: [
      "2 packages (8 ounces each) cream cheese, cut into chunks",
      "4 cups shredded cooked chicken",
      "1 cup Frank's RedHot® Original Cayenne Pepper Hot Sauce",
      "1 cup ranch dressing",
      "1 cup shredded Cheddar cheese, divided",
      "2 tablespoons chopped green onions",
      "Blue cheese crumbles (optional)"
    ],
    steps: [
      "Place cream cheese in slow cooker. Top with chicken, Frank's RedHot, ranch dressing and 1/2 cup of the Cheddar cheese. Cover.",
      "Cook on HIGH 1 1/2 to 2 hours or until heated through. Stir until well-mixed; top with remaining 1/2 cup cheese and sprinkle with green onions. Cover. Cook 15 minutes longer or until cheese is melted. Serve sprinkled with blue cheese"
    ]
  },
  {
    id: "chicken-enchiladas",
    title: "Chicken Enchiladas",
    sourceUrl: "https://www.instagram.com/reel/C2NMg6gMW9D/?igsh=MWV1Mjh6OGxlZWZnYg%3D%3D",
    image: "images/chicken-enchiladas.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🌎 South American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [
      "Comfort Food",
      "Football"
    ],
    rating: null,
    time: "50 min",
    servings: 8,
    ingredients: [
      "2-2.5 cups shredded chicken (rotisserie chicken works great)",
      "1.5 cups corn (canned, fresh, or frozen — frozen fire roasted corn is great)",
      "2 cups shredded cheddar cheese (a mix of standard and white cheddar)",
      "1/2 red onion, finely diced",
      "1/4-1/2 cup diced pickled jalapeños (for less heat, swap for a can of green chilis)",
      "1/3 cup plain Greek yogurt",
      "1 lime, juiced",
      "1 tsp cumin",
      "1 tsp chili powder",
      "1 tsp garlic powder",
      "Salt & pepper",
      "8 flour tortillas",
      "12 oz green enchilada sauce",
      "Toppings: diced red onion, cilantro, sour cream, salsa, etc."
    ],
    steps: [
      "Preheat oven to 375°F and grease the bottom of a 9x13 pan with cooking spray.",
      "In a large bowl, add the shredded chicken, corn, 1 cup shredded cheddar cheese, red onion, and pickled jalapeños and mix well to combine.",
      "In a separate bowl, add the Greek yogurt, lime juice, cumin, chili powder, garlic powder, salt, pepper, and 3-4 tbsp of enchilada sauce and whisk until well combined.",
      "Pour the yogurt mixture into the chicken and mix until well combined.",
      "Add 3-4 tbsp of enchilada sauce to the bottom of the pan. Add 3-4 tbsp of the chicken filling to each tortilla, roll tightly, and place seam side down in the pan. Repeat with the rest of the tortillas.",
      "Pour the remaining enchilada sauce over the tortillas, top with the remaining cup of cheese, and bake for 35 minutes or until the cheese is golden brown.",
      "Top with diced red onion and fresh cilantro and ENJOY!"
    ]
  },
  {
    id: "chicken-noodle-soup",
    title: "Chicken Noodle Soup",
    sourceUrl: "https://tastesbetterfromscratch.com/chicken-noodle-soup/",
    image: "images/chicken-noodle-soup.jpg",
    category: [
      "🍜 Soup",
      "🍝 Dinner"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "❄️ Winter",
      "🍂 Fall"
    ],
    status: "Favorite",
    tags: [
      "Healthy",
      "Meal Prep"
    ],
    rating: 5,
    time: "1 hr 30 min",
    servings: 8,
    ingredients: [
      "1/2 Tablespoon butter",
      "2 ribs celery, diced",
      "3-4 large carrots diced",
      "1 clove garlic, minced",
      "10 cups chicken stock, or broth*",
      "1 teaspoon salt, to taste",
      "½ teaspoon freshly ground black pepper , to taste",
      "1/8 teaspoon dried rosemary,or more, to taste",
      "1/8 teaspoon dried sage",
      "1/8 teaspoon crushed red pepper flakes",
      "1 batch homemade egg noodles , or 5 cups dry egg noodles, farfalle or other bite-size pasta",
      "3 cups rotisserie chicken",
      "1 teaspoon better than bouillon chicken flavor , (or more, as needed), or chicken bouillon granules"
    ],
    steps: [
      "Add butter, diced celery, and carrots to a large stock pot over medium-high heat. Saute for 3 minutes. Add garlic and cook for another 30 seconds.",
      "Add chicken stock and season the broth with rosemary, sage, crushed red pepper, and salt (definitely TASTE the broth before adding more salt), and pepper. Taste and add a spoonful of “better than bouillon” chicken or chicken bouillon cubes or granules as needed.",
      "Bring broth to a boil. Add noodles (either uncooked homemade egg noodles, or dry store-bought pasta) and cook just until noodles are al dente.",
      "If using store-bought noodles, be cautious not to overcook them! Remove pot from heat as soon as they are just barely tender. The noodles will continue to cook once you remove the pot from the heat, and you don’t want them mushy.",
      "Add chicken meat from the rotisserie chicken. Taste the broth again and add more seasonings, if needed.",
      "Store leftovers in an airtight container in the refrigerator for 4-5 days, depending on the freshness of the chicken you used"
    ]
  },
  {
    id: "chimichurri",
    title: "Chimichurri",
    sourceUrl: "https://www.aimeemars.com/chimichurri-recipe/",
    image: "images/chimichurri.jpg",
    category: [
      "🫙 Sauces & Dressings"
    ],
    cuisine: [
      "🌎 South American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [],
    rating: 4,
    time: "15 min",
    servings: 16,
    ingredients: [
      "3 garlic cloves, minced",
      "1 shallot, chopped",
      "1 tbsp red wine vinegar",
      "1 tbsp fresh squeezed lemon juice",
      "1/2 cup fresh parsley, packed",
      "1/2 cup fresh basil leaves, packed",
      "1/4 cup fresh cilantro leaves, packed",
      "1/4 cup extra virgin olive oil",
      "1/2 tsp ground coriander",
      "1/2 tsp ground cumin",
      "1/2 tsp salt"
    ],
    steps: [
      "Combine the minced garlic, chopped shallot, red wine vinegar, and lemon juice in a small bowl and let marinate for 10 minutes.",
      "Finely chop the parsley, basil, and cilantro. Place the garlic mixture and the chopped greens into a food processor or blender and add the olive oil. Pulse two to three times, but don’t over blend. Stir in the coriander, cumin, and salt."
    ]
  },
  {
    id: "cottage-cheese-pizza-crust",
    title: "Cottage Cheese Pizza Crust",
    sourceUrl: "https://www.instagram.com/reel/DHGGmj_JiFL/?igsh=MXg5OHo5OWhlMTZqcQ==",
    image: "images/cottage-cheese-pizza-crust.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🇮🇹 Italian"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall"
    ],
    status: "Favorite",
    tags: [
      "Comfort Food",
      "Healthy",
      "Meal Prep"
    ],
    rating: 5,
    time: "40 min",
    servings: 6,
    ingredients: [
      {
        group: "Crust",
        items: [
          "2 eggs",
          "1 cup cottage cheese",
          "60g flour"
        ]
      },
      {
        group: "Pizza Topping Options",
        items: [
          "Pepperoni",
          "Sausage",
          "Black Olive",
          "Red Onion",
          "Cherry Tomatoes",
          "Spinach",
          "Artichoke Hearts",
          "Banana Peppers"
        ]
      },
      {
        group: "Sauce Options",
        items: [
          "Marinera",
          "Pesto",
          "White Pizza (garlic, olive oil, ricotta / goat cheese)"
        ]
      }
    ],
    steps: [
      "Mix all of the crust ingredients and then spread into a circle on a baking sheet with parchment paper",
      "Bake the crust in the oven at 350 degrees Fahrenheit for 20 - 25 minutes until it is golden",
      "Once the crust is golden, take it out and add all of the toppings",
      "Put the pizza back in the oven for another 10 minutes or so"
    ]
  },
  {
    id: "crostinis",
    title: "Crostini’s",
    sourceUrl: "https://www.allrecipes.com/recipe/16670/crostini-demily/",
    image: "images/crostinis.jpg",
    category: [
      "🍟 Apps & Sides"
    ],
    cuisine: [
      "🇮🇹 Italian"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [
      "Football",
      "Meal Prep",
      "Watch Parties"
    ],
    rating: 5,
    time: "20 min",
    servings: 16,
    ingredients: [
      "1 day-old French baguette",
      "¼ cup butter, softened",
      "3 cloves garlic, chopped",
      "1 tablespoon olive oil"
    ],
    steps: [
      "Gather all ingredients. Preheat the oven to 375 degrees F (190 degrees C).",
      "Slice the baguette crosswise into 1/4-inch thick slices.",
      "Mix butter, garlic, and olive oil in a small bowl until combined. Spread butter mixture on one side of each slice of bread.",
      "Arrange bread slices, butter-side up, in a single layer on an ungreased cookie sheet.",
      "Bake in the preheated oven until lightly toasted and hard, about 8 to 10 minutes"
    ]
  },
  {
    id: "garlic-parmesan-chicken-tenders",
    title: "Garlic Parmesan Chicken Tenders",
    sourceUrl: "",
    image: "images/garlic-parmesan-chicken-tenders.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [
      "Football",
      "Watch Parties"
    ],
    rating: null,
    time: "30 min",
    servings: 4,
    ingredients: [
      {
        group: "Tenders",
        items: [
          "Chicken breast",
          "1 tbsp garlic powder",
          "1 tbsp onion powder",
          "1 tbsp black pepper",
          "2 tbsp chicken bouillon powder",
          "1-2 tsp cayenne (optional)",
          "2 tbsp cornstarch",
          "1 egg",
          "Cornflakes",
          "Melted butter, for brushing"
        ]
      },
      {
        group: "Garlic Parmesan Sauce",
        items: [
          "1/4 cup parmesan cheese",
          "1/2 cup cottage cheese",
          "1/2 cup light mayo",
          "4 tbsp butter, melted",
          "2-5 garlic cloves, minced"
        ]
      }
    ],
    steps: [
      "Cut the chicken breast into tenders of your desired size.",
      "In a medium mixing bowl, add the seasonings, chicken strips, cornstarch, and egg. Mix.",
      "In a zip lock bag, crush the cornflakes until they're like bread crumbs.",
      "Coat each chicken strip in the cornflakes, then place on the rack in the air fryer.",
      "Melt some butter and lightly brush it over the chicken.",
      "Air fry for 13-15 minutes at 350°F.",
      "While the chicken cooks, mix the sauce: parmesan, cottage cheese, light mayo, melted butter, and garlic.",
      "Pull the chicken out and coat it in the sauce or use it for dipping."
    ]
  },
  {
    id: "greek-chicken-thighs",
    title: "Greek Chicken Thighs",
    sourceUrl: "",
    image: "images/greek-chicken-thighs.jpg",
    category: [
      "🥩 Protein"
    ],
    cuisine: [
      "🇬🇷 Greek"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall"
    ],
    status: "Made",
    tags: [
      "Healthy",
      "Meal Prep"
    ],
    rating: 4,
    time: "4-6 hr (with marinate)",
    servings: 8,
    ingredients: [
      "2 - 3 lbs chicken thighs",
      "1 1/2 tbsp olive oil",
      "1 tbsp smoked paprika",
      "1 tbsp garlic powder",
      "1 tbsb thyme",
      "1/2 tbsp chili flakes",
      "1/2 tsp cumin",
      "1/4 tsp cinnamon",
      "salt",
      "ground pepper",
      "plain yogurt"
    ],
    steps: [
      "Add 2 lbs chicken thighs to a bowl. Drizzle with 1.5 tbsp EVOO and season with 1 tbsp smoked paprika, 1 tbsp garlic powder, 1 tbsb thyme, 1/2 tbsp chili flakes, 1/2 tsp cumin, 1/4 tsp cinnamon, a few pinches salt & ground pepper, 2 tbsp plain yogurt, & juice of 1 lemon.",
      "Mix well, then ideally let this marinate for 4-6hrs, but if you want to make it right away, go ahead.",
      "When you’re ready to eat, bring a pan to medium heat, add 1 tbsp oil, add the chicken (brought up to room temp before cooking), and cook it through on medium heat. I used a cast iron pan and cooked on each side for 4 mins, then cooked on each side for about 1-2 minutes again.",
      "This takes about 10-12 mins depending on thickness.",
      "Sides you can make with it — Starch: Rice, mini potatos, baked potato; Sauce: Greek sauce in “Greek Turkey Burgers”,; Other Sides: Sumac onion salad in “Greek Turkey Burgers”, cucumbers, Dill / Parsley for toppings"
    ]
  },
  {
    id: "greek-turkey-burgers",
    title: "Greek Turkey Burgers",
    sourceUrl: "",
    image: "images/greek-turkey-burgers.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🇬🇷 Greek"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall"
    ],
    status: "Favorite",
    tags: [
      "Healthy",
      "Meal Prep"
    ],
    rating: 5,
    time: "45 min",
    servings: 8,
    ingredients: [
      {
        group: "Burgers",
        items: [
          "1 lb organic ground chicken or turkey",
          "1/4 cup red onion, diced",
          "1-2 stalks green onion, diced",
          "2 tbsp fresh oregano, chopped",
          "1 tbsp garlic, chopped, (2 cloves)",
          "1/4 cup sun-dried tomatoes, chopped",
          "1/4 cup crumbled feta",
          "1/2 cup packed spinach, finely chopped",
          "1/2 tsp sea salt",
          "ground pepper",
          "2 tbsp avocado oil"
        ]
      },
      {
        group: "Sauce",
        items: [
          "1/4 cup plain yogurt",
          "3 tbsp mayo",
          "1/8 to 1/4 cup pickle juice",
          "2 tbsp fresh dill",
          "a small pinch of salt",
          "lots of fresh cracked pepper"
        ]
      },
      {
        group: "Sumac Onion / Tomato",
        items: [
          "juice of 2 lemons",
          "1 large red onion",
          "handful of cherry tomatoes",
          "large handful of fresh flat parsley",
          "2 tbsp of sumac"
        ]
      }
    ],
    steps: [
      "Combine the sliced red onion, quarted / half cherry tomatoes, chopped parsley, lemon juice and sumac. Cover the bowl and place in the fridge to sit. The longer it sits the better",
      "Mix all burger ingredients and form into 4 patties. Add avocado oil to a large skillet on medium heat. Add burgers and cook about 4 - 6 minutes on each side until golden. Can cover to help steam the center",
      "While Burgers are cooking, mix the sauce ingredients in a small bowl or measuring cup. Taste and adjust ingredients as needed",
      "Cook your other sides, add garnishes, and you're good to go — Side ideas: sweet potato, potato wedge fries, avocado, tomato, lettuce, etc."
    ]
  },
  {
    id: "healthy-hamburger-helper",
    title: "Healthy Hamburger Helper",
    sourceUrl: "https://www.eatingbirdfood.com/healthy-hamburger-helper/",
    image: "images/healthy-hamburger-helper.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "❄️ Winter",
      "🍂 Fall"
    ],
    status: null,
    tags: [
      "Comfort Food",
      "Healthy"
    ],
    rating: 5,
    time: "28 min",
    servings: 6,
    ingredients: [
      "1 tablespoon olive oil",
      "1 medium yellow onion, chopped",
      "2 garlic cloves, minced",
      "1 lb lean ground beef (85/15 blend)",
      "1/2 teaspoon ground black pepper",
      "1/2 teaspoon fine sea salt, plus more to taste",
      "1 teaspoon paprika",
      "1 teaspoon oregano",
      "1/2 teaspoon chili powder",
      "2 heaping tablespoons tomato paste",
      "2 cups beef or chicken broth",
      "2 cups whole milk (or dairy-free alternative)",
      "8 oz dry macaroni noodles or small shells",
      "2 cups shredded mild cheddar cheese",
      "Fresh parsley, for serving"
    ],
    steps: [
      "Heat oil in a large, deep skillet or Dutch oven over medium heat. Add onion and garlic and saute 3-4 minutes, until fragrant.",
      "Add ground beef and season with salt and pepper. Cook 7-8 minutes until cooked through, breaking it up as it browns. Drain excess fat if needed.",
      "Add the spices, tomato paste, broth, and milk. Stir in the dry pasta.",
      "Bring to a gentle boil over medium heat. Cook 8-12 minutes, stirring often, until the pasta is al dente and the liquid has mostly absorbed.",
      "Remove from heat and stir in the cheese. Let rest 1-2 minutes until melted, then toss to combine.",
      "Serve immediately topped with fresh parsley."
    ]
  },
  {
    id: "instant-pot-beef-stew",
    title: "Instant Pot Beef Stew",
    sourceUrl: "https://www.wellplated.com/instant-pot-beef-stew/#wprm-recipe-container-32647",
    image: "images/instant-pot-beef-stew.jpg",
    category: [
      "🍜 Soup"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "❄️ Winter",
      "🍂 Fall"
    ],
    status: "Made",
    tags: [
      "Insta Pot",
      "Meal Prep"
    ],
    rating: 5,
    time: "1 hr 30 min",
    servings: 8,
    ingredients: [
      "2 pounds boneless chuck roast",
      "3 tablespoons extra-virgin olive oil divided",
      "2 teaspoons kosher salt divided",
      "½ teaspoon ground black pepper divided",
      "1 large yellow onion",
      "2 cloves garlic",
      "1 pound carrots, about 6 medium",
      "1 large russet potato* (see note)",
      "1 can low-sodium beef broth (14.5-ounces)",
      "1 tablespoon Worcestershire sauce**",
      "1 bay leaf",
      "1 teaspoon dried thyme",
      "1 can no-salt-added tomato sauce (8 ounces)",
      "2 tablespoons cornstarch** (see note)",
      "2 tablespoons water",
      "1 ½ cups fresh or frozen peas no need to thaw",
      "Fresh parsley or fresh rosemary, optional for serving"
    ],
    steps: [
      "Cut the chuck roast into 1 1/2-inch cubes, removing any large, tough pieces of fat or gristle.",
      "Turn the Instant Pot to SAUTE. Add 1 tablespoon of the oil. Once the oil is hot and shimmering (a drop of water should sizzle if added to the surface of the pot), add half of the beef, 1 teaspoon salt, and 1/4 teaspoon pepper. The cubes should be in a single layer and not too crowded so that they brown nicely. Let the cubes of beef cook undisturbed for 4 to 5 minutes (resist the urge to peek!), until the bottom of the cubes develop a dark-brown crust and come away from the pan easily. Turn and continue searing until dark and brown all over, about 4 additional minutes. Transfer the seared meat to a clean plate or bowl. Add another 1 tablespoon of olive oil to the pot. Once hot, add the remaining beef and remaining 1 teaspoon salt and 1/4 teaspoon pepper. Sear the remaining beef. If the pan gets too dry, add a bit more oil as needed.",
      "While the meat browns, dice the yellow onion. Mince the garlic. Peel the carrots and cut them into 1/2-inch-thick diagonal slices.",
      "Remove the second batch of browned beef to the plate with the first batch. Add the remaining tablespoon of olive oil and the onion to the Instant Pot. Cook, stirring occasionally, until the onion begins to soften and brown, about 6 minutes.",
      "While the onion cooks, scrub and peel the potato and cut it into 3/4-inch chunks. If you haven’t finished cutting the carrots, do so now.",
      "Add the garlic to the Instant Pot. Cook, stirring constantly until fragrant, about 30 seconds. Add the beef broth and use a spoon to scrape the brown bits from the bottom of the pan. Make sure you remove every last bit of stuck-on food so that you don’t receive a “burn” warning.",
      "Stir in the carrots, potatoes, Worcestershire sauce, bay leaf, thyme, and the browned beef, along with any meat juices that have collected on the plate. Pour the tomato sauce on top. Do not stir again.",
      "Close and seal the Instant Pot. Cook on high pressure for 35 minutes, then allow the pressure to release naturally for 10 minutes. Vent the steam valve to release any remaining pressure, then carefully open the lid. Remove and discard the bay leaf.",
      "In a small bowl, whisk together the cornstarch and water to create a slurry. Add to the Instant Pot and stir until the stew thickens. Add the peas and stir to warm through. Serve hot, sprinkled with fresh parsley."
    ]
  },
  {
    id: "lasagna-soup",
    title: "Lasagna Soup",
    sourceUrl: "",
    image: "images/lasagna-soup.jpg",
    category: [
      "🍜 Soup",
      "🍝 Dinner"
    ],
    cuisine: [
      "🇮🇹 Italian"
    ],
    season: [
      "❄️ Winter",
      "🍂 Fall"
    ],
    status: "Made",
    tags: [
      "Comfort Food",
      "Meal Prep"
    ],
    rating: 4,
    time: "1 hr",
    servings: 8,
    ingredients: [
      "1/2 lb ground beef",
      "1/2 lb italian sausage",
      "2 - 3 Tbsp Olive oil",
      "1 Yellow onion",
      "2 cloves Garlic",
      "Salt",
      "Pepper",
      "1Tsp Oregano",
      "1 Tsp Thyme",
      "1/2 Tsp Calabrian Chili Flakes",
      "1 15oz can of tomato sauce",
      "32 oz beef bone broth",
      "Pasta",
      "2 cups fresh spinach leaves",
      "10 oz ricotta",
      "1 cup shredded mozzarella cheese",
      "1/2 Parmesan cheese",
      "1/3 - 1/2 cup of cream"
    ],
    steps: [
      "First, we’ll want to finely dice a large yellow onion and dice up 3-4 garlic cloves.",
      "Bring a pot to medium heat, add 2-3 tablespoons olive oil, and sauté the onion and garlic until translucent. Then add a few pinches of salt, fresh cracked pepper, 1 tsp oregano, 1 tsp thyme, and 1/2 tsp Calabrian chili flakes.",
      "Add 1lb of ground beef, then mince it up until browned up and cooked through, about 8-10 minutes.",
      "When it's cooked through, add 1 15oz can of tomato sauce and 32oz of bone broth.",
      "Cover and bring to a simmer; this should take about 6-10 minutes.",
      "Then add your pasta of choice and cook for the time according to its packaging instructions.",
      "2 minutes before the pasta is done, add 1/3 to 1/2 cup cream, 1/3 cup shredded parmesan, 1/3 cup shredded mozzarella, and 1 to 2 tbsp ricotta cheese.",
      "Mix well, taste, and adjust.",
      "This is best served right away. Serve in bowls, top with anything you want, or eat as is. I topped with a touch more cheese, fresh basil, and more Calabrian chili flakes for heat."
    ]
  },
  {
    id: "marinade-oven-pork-tenderloin",
    title: "Marinade + Oven Pork Tenderloin",
    sourceUrl: "https://www.savorynothings.com/pork-tenderloin-marinade/",
    image: "images/marinade-oven-pork-tenderloin.jpg",
    category: [
      "🥩 Protein"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Healthy"
    ],
    rating: 5,
    time: "1 hr 30 min (with marinate)",
    servings: 4,
    ingredients: [
      "1 pork tenderloin",
      "1/4 cup olive oil",
      "2 tbsp soy sauce",
      "2 tbsp honey (mild and runny preferred)",
      "2 tbsp Dijon mustard (smooth, whole-grain, or a mix of both)",
      "1 tbsp brown sugar",
      "1 tbsp lemon juice (fresh or bottled are both fine)",
      "1 tsp Worcestershire sauce",
      "2 cloves garlic, minced",
      "1 tbsp chopped parsley",
      "1/2 tsp garlic powder",
      "1/2 tsp salt",
      "Ground black pepper, to taste"
    ],
    steps: [
      "Combine the marinade ingredients in a measuring jug. Whisk well.",
      "Place the pork tenderloin in a freezer bag and pour the marinade on top. Close the bag well, then lightly massage the marinade into the pork.",
      "Marinate in the fridge for at least 1 hour, and up to 3 days.",
      "Remove the pork tenderloin from the bag, discarding the marinade and bag.",
      "Cook the tenderloin in the oven at 400°F until the internal temperature reaches 145°F."
    ]
  },
  {
    id: "middle-eastern-chicken-and-rice",
    title: "Middle Eastern Chicken and Rice",
    sourceUrl: "",
    image: "images/middle-eastern-chicken-and-rice.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🧆 Middle Eastern"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Made",
    tags: [
      "Healthy",
      "Meal Prep"
    ],
    rating: null,
    time: "45 min (+ 2 hr marinate)",
    servings: 4,
    ingredients: [
      {
        group: "Chicken",
        items: [
          "2 lbs chicken thighs, diced",
          "1 tbsp smoked paprika",
          "1 tbsp garlic powder",
          "1/2 tbsp sumac",
          "1/2 tbsp oregano",
          "1/2 tsp cumin",
          "1/4 tsp cinnamon",
          "A few pinches of salt",
          "Ground pepper",
          "2 tbsp plain yogurt",
          "Juice of 1/2 lemon",
          "1 tbsp avocado oil"
        ]
      },
      {
        group: "Sumac Onions",
        items: [
          "1 large red onion, thinly sliced",
          "2-3 pinches salt",
          "1-2 tbsp sumac",
          "Juice of 1 large lemon"
        ]
      },
      {
        group: "White Sauce",
        items: [
          "3 tbsp mayo",
          "2 tbsp sour cream",
          "3 tbsp white vinegar",
          "A small pinch of salt",
          "Lots of fresh cracked pepper"
        ]
      },
      {
        group: "Bowl",
        items: [
          "Rice (or low-carb rice, cauli rice, or quinoa)",
          "Chicken broth, for cooking the rice (optional)",
          "Shredded iceberg lettuce",
          "Tomato, thinly sliced",
          "Fresh parsley, finely chopped",
          "Hot sauce or sriracha"
        ]
      }
    ],
    steps: [
      "Dice the chicken thighs and add to a bowl. Mix with the smoked paprika, garlic powder, sumac, oregano, cumin, cinnamon, salt, pepper, yogurt, and lemon juice. Mix VERY well, then ideally let it marinate for 2 hours to overnight (or cook right away if you need to).",
      "When you're ready to eat, heat a pan over medium heat, add the avocado oil and the chicken, and cook it through, mixing often with a spatula. This takes about 10-12 minutes depending on the thickness of the chicken.",
      "Make the sumac pickled onions: cut the red onion in half and thinly slice it. Add to a bowl, sprinkle with salt and sumac, and add the lemon juice. Mix well, then let sit for 10-15 minutes, stirring a couple of times.",
      "Get the other veggies ready: thinly slice the lettuce and tomato, and finely chop the parsley.",
      "Make the white sauce by mixing the mayo, sour cream, white vinegar, salt, and lots of cracked pepper. Mix well.",
      "Get your base ready. Use rice, low-carb rice, cauli rice, quinoa, or whatever you like — cooking it in a mix of salted water and chicken broth adds flavor.",
      "Add a serving of rice to the bowl, then the chicken, then pile it high with lettuce, tomato, pickled onions, and fresh herbs. Drizzle with the white sauce and hot sauce or sriracha. ENJOY."
    ]
  },
  {
    id: "spicy-korean-bbq-chicken-bowl",
    title: "Spicy Korean BBQ Chicken Bowl",
    sourceUrl: "https://www.foodbanjo.com/air-fryer-gochujang-chicken-thighs/",
    image: "images/spicy-korean-bbq-chicken-bowl.jpg",
    category: [
      "🍝 Dinner"
    ],
    cuisine: [
      "🇰🇷 Korean"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Healthy",
      "Meal Prep"
    ],
    rating: 5,
    time: "50 min (with marinate)",
    servings: 2,
    ingredients: [
      {
        group: "Chicken",
        items: [
          "4 boneless skinless chicken thighs",
          "3 tbsp gochujang",
          "2 tbsp soy sauce",
          "1 tbsp brown sugar",
          "1 tsp sesame oil",
          "1/2 tsp garlic powder",
          "1/2 tsp onion powder",
          "Green onion (optional)",
          "Sesame seeds (optional)",
          "Oil for the air fryer basket"
        ]
      },
      {
        group: "Korean Cucumber Salad",
        items: [
          "2 large cucumbers, thinly sliced",
          "1/2 red onion, thinly sliced",
          "1/4 cup rice vinegar",
          "1 tbsp sugar",
          "1 tbsp soy sauce",
          "1 tsp sesame oil",
          "1 tsp toasted sesame seeds",
          "1 clove garlic, minced",
          "1/4 tsp chili flakes (optional)",
          "Fresh cilantro, chopped"
        ]
      },
      {
        group: "For Serving",
        items: [
          "Cooked white rice",
          "Kimchi"
        ]
      }
    ],
    steps: [
      "In a large bowl, add the gochujang, soy sauce, brown sugar, sesame oil, onion powder, and garlic powder. Stir until combined.",
      "Add the chicken thighs and mix until coated in the sauce. Cover and marinate in the refrigerator for 30 minutes (up to 2 hours).",
      "While the chicken marinates, start the rice. Thinly slice the cucumbers and red onion and add to a bowl with the rest of the salad ingredients. Stir to combine and let marinate for as long as you can!",
      "Preheat the air fryer for 5 minutes at 400°F. Brush or lightly spray the basket with oil.",
      "Add the chicken thighs to the basket in a single layer. Air fry at 400°F for 13-15 minutes, flipping halfway through.",
      "Serve over rice with the cucumber salad and kimchi, topped with green onion and sesame seeds."
    ]
  },
  {
    id: "spinach-artichoke-dip",
    title: "Spinach Artichoke Dip",
    sourceUrl: "https://www.cookingclassy.com/spinach-artichoke-dip/",
    image: "images/spinach-artichoke-dip.jpg",
    category: [
      "🍟 Apps & Sides"
    ],
    cuisine: [
      "🇺🇸 American"
    ],
    season: [
      "☀️ Summer",
      "❄️ Winter",
      "🌷 Spring",
      "🍂 Fall",
      "🎄 Holiday"
    ],
    status: "Favorite",
    tags: [
      "Comfort Food",
      "Football",
      "Watch Parties"
    ],
    rating: 5,
    time: "45 min",
    servings: 8,
    ingredients: [
      "8 oz. Of cream cheese well softened",
      "1/4 cup of sour cream",
      "1/4 cup mayonnaise",
      "1 Garlic clove minced (1 tsp)",
      "2/3 (76g) finely shredded permesan cheese",
      "1/2 cup 56g finely shredded mozerllla cheese",
      "1 (14oz) can quarter artichoke hearts",
      "6 oz. Frozen spinach, thawed, squeezed to drain excess"
    ],
    steps: [
      "Preheat oven to 350 degrees. Spray a small 1-quart baking dish with non-stick cooking spray",
      "In a mixing bowl, stir together cream cheese, sour cream, mayonnaise, garlic, parmesan, mozzarella, and pepper.",
      "Stir in artichokes and spinach.",
      "Spread mixture evenly into prepared baking dish. Bake in preheated oven until heated through and melty, about 20 minutes.",
      "Serve warm with tortilla chips, crackers, or toasted baguette slices"
    ]
  },
  {
    id: "white-chicken-chili",
    title: "White Chicken Chili",
    sourceUrl: "https://www.instagram.com/reel/C2KekF8ptgd/?igsh=OXAxem5mNjJzOXNi",
    image: "images/white-chicken-chili.jpg",
    category: [
      "🍜 Soup",
      "🍝 Dinner"
    ],
    cuisine: [
      "🌎 South American"
    ],
    season: [
      "❄️ Winter",
      "🍂 Fall"
    ],
    status: "Made",
    tags: [
      "Meal Prep"
    ],
    rating: 5,
    time: "1 hr 15 min",
    servings: 8,
    ingredients: [
      "2 tablespoons extra virgin olive oil",
      "1 medium yellow onion, chopped",
      "4 cloves garlic, minced",
      "1 large jalapeño, seeded, if desired, and chopped",
      "2 teaspoons ground cumin",
      "½ teaspoon smoked paprika",
      "½ teaspoon chili (or Chipotle chili) powder",
      "½ teaspoon ground oregano",
      "½ teaspoon ground coriander",
      "Dash of cayenne pepper or ½ teaspoon red pepper flakes (optional)",
      "kosher salt and black pepper",
      "1½ pounds boneless, skinless, chicken breasts or thighs",
      "6 cups low-sodium chicken broth",
      "8 ounces of cream cheese, at room temperature",
      "½ cup sour cream",
      "2 (15.5 oz) cans of white beans, drained",
      "1 cup salsa Verde",
      "1 (4.5 oz) can dice green chiles",
      "1 cup shredded pepper jack cheese",
      "½ cup fresh cilantro, chopped",
      "avocado, cheese, and sour cream, for serving",
      "lime zest and juice, for serving"
    ],
    steps: [
      "First, we’ll want to finely dice a large yellow onion and dice up 3-4 garlic cloves.",
      "Heat the olive oil in a large pot over medium heat.",
      "Add the onion and cook until fragrant, about 5 minutes.",
      "Stir in the garlic, jalapeno, cumin, paprika, chili powder, oregano, coriander, cayenne (if using), and a pinch each of salt and pepper. Cook 5-10 minutes, until very fragrant.",
      "Add the chicken, then stir in broth. Season with more salt and pepper. Partially cover and simmer over medium-low heat for 20 minutes, until the chicken is cooked through",
      "Pull the chicken out and shred using 2 forks.",
      "Stir in the cream cheese until smooth, then stir in the shredded chicken, white beans, salsa Verde, green chilies, sour cream, and cheese. Cook 5-10 minutes until the cheese is melted.",
      "Remove from the heat and stir in the cilantro. If needed, use butter, milk, and flour tips below.",
      "Ladle the chili into bowls. Top, as desired, with yogurt/sour cream, cheese, avocado, cilantro, and green onions. Zest lime over each bowl."
    ]
  }
];
