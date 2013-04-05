// Generated by CoffeeScript 1.6.1
(function() {
  var inpXE, inpYE, inpZE, objE, rotx, roty, rotz, updateOrientation;

  rotx = 12;

  roty = -12;

  rotz = 22;

  objE = document.getElementsByClassName("OBJECT")[0];

  inpXE = document.getElementsByName("rotateX")[0];

  inpYE = document.getElementsByName("rotateY")[0];

  inpZE = document.getElementsByName("rotateZ")[0];

  updateOrientation = function() {
    var s;
    s = "rotateX(" + rotx + "deg) rotateY(" + roty + "deg) rotateZ(" + rotz + "deg)";
    objE.style["-webkit-transform"] = s;
    return objE.style["transform"] = s;
  };

  inpXE.onchange = function(e) {
    rotx = parseInt(e.target.value);
    updateOrientation();
    return "false";
  };

  inpYE.onchange = function(e) {
    roty = parseInt(e.target.value);
    updateOrientation();
    return "false";
  };

  inpZE.onchange = function(e) {
    rotz = parseInt(e.target.value);
    updateOrientation();
    return "false";
  };

  updateOrientation();

}).call(this);
