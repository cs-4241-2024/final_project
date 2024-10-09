document.addEventListener("DOMContentLoaded", () => {
  const ingredientSelects = document.querySelectorAll(".ingredient-select");

  // Function to populate ingredients dropdowns
  function populateIngredients() {
    const ingredients = [
      "Light rum",
      "Lime",
      "Sugar",
      "Mint",
      "Soda water",
      "Bourbon",
      "Angostura bitters",
      "Gin",
      "Campari",
      "Sweet Vermouth",
      "Tequila",
      "Triple sec",
      "Lime juice",
      "Salt",
      "Vodka",
      "Ginger ale",
      "Apricot brandy",
      "Pineapple juice",
    ];

    ingredientSelects.forEach((select) => {
      ingredients.forEach((ingredient) => {
        const option = document.createElement("option");
        option.value = ingredient;
        option.textContent = ingredient;
        select.appendChild(option);
      });
    });
    M.FormSelect.init(ingredientSelects);
  }

  populateIngredients();
});

document
  .getElementById("ingredient-submit")
  .addEventListener("click", async () => {
    const selectedIngredients = Array.from(
      document.querySelectorAll(".ingredient-select")
    )
      .map((select) => select.value.trim())
      .filter(Boolean);

    console.log("Selected ingredients:", selectedIngredients);

    const response = await fetch(
      `/api/cocktails?ingredients=${selectedIngredients.join(",")}`
    );
    const cocktails = await response.json();
    console.log("Cocktails returned:", cocktails);
    displayCocktailList(cocktails);
  });

// Display the cocktails matching the ingredients
function displayCocktailList(cocktails) {
  const cocktailList = document.getElementById("cocktail-list");
  cocktailList.innerHTML = cocktails
    .map(
      (cocktail) => `
    <li>
      <h3>${cocktail.strDrink}</h3>
      <p>Ingredients: ${[
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
      ]
        .filter(Boolean)
        .join(", ")}</p>
    </li>
  `
    )
    .join("");
}
