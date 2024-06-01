document.getElementById("year").innerHTML = new Date().getFullYear();

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

// function homeDisplay() {
//   var w = document.getElementById("site-links");
//   var y = document.getElementById("dev-name");

//   if (w.style.display === "block") {
//     w.style.display = "none";
//     y.style.display = "block"
//   } else {
//     w.style.display = "block"
//     y.style.display = "none";
//   }
// }

// function aboutDisplay() {
//   var w = document.getElementById("site-links");
//   var a = document.getElementById("about");

//   if (w.style.display === "block") {
//     w.style.display = "none";
//     a.style.display = "block"
//   } else {
//     w.style.display = "block"
//     a.style.display = "none";
//   }
// }

// function projectsDisplay() {
//   var w = document.getElementById("site-links");
//   var p = document.getElementById("projects");

//   if (w.style.display === "block") {
//     w.style.display = "none";
//     p.style.display = "block"
//   } else {
//     w.style.display = "block"
//     p.style.display = "none";
//   }
// }

// function contactDisplay() {
//   var w = document.getElementById("site-links");
//   var c = document.getElementById("contact")

//   if (w.style.display === "block") {
//     w.style.display = "none";
//     c.style.display = "block"
//   } else {
//     w.style.display = "block"
//     c.style.display = "none";
//   }
// }


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
