// APIs

// Search meal by name
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// List all meals by first letter
// https://www.themealdb.com/api/json/v1/1/search.php?f=a

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=b")
  .then((res) => res.json())
  .then((data) => displayMeals(data.meals));
//   .then((data) => console.log(data.meals[0].strMeal));

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=mass")
//   .then((res) => res.json())
//   .then((data) => console.log(data.meals));

const displayMeals = (mealName) => {
  mealName.forEach((meal) => {
    console.log(meal.strMeal);
  });
};
