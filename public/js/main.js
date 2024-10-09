const ingredients = [
  "151 proof rum",
  "7-Up",
  "Absinthe",
  "Absolut Citron",
  "Absolut Kurant",
  "Advocaat",
  "Ale",
  "Amaretto",
  "Angelica root",
  "Angostura bitters",
  "Anis",
  "Anisette",
  "Apple brandy",
  "Apple cider",
  "Apple juice",
  "Apple schnapps",
  "Apricot brandy",
  "Asparagus",
  "Bacardi",
  "Bailey’s irish cream",
  "Banana",
  "Banana liqueur",
  "Beer",
  "Benedictine",
  "Bitters",
  "Black Sambuca",
  "Blackberry brandy",
  "Blackberry schnapps",
  "Blackcurrant cordial",
  "Blue Curacao",
  "Blueberries",
  "Bourbon",
  "Brandy",
  "Brown sugar",
  "Butter",
  "Butterscotch schnapps",
  "Campari",
  "Carbonated water",
  "Champagne",
  "Chambord raspberry liqueur",
  "Chartreuse",
  "Cherries",
  "Cherry brandy",
  "Cherry Heering",
  "Cherry liqueur",
  "Cherry syrup",
  "Chocolate",
  "Chocolate liqueur",
  "Chocolate syrup",
  "Cider",
  "Cinnamon",
  "Clamato juice",
  "Cloves",
  "Club soda",
  "Cocoa powder",
  "Coconut liqueur",
  "Coconut milk",
  "Coconut rum",
  "Coffee",
  "Coffee brandy",
  "Coffee liqueur",
  "Cognac",
  "Cointreau",
  "Cola",
  "Cold water",
  "Condensed milk",
  "Cranberries",
  "Cranberry juice",
  "Cranberry liqueur",
  "Creme de Banane",
  "Creme de Cacao",
  "Creme de Cassis",
  "Creme fraiche",
  "Crown Royal",
  "Curacao",
  "Dark rum",
  "Demerara Sugar",
  "Drambuie",
  "Dry Vermouth",
  "Dubonnet Rouge",
  "Egg",
  "Egg white",
  "Egg yolk",
  "Espresso",
  "Everclear",
  "Firewater",
  "Frangelico",
  "Galliano",
  "Gin",
  "Ginger",
  "Ginger ale",
  "Ginger beer",
  "Glycerine",
  "Godiva liqueur",
  "Gold rum",
  "Gold tequila",
  "Grand Marnier",
  "Grapefruit juice",
  "Grapefruit",
  "Green Chartreuse",
  "Green Creme de Menthe",
  "Green ginger wine",
  "Grenadine",
  "Guava juice",
  "Guinness stout",
  "Hot Chocolate",
  "Hot Damn",
  "Hot water",
  "Ice",
  "Irish cream",
  "Irish whiskey",
  "Jack Daniels",
  "Jagermeister",
  "Jamaican rum",
  "Jameson Irish whiskey",
  "Jim Beam",
  "Johnnie Walker",
  "Kahlua",
  "Kirschwasser",
  "Kiwi",
  "Kiwi liqueur",
  "Lemon",
  "Lemon juice",
  "Lemon peel",
  "Lemon vodka",
  "Lemon-lime soda",
  "Lemonade",
  "Licorice root",
  "Light cream",
  "Light rum",
  "Lime",
  "Lime juice",
  "Lime vodka",
  "Limeade",
  "Malibu rum",
  "Mango",
  "Mango juice",
  "Maple syrup",
  "Maraschino cherry",
  "Maraschino liqueur",
  "Melon liqueur",
  "Mezcal",
  "Midori melon liqueur",
  "Milk",
  "Mini-snickers bars",
  "Mint",
  "Mint syrup",
  "Mountain Dew",
  "Nutmeg",
  "Orange",
  "Orange bitters",
  "Orange juice",
  "Orange peel",
  "Orange soda",
  "Orange vodka",
  "Ouzo",
  "Papaya",
  "Passion fruit juice",
  "Passion fruit syrup",
  "Peach brandy",
  "Peach nectar",
  "Peach schnapps",
  "Peach Vodka",
  "Peachtree schnapps",
  "Peppermint extract",
  "Peppermint schnapps",
  "Pernod",
  "Pina colada mix",
  "Pineapple",
  "Pineapple juice",
  "Pineapple rum",
  "Pisang Ambon",
  "Port",
  "Powdered sugar",
  "Prosecco",
  "Raisins",
  "Raspberries",
  "Raspberry cordial",
  "Raspberry juice",
  "Raspberry liqueur",
  "Red wine",
  "Ricard",
  "Root beer",
  "Rose",
  "Roses sweetened lime juice",
  "Rum",
  "Rye whiskey",
  "Sake",
  "Salt",
  "Sambuca",
  "Sarsaparilla",
  "Schnapps",
  "Scotch",
  "Sherbet",
  "Sherry",
  "Silver tequila",
  "Sloe gin",
  "Soda water",
  "Sour mix",
  "Southern Comfort",
  "Soy milk",
  "Sprite",
  "Squirt",
  "Strawberries",
  "Strawberry liqueur",
  "Strawberry schnapps",
  "Sugar",
  "Sugar syrup",
  "Sweet and sour",
  "Sweet Vermouth",
  "Tabasco sauce",
  "Tahini",
  "Tia Maria",
  "Tomato juice",
  "Triple sec",
  "Tuaca",
  "Vanilla extract",
  "Vanilla ice-cream",
  "Vanilla schnapps",
  "Vanilla vodka",
  "Vermouth",
  "Water",
  "Whipped cream",
  "Whiskey",
  "White chocolate liqueur",
  "White creme de menthe",
  "White grape juice",
  "White port",
  "White rum",
  "White wine",
  "Wild Turkey",
  "Wine",
  "Worcestershire sauce",
  "Yeast",
  "Yukon Jack",
  "Zima",
];

$(document).ready(function () {
  $(".ingredient-select").each(function () {
    $(this).empty();
    $(this).append('<option value=""></option>');
    ingredients.forEach((ingredient) => {
      $(this).append(`<option value="${ingredient}">${ingredient}</option>`);
    });
  });

  // Initialize Select2 for all ingredient dropdowns
  if (!$.fn.select2.isInitialized) {
    $(".ingredient-select").select2({
      placeholder: "Select an ingredient",
      allowClear: true,
      language: {
        searchPlaceholder: "Type to search ingredients...",
      },
    });
    $.fn.select2.isInitialized = true;
  }

  $(".ingredient-select").on("change", function () {
    setTimeout(triggerSearch, 200);
  });
});

// Function to handle the form submission and search
function triggerSearch() {
  const ingredient1 = document.getElementById("ingredient1").value;
  const ingredient2 = document.getElementById("ingredient2").value;
  const ingredient3 = document.getElementById("ingredient3").value;

  if (ingredient1 || ingredient2 || ingredient3) {
    const ingredients = { ingredient1, ingredient2, ingredient3 };

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
              ingredientsHtml += `<p>${
                measure ? measure : ""
              } ${ingredient}</p>`;
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
  } else {
    console.log("No ingredients selected, skipping search.");
  }
}

// Manual Search
// Populate dropdowns with ingredients and include a default empty option
// ingredients.forEach((ingredient) => {
//   $(".ingredient-select").append(
//     `<option value="">Select an ingredient</option>`
//   );
//   $(".ingredient-select").append(
//     `<option value="${ingredient}">${ingredient}</option>`
//   );
// });

// document.getElementById("ingredientForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const ingredients = {
//     ingredient1: document.getElementById("ingredient1").value,
//     ingredient2: document.getElementById("ingredient2").value,
//     ingredient3: document.getElementById("ingredient3").value,
//   };

//   fetch("/searchCocktails", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(ingredients),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const resultsDiv = document.getElementById("results");
//       resultsDiv.innerHTML = ""; // Clear previous results

//       data.forEach((cocktail) => {
//         let ingredientsHtml = "";

//         for (let i = 1; i <= 15; i++) {
//           const ingredient = cocktail[`strIngredient${i}`];
//           const measure = cocktail[`strMeasure${i}`];
//           if (ingredient) {
//             ingredientsHtml += `<p>${measure ? measure : ""} ${ingredient}</p>`;
//           }
//         }

//         resultsDiv.innerHTML += `
//             <div>
//               <h3>${cocktail.strDrink}</h3>
//               <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
//               <p><strong>Category:</strong> ${cocktail.strCategory}</p>
//               <p><strong>Glass:</strong> ${cocktail.strGlass}</p>
//               <p><strong>Alcoholic:</strong> ${cocktail.strAlcoholic}</p>
//               <p><strong>Ingredients:</strong></p>
//               ${ingredientsHtml}
//               <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
//             </div>
//           `;
//       });
//     })
//     .catch((error) => console.error("Error fetching cocktails:", error));
// });
