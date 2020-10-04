
// 1. If you click on the list item, it toggles the .done  
//class on and off.

// 2. Add buttons next to each list item to delete 
//the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically 
//adds the delete button next to it (hint: be sure to check 
//if new items are clickable too!)


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var numList = document.querySelectorAll("li");


function listLength() {
	return numList.length;
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		var del = document.createElement("button");
		del.innerHTML = "DELETE";
		del.classList.add("delete");
		li.appendChild(del);
		ul.appendChild(li);
		for (var i=0; i < listLength() ;i++) {
			del.classList.add("i");
			li.classList.add("i");
		}

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOut(event) {
	var target = event.target;
	if (target.matches("li")) {
		target.classList.toggle("done");
	}
}

function deleteClick(event) {
	var target2 = event.target
	if (target2.matches(".delete")) {
		target2.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossOut);

ul.addEventListener("click", deleteClick);
