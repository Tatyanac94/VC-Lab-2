
let reviews = [
  {
    "reviewerName": "Harry Potter",
    "reviewText": "This product is amazing!",
    "stars": 5
  },
  {
    "reviewerName": "Hermione Granger",
    "reviewText": "I love this product!",
    "stars": 4
  },
  {
    "reviewerName": "Ron Weasley",
    "reviewText": "The product is okay.",
    "stars": 3
  },
  {
    "reviewerName": "Draco Malfoy",
    "reviewText": "This product sucks.",
    "stars": 2
  } 
]

function displayReviews(){
  let reviewContainer = document.getElementById("review-cards");
  for (let i = 0; i < reviews.length; i++){
    let review = document.createElement("div");
    review.classList.add("card");
    let reviewTitle = document.createElement("h2");
    reviewTitle.textContent = reviews[i].reviewerName;
    let reviewBody1 = document.createElement("p");
    reviewBody1.textContent = reviews[i].reviewText;
    let reviewBody2 = document.createElement("p");
    reviewBody2.textContent = reviews[i].stars;
    review.appendChild(reviewTitle);
    review.appendChild(reviewBody1);
    review.appendChild(reviewBody2);
    reviewContainer.appendChild(review);
    }
}
  displayReviews();