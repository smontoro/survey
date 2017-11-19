
function submitForm() {

	var main = document.getElementById("main")
	var first = document.getElementById("first").value
	var last = document.getElementById("last").value
	var pWelcome = document.createElement("p")
		pWelcome.className = "welcome"
		pWelcome.innerHTML = "Welcome, " + first + " " + last

	document.getElementById("main").innerHTML = ""

	main.appendChild(pWelcome)


}