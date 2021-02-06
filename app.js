// APIs

// Search meal by name
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// List all meals by first letter
// https://www.themealdb.com/api/json/v1/1/search.php?f=a

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=mass")
//   .then((res) => res.json())
//   .then((data) => console.log(data.meals));

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=b")
//   .then((res) => res.json())
//   .then((data) => displayMeals(data.meals));
//!  .then((data) => console.log(data.meals[0].strMeal));

const allMealsDiv = document.getElementById("all-meals");

const showSearchResult = () => {
  allMealsDiv.innerHTML = "";
  const inputValue = document.getElementById("search").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
  // .then((data) => {
  //   for (let i = 0; i < data.meals.length; i++) {
  //     console.log(data.meals[i].strMeal);
  //   }
  // });

  console.log(inputValue);
};

document.getElementById("search").addEventListener("change", showSearchResult);

const displayMeals = (mealName) => {
  mealName.forEach((meal) => {
    // const individualMealDiv = document.getElementsByClassName(
    //   "individual-meal"
    // )[0];
    const individualMealDiv = document.createElement("div");
    individualMealDiv.className = "individual-meal";
    const mealInfo = `
    <img src="${meal.strMealThumb}">
    <h1>${meal.strMeal}</h1>
    `;
    individualMealDiv.innerHTML = mealInfo;
    allMealsDiv.appendChild(individualMealDiv);
    // console.log(meal);
  });
};
