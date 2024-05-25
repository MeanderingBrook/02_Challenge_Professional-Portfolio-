function navMenuDisplay() {
  var x = document.getElementById("siteLinks");
  var y = document.getElementById("splash");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}