document.querySelector("#year").textContent = new Date().getFullYear();

function homeReload() {
  location.reload();
}

function navMenuDisplayHome() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("dev-name");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}


// ABOUT Page Scripts

function navMenuDisplayAbout() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("about");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}


// PROJECTS Page Scripts

function navMenuDisplayProjects() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("projects");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}


// RESUME Page Scripts

function navMenuDisplayResume() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("resume");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}


// CONTACT Page Scripts

function navMenuDisplayContact() {
  var x = document.getElementById("site-links");
  var y = document.getElementById("contact");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
