let employees = [
  {
  "name": "Nicki Minaj",
  "email": "GagCity@gmail.com",
  "position": "COO"
  },
  {
    "name": "Morgan Wallen",
    "email": "OneNightAtATime@yahoo.com",
    "position": "CEO"
  },
  {
    "name": "Jatavia Johnson",
    "email": "CityGirls@aol.com",
    "position": "Manager"
  }
]
let cardContainer = document.getElementById("cardContainer");
for (let i = 0; i < employees.length; i++){
  let card = document.createElement("div");
  card.classList.add("card");
  let cardTitle = document.createElement("h2");
  cardTitle.textContent = employees[i].name;
  let cardBody1 = document.createElement("p");
  cardBody1.textContent = employees[i].email;
  let cardBody2 = document.createElement("p");
  cardBody2.textContent = employees[i].position;
  card.appendChild(cardTitle);
  card.appendChild(cardBody1);
  card.appendChild(cardBody2); 
  cardContainer.appendChild(card);
}

let offices = ["New York", "Las Vegas", "Chicago", "Houston"]
let officeContainer = document.getElementById("myULO");
let officeButton = document.getElementById("bttn1");
officeButton.addEventListener("click", OfficeEvent);
function OfficeEvent(){
  for (let i = 0; i < offices.length; i++){
    let office = document.createElement("li");
    office.classList.add("list-group-item");
    office.textContent = offices[i];
    officeContainer.appendChild(office);
  }
}
