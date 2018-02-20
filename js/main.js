const div = document.querySelector(".one.two").style.backgroundColor = "red";
const newDIV = document.createElement("DIV");
document.body.appendChild(newDIV)
newDIV.id = "temp";
const newH1 = document.createElement("H1");
newH1.textContent = "sometext";
newDIV.appendChild(newH1);
const newDiv2 = document.createElement("DIV");
newDiv2.id = "alsotemp";
const newerH1 = document.createElement("H1");
const newestH1 = document.createTextNode("some more text");
newerH1.appendChild(newestH1);
newDiv2.appendChild(newerH1);

function swapAttr() {
  let imageTag = document.querySelector("IMG");
  if (imageTag.alt === "lion") {
    imageTag.alt = "tiger";
    imageTag.src = "img/tiger.jpg";
  } else {
    imageTag.alt = "lion";
    imageTag.src = "img/lion.jpg";
  }
}
