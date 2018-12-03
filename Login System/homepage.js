var testData = JSON.parse(sessionStorage.getItem('userData'));

// Onloading function
$(document).ready(function(){
    renderHtml(testData);
});

// Function to dipslay data on profile card
function renderHtml(data) {
    var userName = data.name.first + " " +data.name.last;
    $('.card-title').html(userName.toUpperCase());
    var userPic = data.picture.medium;
    $('.card-image').attr("src",userPic);
}

// Invalidate session on logout
$('.logout').on('click', function(){
    if (sessionStorage.getItem('userData')) {
        sessionStorage.removeItem('userData');
        location.href = "index.html";
    }
});

