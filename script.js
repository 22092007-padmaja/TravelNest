
window.onload = function () {
    console.log("Welcome to TravelNest!");
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if(name==="" || email==="" || phone===""){
        alert("Please fill all the fields.");
        return false;
    }

    if(phone.length!=10 || isNaN(phone)){
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    alert("Your booking has been submitted successfully!");
    return true;
}