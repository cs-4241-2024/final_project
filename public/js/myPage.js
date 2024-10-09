document.addEventListener("DOMContentLoaded", function () {
  const collapsibleElems = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibleElems);

  document
    .getElementById("viewReviewsButton")
    .addEventListener("click", fetchAllMyReviews);
});

// Function to fetch all user reviews
function fetchAllMyReviews() {
  fetch("/getMyReviews")
    .then((response) => response.json())
    .then((reviews) => {
      const reviewsCollapsible = document.getElementById(
        "myReviewsCollapsible"
      );
      reviewsCollapsible.innerHTML =
        reviews.length > 0
          ? reviews
              .map(
                (review) => `
          <li>
            <div class="collapsible-header">${review.strDrink} - Rated: ${review.rating}/5</div>
            <div class="collapsible-body">
              <p>${review.reviewText}</p>
              <button class="btn" onclick="editReviewInView('${review._id}', ${review.idDrink})">Edit</button>
              <button class="btn red" onclick="deleteReviewInView('${review._id}', ${review.idDrink})">Delete</button>
            </div>
          </li>
        `
              )
              .join("")
          : "<p>No reviews yet.</p>";

      M.Collapsible.init(document.querySelectorAll(".collapsible"));
    })
    .catch((error) => console.error("Error fetching reviews:", error));
}

function fetchReviews(idDrink) {
  fetch(`/getReviews/${idDrink}`)
    .then((response) => response.json())
    .then((reviews) => {
      const reviewsDiv = document.getElementById(`reviews-${idDrink}`);
      reviewsDiv.innerHTML =
        reviews.length > 0
          ? reviews
              .map(
                (review) => `
                <div>
                  <strong>${review.username}</strong> rated ${review.rating}/5
                  <p>${review.reviewText}</p>
                </div>
              `
              )
              .join("")
          : "<p>No reviews yet. Be the first to add one!</p>";
    })
    .catch((error) => console.error("Error fetching reviews:", error));
}

// Function to edit a review
function editReviewInView(reviewId, idDrink) {
  let newRating = prompt("Enter new rating (1-5):");

  // Validate the rating to ensure it's between 1 and 5
  while (newRating < 1 || newRating > 5 || isNaN(newRating)) {
    newRating = prompt(
      "Invalid rating. Please enter a rating between 1 and 5:"
    );
  }

  const newReviewText = prompt("Enter new review:");

  fetch("/editReview", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reviewId,
      rating: newRating,
      reviewText: newReviewText,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      fetchAllMyReviews();

      M.Collapsible.init(document.querySelectorAll(".collapsible"));
    })
    .catch((error) => console.error("Error editing review:", error));
}

// Function to delete a review
function deleteReviewInView(reviewId, idDrink) {
  if (confirm("Are you sure you want to delete this review?")) {
    fetch("/deleteReview", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviewId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete review");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        fetchAllMyReviews();

        M.Collapsible.init(document.querySelectorAll(".collapsible"));
      })
      .catch((error) => console.error("Error deleting review:", error));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display user's drinks
  fetch("/getMyDrinks")
    .then((response) => response.json())
    .then((drinks) => {
      const myDrinksList = document.getElementById("myDrinksList");
      myDrinksList.innerHTML = drinks
        .map(
          (drink) => `
            <div id="drink-${drink.idDrink}" class="cocktail-item">
              <h4>${drink.strDrink}</h4>
              <button class="btn red" onclick="removeFromMyList(${drink.idDrink})">Remove</button>

              <!-- Collapsible Trigger for Reviews -->
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header">
                    <button class="btn blue" onclick="fetchReviews(${drink.idDrink})">View Reviews</button>
                  </div>
                  <div class="collapsible-body">
                    <div id="reviews-${drink.idDrink}">
                      <p>Click "View Reviews" to see the reviews.</p>
                    </div>
                  </div>
                </li>
              </ul>

              <!-- Review Form -->
              <form class="review-form" onsubmit="submitReview(event, ${drink.idDrink}, '${drink.strDrink}')">
                <label for="rating-${drink.idDrink}">Rating (1-5):</label>
                <input type="number" min="1" max="5" id="rating-${drink.idDrink}" required />
                <textarea id="reviewText-${drink.idDrink}" placeholder="Write your review..." required></textarea>
                <button type="submit" class="btn">Submit Review</button>
              </form>
            </div>
          `
        )
        .join("");

      const collapsibleElems = document.querySelectorAll(".collapsible");
      M.Collapsible.init(collapsibleElems);
    })
    .catch((error) => console.error("Error fetching drinks:", error));
});

let currentUser = null;

// Fetch the logged-in user's information
fetch("/getCurrentUser")
  .then((response) => response.json())
  .then((data) => {
    currentUser = data.username;
    console.log("Logged-in user:", currentUser);
  })
  .catch((error) => console.error("Error fetching current user:", error));

// Submit a review for a drink
function submitReview(event, idDrink, strDrink, context = "drink") {
  event.preventDefault();

  // Check if the user has already written a review for this drink
  fetch(`/getReviews/${idDrink}`)
    .then((response) => response.json())
    .then((reviews) => {
      const userHasReviewed = reviews.some(
        (review) => review.username === currentUser
      );

      if (userHasReviewed) {
        alert("You have already written a review for this drink.");
        return;
      } else {
        const rating = document.getElementById(`rating-${idDrink}`).value;
        const reviewText = document.getElementById(
          `reviewText-${idDrink}`
        ).value;

        // Validate rating input
        if (rating < 1 || rating > 5) {
          alert("Please enter a rating between 1 and 5.");
          return;
        }

        // Post the review to the backend
        fetch("/addReview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idDrink, strDrink, rating, reviewText }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.message);

            if (context === "drink") {
              fetchReviews(idDrink);
            } else if (context === "myReviews") {
              fetchAllMyReviews();
            }

            // Re-initialize collapsibles
            M.Collapsible.init(document.querySelectorAll(".collapsible"));
          })
          .catch((error) => console.error("Error submitting review:", error));
      }
    })
    .catch((error) => console.error("Error fetching reviews:", error));
}

// Function to remove a drink from the user's list
function removeFromMyList(idDrink) {
  if (confirm("Are you sure you want to remove this drink from your list?")) {
    fetch("/removeDrink", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idDrink }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        document.getElementById(`drink-${idDrink}`).remove();
      })
      .catch((error) => console.error("Error removing drink:", error));
  }
}
