
#Globale Variablen
rotx = 12
roty = -12
rotz = 22
objE = document.getElementsByClassName("OBJECT")[0]
inpXE = document.getElementsByName("rotateX")[0]
inpYE = document.getElementsByName("rotateY")[0]
inpZE = document.getElementsByName("rotateZ")[0]

# update Orientation
updateOrientation = ->
	s = "rotateX(#{rotx}deg) rotateY(#{roty}deg) rotateZ(#{rotz}deg)"
	objE.style["-webkit-transform"] = s
	objE.style["transform"] = s

# Listener 
inpXE.onchange = (e) ->
	rotx = parseInt e.target.value
	updateOrientation()
	"false" 

inpYE.onchange = (e) ->
	roty = parseInt e.target.value
	updateOrientation()
	"false" 

inpZE.onchange = (e) ->
	rotz = parseInt e.target.value
	updateOrientation()
	"false" 

updateOrientation()