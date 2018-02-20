const div = document.queryselector(".one.two").style.backgroundColor = "red";
const newDIV = document.createElement("DIV");
newDiv.id = "temp";
const newH1 = document.createElement("H1");
newH1.textcontent = "sometext";
newdiv.appendChild(newH1);
const newDiv2 = document.createElement("DIV");
newDiv2.id = "alsotemp";
const newerH1 = document.createElement("H1");
const newerH1 = document.createTextNode("some more text");
newerH1.appendchild(textNode);
newDiv2.appendchild(newerH1);

function swapAttr() {
  let imageTag = document.queryselector("IMG");
  if (imagetag.alt === "lion") {
    imageTag.alt = "tiger";
    imageTag.src = "/img.tiger.jpg";
  } else {
    imageTag.alt = "lion";
    imageTag.src = "img/lion.jpg";
  }


}
