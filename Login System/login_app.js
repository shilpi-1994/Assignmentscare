// Validation before form submission
var event = document.getElementById('submit');
if(event){
    event.addEventListener("click",function(event){
        Validate(event);
    });
}

    var isValid = true;
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    
    var name_error = document.getElementById('name-error');
    var pass_error = document.getElementById('pass-error');

// Validate Function
function Validate(event){

    event.preventDefault();
    event.stopImmediatePropagation();

    

    if(username.value == ""){
        username.classList.add('error');
        name_error.classList.add('error-field');
        name_error.innerHTML = "Username is required";
        isValid = false;
        
    } else if (username.value.length <= 3){
        username.classList.add('error');
        name_error.classList.add('error-field');
        name_error.innerHTML = "Username must be atleast 3 characters";
        isValid = false;
    } else {
        username.classList.remove('error');
        name_error.innerHTML = "";
        name_error.classList.remove('error-field');
        isValid = true;
    }

    if(password.value.length < 4){
        password.classList.add('error');
        pass_error.classList.add('error-field');
        pass_error.innerHTML = "Password must be atleast 6 characters";
        isValid = false;
        
    } else {
        password.classList.remove('error');
        pass_error.classList.remove('error-field');
        pass_error.innerHTML = "";
        isValid = true;
    }

    //Ajax call to fetch user data from json api 

    if(isValid){
        if(username.value && password.value){
            $.ajax({
                type: 'GET',
                url: "https://randomuser.me/api/?results=5&seed=c358e991b6455dcc",
                contentType: "application/json",
                datatype: "json",

                success: function(response){
                    var data = response.results;
                    if (data && data.length > 0) {
                        // loop through json array object
                        for (var i=0; i < data.length; i++) {
                            if(username.value === data[i].login.username && password.value === data[i].login.password){
                                var userData = {};
                                userData.login = data[i].login;
                                userData.name = data[i].name;
                                userData.picture = data[i].picture;
                                sessionStorage.setItem('userData',JSON.stringify(userData));
                                
                                // load the homepage after fetching json data
                                window.location.href = "homepage.html";
                            }
                        }
                    }
                },
                error: function(){
                    document.getElementById('error').innerHTML = "User not found, please Signup"
                }
            });
        }
    }
}



