
function submitForm() {

	/*
	===NAME===
	*/
	var first = document.getElementById("first").value
	var last = document.getElementById("last").value
	var newUserName = document.getElementById("newUserName")
		newUserName.innerHTML = "Welcome, " + first + " " + last

	/*	
	===GENDER===
	*/
	var gender = document.getElementsByClassName("user-gender")
	var userGender
	//loop through all elements with user-gender class
	for(i = 0; i < gender.length; i++) {
		if(gender[i].checked) {
			userGender = gender[i].value
		}
	}

	var newUserGender = document.getElementById("newUserGender")
		newUserGender.innerHTML = "Gender: " + userGender

	/*
	===EMAIL===
	*/
	var email = document.getElementById("email").value
	var newUserEmail = document.getElementById("newUserEmail")	
		newUserEmail.innerHTML = "Email: "+ email

	/*
	===PHONE===
	*/
	var phone = document.getElementById("phone").value
	var newUserPhone = document.getElementById("newUserPhone")
		newUserPhone.innerHTML = "Phone: " + phone

	/*
	===COLOR===
	*/
	var color


// hide new profile form
	document.getElementById('main').style.display = "none";
	// display updated profile data
	document.getElementById('newUser').style.display = "block";
	


};