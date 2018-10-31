function validateForm() {
    var first_name = document.forms["myForm"]["fname"].value;
    var last_name = document.forms["myForm"]["lname"].value;
    var address = document.forms["myForm"]["address"].value;
    if (first_name == "") {
        alert("First Name must be filled out");
        return false;
    }
    if (last_name == "") {
        alert("Last Name must be filled out");
        return false;
    }
    if (address == "") {
        alert("Address must be filled out");
        return false;
    }

    var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i  
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["psw"].value;
    
    if (!check_email.test(email)) {
      alert("You must enter a valid email address");
     }

     if (password.length < 6) {
      alert("Password must be 6 characters long. ");
     }
      return false;
    }


