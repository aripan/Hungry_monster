const searchOption = document.getElementById("search");
const invalidSearch = document.getElementById("invalid-search");
const individualMealIfo = document.getElementById("individual-meal-info");
const allMealsDiv = document.getElementById("all-meals");

const showSearchResult = () => {
  individualMealIfo.innerHTML = "";
  allMealsDiv.innerHTML = "";

  if (searchOption.value == 0) {
    invalidSearch.innerHTML = `
          <h1>!!!</h1>
          <h1>INVALID SEARCH...</h1>
          <h4>Please write the name properly...</h4>
          `;
  } else {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchOption.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.meals) {
          invalidSearch.innerHTML = `
            <h1>!!!</h1>
            <h1>INVALID SEARCH...</h1>
            <h4>Please write the name properly...</h4>
          `;
        } else {
          invalidSearch.innerHTML = "";
          displayMeals(data.meals);
        }
      });
  }
};

searchOption.addEventListener("change", showSearchResult);

const displayMeals = (mealName) => {
  mealName.forEach((meal) => {
    const individualMealDiv = document.createElement("div");
    individualMealDiv.className = "individual-meal";
    individualMealDiv.innerHTML = `
      <img src="${meal.strMealThumb}">
      <h4>${meal.strMeal}</h4>
    `;
    allMealsDiv.appendChild(individualMealDiv);

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

      window.scrollTo(0, 0);
    });
  });
};
