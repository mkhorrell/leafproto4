

filterSelection("all");
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btnContainer2 = document.getElementById("myBtnContainer2");

var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}


function myFunction1() {
  var a = document.getElementById("tsk1");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

function myFunction2() {
  var b = document.getElementById("tsk2");
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";
  }
}

function myFunction3() {
  var c = document.getElementById("tsk3");
  if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";
  }
}

function myFunction4() {
  var debug = document.getElementById("tsk4");
  if (d.style.display === "none") {
    d.style.display = "block";
  } else {
    d.style.display = "none";
  }
}

function myFunction5() {
  var e = document.getElementById("tsk5");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function myFunction6() {
  var f = document.getElementById("tsk6");
  if (f.style.display === "none") {
    f.style.display = "block";
  } else {
    f.style.display = "none";
  }
}

function myFunction7() {
  var g = document.getElementById("tsk7");
  if (g.style.display === "none") {
    g.style.display = "block";
  } else {
    g.style.display = "none";
  }
}

function myFunction8() {
  var h = document.getElementById("tsk8");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction9() {
  var i = document.getElementById("tsk9");
  if (i.style.display === "none") {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
}

function myFunction10() {
  var j = document.getElementById("tsk10");
  if (j.style.display === "none") {
    j.style.display = "block";
  } else {
    j.style.display = "none";
  }
}

function myFunction11() {
  var k = document.getElementById("tsk11");
  if (k.style.display === "none") {
    k.style.display = "block";
  } else {
    k.style.display = "none";
  }
}

function myFunction12() {
  var l = document.getElementById("tsk12");
  if (l.style.display === "none") {
    l.style.display = "block";
  } else {
    l.style.display = "none";
  }
}

function myFunction13() {
  var m = document.getElementById("tsk13");
  if (m.style.display === "none") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
}

function myFunction14() {
  var n = document.getElementById("tsk14");
  if (n.style.display === "none") {
    n.style.display = "block";
  } else {
    n.style.display = "none";
  }
}

function myFunction15() {
  var x = document.getElementById("tsk15");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
