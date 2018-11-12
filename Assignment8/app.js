var createName = function(first,last){
    return first + " " +last;
}

var askName = function(){

    var first = prompt("Enter your first name");
    var last = prompt("Enter your last name");

    if(first === "Bob" && last == "Jones"){
        var fullName = createName(first,last);
        alert("Your fullname is : "+fullName);
        return fullName;
    }
    else 
        askName();   
}

//var result;
document.getElementById("result").innerHTML = askName();