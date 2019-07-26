
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "off.gif"
  } else {
    pic = "on.gif"
  }
  document.getElementById('myImage').src = pic;
}
