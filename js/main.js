
function submitForm() {

	var title = document.getElementById("newUserTitle")
		title.innerHTML = "New User Profile"

	/*
	===BUSINESS NAME===
	*/
	var business = document.getElementById("business").value
		newBusinessName.innerHTML = business

	/*
	===NAME===
	*/
	var principal = document.getElementById("principal").value
	var title = document.getElementById("title").value
	var newPrincipal = document.getElementById("newPrincipal")
		newPrincipal.innerHTML = "Welcome, " + principal + ", " + title

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
	var regEx = /^[a-z0-9._%-]+@+[a-z0-9.-]+\.[a-z]{2,5}$/
	var emailTest = regEx.test(email)

		if (emailTest === false){
			alert("Please enter a complete email address")
		}  

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
	var color = document.getElementById("color").value
	var newUserColor = document.getElementById("newUserColor")
		newUserColor.innerHTML = "Favorite Color: " + color

	/*
	===CONTINENT===
	*/
	var continent = document.getElementsByClassName("continent")
	var userContinent

	for (i = 0; i < continent.length; i++) {
		if (continent[i].checked) {
			userContinent = continent[i].value
		}
	}

	var newUserContinent = document.getElementById("newUserContinent")
		newUserContinent.innerHTML = "Birth Continent: " + userContinent


// hide new profile form
	document.getElementById('main').style.display = "none";
	// display updated profile data
	document.getElementById('newUser').style.display = "block";


};

