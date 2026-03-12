function validateForm(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let telephone = document.getElementById("telephone").value;

if(username === ""){
alert("Username is required");
return false;
}

if(email === ""){
alert("Email is required");
return false;
}

if(telephone === ""){
alert("Telephone number is required");
return false;
}

alert("Form submitted successfully!");

return true;

}
