// store the vale in the variable
//To create a close button and append(add) to each of the listed item

var myNodeList =
document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//To make sure that when you click on the close button, it hides the current item.

var close =
document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Now to create checked ("mark") symbol whon you click on the list item.
 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("input").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}