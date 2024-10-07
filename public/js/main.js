document.addEventListener("DOMContentLoaded", () => {
  const drinkSelect = document.getElementById("drink-select");
  const ingredientSelect = document.getElementById("ingredient-select");
  const drinkDetails = document.getElementById("drink-details");
  const cocktailList = document.getElementById("cocktail-list");

  // Function to load drinks from MongoDB
  async function loadDrinks() {
    const response = await fetch("/api/cocktails");
    const drinks = await response.json();

    drinks.forEach((drink) => {
      const option = document.createElement("option");
      option.value = drink.name;
      option.textContent = drink.name;
      drinkSelect.appendChild(option);
    });

    // Initialize Materialize Select Dropdown
    M.FormSelect.init(drinkSelect);
  }

  // Load ingredients from the server
  async function loadIngredients() {
    const response = await fetch("/api/ingredients");
    const ingredients = await response.json();
    ingredients.forEach((ingredient) => {
      const option = document.createElement("option");
      option.value = ingredient;
      option.text = ingredient;
      ingredientSelect.appendChild(option);
    });
    M.FormSelect.init(ingredientSelect);
  }

  // Event listener for drink search
  document
    .getElementById("drink-submit")
    .addEventListener("click", async () => {
      const selectedDrink = drinkSelect.value;
      const response = await fetch(`/api/cocktails/${selectedDrink}`);
      const drink = await response.json();
      displayDrinkInfo(drink);
    });

  // Event listener for ingredient search
  document
    .getElementById("ingredient-submit")
    .addEventListener("click", async () => {
      const selectedIngredients = Array.from(
        ingredientSelect.selectedOptions
      ).map((option) => option.value);
      const response = await fetch(
        `/api/cocktails?ingredients=${selectedIngredients.join(",")}`
      );
      const cocktails = await response.json();
      displayCocktailList(cocktails);
    });

  // Event listener to display drink details
  document
    .getElementById("drink-submit")
    .addEventListener("click", async () => {
      const selectedDrink = drinkSelect.value;
      const response = await fetch(`/api/cocktails`);
      const drinks = await response.json();

      const drink = drinks.find((d) => d.name === selectedDrink);

      if (drink) {
        drinkDetails.innerHTML = `
        <h2>${drink.name}</h2>
        <img src="${drink.image}" alt="${drink.name}" style="width:200px;">
        <p>Ingredients: ${drink.ingredients.join(", ")}</p>
        <p>Instructions: ${drink.instructions}</p>
      `;
      }
    });

  // Display cocktails list
  function displayCocktailList(cocktails) {
    cocktailList.innerHTML = cocktails
      .map(
        (cocktail) =>
          `<li><h3>${cocktail.name}</h3><p>${cocktail.ingredients.join(
            ", "
          )}</p></li>`
      )
      .join("");
  }

  // Initialize dropdowns on page load
  loadDrinks();
  loadIngredients();
});
