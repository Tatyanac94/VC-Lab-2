document.getElementById("bttn1").addEventListener("click",ToggleEvent)
function ToggleEvent() {
  let x = document.getElementById("myH1");
  if (x.style.textTransform == "uppercase") {
    x.style.textTransform = "lowercase";
  } else {
    x.style.textTransform = "uppercase";
  }
}

