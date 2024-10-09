document.getElementById("ingredientForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ingredients = {
    ingredient1: document.getElementById("ingredient1").value,
    ingredient2: document.getElementById("ingredient2").value,
    ingredient3: document.getElementById("ingredient3").value,
  };

  fetch("/searchCocktails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ingredients),
  })
    .then((response) => response.json())
    .then((data) => {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = ""; // Clear previous results

      data.forEach((cocktail) => {
        let ingredientsHtml = "";

        for (let i = 1; i <= 15; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          if (ingredient) {
            ingredientsHtml += `<p>${measure ? measure : ""} ${ingredient}</p>`;
          }
        }

        resultsDiv.innerHTML += `
            <div>
              <h3>${cocktail.strDrink}</h3>
              <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
              <p><strong>Category:</strong> ${cocktail.strCategory}</p>
              <p><strong>Glass:</strong> ${cocktail.strGlass}</p>
              <p><strong>Alcoholic:</strong> ${cocktail.strAlcoholic}</p>
              <p><strong>Ingredients:</strong></p>
              ${ingredientsHtml}
              <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
            </div>
          `;
      });
    })
    .catch((error) => console.error("Error fetching cocktails:", error));
});
