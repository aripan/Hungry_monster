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

const searchOption = document.getElementById("search");
const invalidSearch = document.getElementById("invalid-search");
const individualMealIfo = document.getElementById("individual-meal-info");
const allMealsDiv = document.getElementById("all-meals");

const showSearchResult = () => {
  individualMealIfo.innerHTML = "";
  allMealsDiv.innerHTML = "";

  const inputValue = document.getElementById("search").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.meals || inputValue == "") {
        invalidSearch.innerHTML = `<h1>INVALID SEARCH</h1>`;
      } else {
        invalidSearch.innerHTML = "";
        displayMeals(data.meals);
      }
    });
  // .then((data) => {
  //   for (let i = 0; i < data.meals.length; i++) {
  //     console.log(data.meals[i].strMeal);
  //   }
  // });
};

searchOption.addEventListener("change", showSearchResult);

const displayMeals = (mealName) => {
  mealName.forEach((meal) => {
    const individualMealDiv = document.createElement("div");
    individualMealDiv.className = "individual-meal";
    const mealInfo = `
        <img src="${meal.strMealThumb}">
        <h1>${meal.strMeal}</h1>`;
    individualMealDiv.innerHTML = mealInfo;
    allMealsDiv.appendChild(individualMealDiv);
    // console.log(meal);
    individualMealDiv.addEventListener("click", () => {
      individualMealIfo.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h1>${meal.strMeal}</h1>
        <ul>
            <li class="list-item">${meal.strMeasure1} ${meal.strIngredient1}</li>
            <li class="list-item">${meal.strMeasure2} ${meal.strIngredient2}</li>
            <li class="list-item">${meal.strMeasure3} ${meal.strIngredient3}</li>
            <li class="list-item">${meal.strMeasure4} ${meal.strIngredient4}</li>
            <li class="list-item">${meal.strMeasure5} ${meal.strIngredient5}</li>
            <li class="list-item">${meal.strMeasure6} ${meal.strIngredient6}</li>
            <li class="list-item">${meal.strMeasure7} ${meal.strIngredient7}</li>
            <li class="list-item">${meal.strMeasure8} ${meal.strIngredient8}</li>
            <li class="list-item">${meal.strMeasure9} ${meal.strIngredient9}</li>
            <li class="list-item">${meal.strMeasure10} ${meal.strIngredient10}</li>
            <li class="list-item">${meal.strMeasure11} ${meal.strIngredient11}</li>
            <li class="list-item">${meal.strMeasure12} ${meal.strIngredient12}</li>
            <li class="list-item">${meal.strMeasure13} ${meal.strIngredient13}</li>
            <li class="list-item">${meal.strMeasure14} ${meal.strIngredient14}</li>
            <li class="list-item">${meal.strMeasure15} ${meal.strIngredient15}</li>
            <li class="list-item">${meal.strMeasure16} ${meal.strIngredient16}</li>
            <li class="list-item">${meal.strMeasure17} ${meal.strIngredient17}</li>
            <li class="list-item">${meal.strMeasure18} ${meal.strIngredient18}</li>
            <li class="list-item">${meal.strMeasure19} ${meal.strIngredient19}</li>
            <li class="list-item">${meal.strMeasure20} ${meal.strIngredient20}</li>
        </ul>`;

      const ingredientsLists = document.getElementsByClassName("list-item");

      for (let i = 0; i < ingredientsLists.length; i++) {
        if (ingredientsLists[i].innerText) {
          ingredientsLists[
            i
          ].innerHTML = `&#10149; ${ingredientsLists[i].innerText}`;
        }
      }
    });
  });
};
