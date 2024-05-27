function homeReload() {
  location.reload();
}

function navMenuDisplay() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("dev-name");

  var a = document.getElementById("about");
  var p = document.getElementById("projects");
  var c = document.getElementById("contact")  

  if (x.style.display === "block") {
    x.style.display = "none";
    // y.classList.add("fade-in") /* https://www.w3schools.com/howto/howto_js_add_class.asp */
    y.style.display = "block";
    a.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";

  } else {
    x.style.display = "block";
    // y.className = " bounce"
    y.style.display = "none";
    a.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
  }
}

function homeDisplay() {
  var w = document.getElementById("site-links");
  var y = document.getElementById("dev-name");

  if (w.style.display === "block") {
    w.style.display = "none";
    y.style.display = "block"
  } else {
    w.style.display = "block"
    y.style.display = "none";
  }
}

function aboutDisplay() {
  var w = document.getElementById("site-links");
  var a = document.getElementById("about");

  if (w.style.display === "block") {
    w.style.display = "none";
    a.style.display = "block"
  } else {
    w.style.display = "block"
    a.style.display = "none";
  }
}

function projectsDisplay() {
  var w = document.getElementById("site-links");
  var p = document.getElementById("projects");

  if (w.style.display === "block") {
    w.style.display = "none";
    p.style.display = "block"
  } else {
    w.style.display = "block"
    p.style.display = "none";
  }
}

function contactDisplay() {
  var w = document.getElementById("site-links");
  var c = document.getElementById("contact")

  if (w.style.display === "block") {
    w.style.display = "none";
    c.style.display = "block"
  } else {
    w.style.display = "block"
    c.style.display = "none";
  }
}