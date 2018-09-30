function validateItems() {
    var cName = document.forms["contact"]["cName"].value;
	var email = document.forms["contact"]["email"].value;
	var phone = document.forms["contact"]["phone"].value;

    if (cName == "") {
        alert("Name must be filled in.");
        return false;
    }
	if (email == "") {
        alert("Email must be filled in.");
        return false;
    }
	if (phone == "") {
        alert("Phone must be filled in.");
        return false;
    }
alert ("Information is valid!")
}
