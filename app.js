// <<<<<<<<<<<<<<<<< DATA SET <<<<<<<<<<<<<<<<<
let dishes = [
  {
    id: 1,
    name: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    name: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    name: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    name: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    name: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    name: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    name: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    name: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    name: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    name: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    name: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    name: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    name: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    name: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

  return results;
}

let mexicanFood = findMexicanFood();
console.log("Mexican Foods: ", mexicanFood);

// <<<<<<<<<<<<<<<<< PROBLEMS <<<<<<<<<<<<<<<<<

//1. Create a function that will return all dishes with the cuisine type of "Vegetarian"
//Filter

function findVegetarianFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Vegetarian") {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let vegetarianFood = findVegetarianFood();
console.log("Vegetarian Foods: ", vegetarianFood);

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function findItalianFood() {
  let results = dishes.filter(function (el) {
    if (el.cuisine === "Italian" && el.servings > 5) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let italianFood = findItalianFood();
console.log("Italian Foods with more than five servings: ", italianFood);

//3. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function findMatchingIdAndDishes () {
  let results = dishes.filter(function (el) {
    if (el.servings === el.id) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let matches = findMatchingIdAndDishes();
console.log("Dishes with matching id numbers and serving counts: ", matches);

//4. Create a function that will return only dishes whose serving count is even.
//Filter

function findDishesWithEvenServingCounts () {
  let results = dishes.filter(function (el) {
    if (el.servings % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

let evens = findDishesWithEvenServingCounts ();
console.log("Dishes with even serving counts: ", evens);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function findTomatoAndCheeseDishes (dishes) {
  return dishes.filter(dish => dish.ingredients.includes("tomato") && dish.ingredients.includes("cheese"));

}

let tomatoandcheese = findTomatoAndCheeseDishes (dishes);
console.log("Dishes with tomato and cheese: ", tomatoandcheese);

//6. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map

function getCuisineTypes (dishes) {
  return dishes.map(dish => dish.cuisine).filter((cuisine, index, self) => self.indexOf(cuisine) === index)
}

let cuisinetypes = getCuisineTypes (dishes);
console.log("Cuisine types: ", cuisinetypes);

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map

function addCuisineTypeToDishName (dishes) {
  return dishes.map(dish => `${dish.cuisine} ${dish.name}`);
}

let typetoname = addCuisineTypeToDishName(dishes);
console.log("Modified dishes: ", typetoname);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. 
//This function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function appendCuisineAndFilterVegetarian(callback) {
  let vegetarianMeals = dishes.filter(function(dish){
    if (callback(dish.cuisine)){
      return true;
    }
  }).map(function(dish){
    return `${dish.cuisine} ${dish.name}`
  })
  return vegetarianMeals;
}

function determineVegetarian(cuisine){
    if(cuisine === "Vegetarian"){
      return true;
    }
}

let vegetarianMeals = appendCuisineAndFilterVegetarian (determineVegetarian);
console.log("Vegetarian dishes: ", vegetarianMeals);

// <<<<<<<<<<<<<<<<< BONUS <<<<<<<<<<<<<<<<<
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not need to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

//12. Revisit your solution for Problem 6.  Use the filter method to eliminate duplicate cuisine types, leaving only distinct values in the array.
