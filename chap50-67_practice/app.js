// Chap # 50   Setting field values


// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//     case "10001" :
//       cityName = "Karachi";
//       break;
//     case "10002" :
//       cityName = "Lahore";
//     break;
//     case "10003" :
//       cityName = "Islamabad";
//       }
//       document.getElementById("city").value = cityName;
//     }


// Chap # 51   Reading and setting paragraph text



// function expandLoris() {
//  var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//  document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }


// Chap # 52   Manipulating images and text


// function makeInvisible() {
//    document.getElementById("ugly").className = "hidden";
// }


// Chap # 53  Swapping images


    // function swapPic() {
    //     document.getElementById("before").src = "profile_pic.png";
    // }
        

// Chap # 54   Swapping images and setting classes

// function swapPic() {
//   var pic = document.getElementById("before");
//   pic.src = "after-pic.jpg";
// }

// function getAddress() {
//   var link = document.getElementById("link1");
//   var address = link.href;
// }
  

// Chap # 55   Setting styles


// function makeBig() {
//   document.getElementById("p1").className += " big";
// }

// function makeBig() {
//   document.getElementById("p1").style.fontSize = "2em";
// }
// function makeBig2() {
//     document.getElementById("p2").style.cssFloat = "left";
// }
// function makeBig3() {
//     document.getElementById("p3").style.color = "red";
// }
// function makeBig4() {
//     document.getElementById("p4").style.visibility = "hidden";
// }
// function makeBig5() {
//     document.getElementById("p5").style.marginLeft = "100px";
// }



// Chap # 56   Target all elements by tag name


// var par = document.getElementsByTagName("p");

// var textInMiddleParagraph = par.innerHTML;
// par.innerHTML = "This SUV is too big.";

// for (var i = 0; i < par.length; i++) {
//   par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }
  
// var pics1 = document.getElementsByTagName("div");
// for (var i = 0; i < div.length; i++) {
//   div[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }
// var pics2 = document.getElementsByTagName("ul");
// for (var i = 0; i < ul.length; i++) {
//   ul[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }

// var pics = document.getElementsByTagName("img");



// Chap # 57  Target some elements by tag name


// var e = document.getElementByID("rules");
// var paragraphs = e.getElementsByTagName("p");

// var t = document.getElementById("table9");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//   cells[i].style.backgroundColor = "pink";
// }


// Chap 58 The DOM

// chap 59 The DOM: Parents and children

// chap 60 The DOM: Finding children

// document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];

// 61 The DOM: Junk artifacts and nodeType

// var nType = targetNode.nodeType;

// 62 The DOM: More ways to target elements

// var targetNode = parentNode.childNodes[0];
// var targetNode = parentNode.firstChild;
// var targetNode = parentNode.lastChild;

// chap 63 The DOM: Getting a target's name

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// nName = target.nodeName;

// chap 64 The DOM: Counting elements

// var parentNode = document.getElementById("d1");
// var nodeList = parentNode.childNodes;

// chap 65 The DOM: Attributes

// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("class");

// var target = document.getElementById("div1");
// var attVal = target.getAttribute("class");

// chap 66 The DOM: Attribute names and values

// var list = document.getElementById("p1").attributes;
// var numOfItems = document.getItemById("p1").attributes.length;

// 67 The DOM: Adding nodes

// var nodeToAdd = document.createElement("p");
// nodeToAdd.setAttribute("class", "regular");
// var imgNodeToAdd = document.createElement("img");
// imgNodeToAdd.setAttribute("border", "1");

