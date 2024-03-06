document.getElementById("bttn1").addEventListener("click",CaseEvent)
function CaseEvent() {
  let x = document.getElementById("myH1");
  if (x.style.textTransform == "uppercase") {
    x.style.textTransform = "lowercase";
  } else {
    x.style.textTransform = "uppercase";
  }
}


document.getElementById("bttn2").addEventListener("click",DisplayEvent)
function DisplayEvent() {
  let x = document.getElementById("myUL");
  let terms = ["Version Control", "Git Status", "Git Add", "Git Commit -m", "Git Push", "Git Branch"]
  for (let i = 0; i < terms.length; i++) {
    let li = document.createElement("li");
    li.textContent= terms[i];
    x.appendChild(li);
  } 
}