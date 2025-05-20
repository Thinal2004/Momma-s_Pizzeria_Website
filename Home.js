const sideBar = document.getElementById("sidebar");
const navBar = document.getElementById("navigation");

function showSidebar(){
    // navBar.style.display = "none";
    sideBar.style.display = "flex";
}

function closeSidebar(){
    // navBar.style.display = "none";
    sideBar.style.display = "none";
}



// Contact us form validation
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("telephone");
const message = document.getElementById("message");
const button = document.getElementById("button");
const form = document.getElementById("contactForm");

const nameError = document.getElementById("nameFeedback");
const emailError = document.getElementById("emailFeedback");
const numberError = document.getElementById("numberFeedback");
const messageError = document.getElementById("messageFeedback");

form.addEventListener('submit',function(e){
    if(nameInput.value.trim() === "" ){
        e.preventDefault();
        nameError.innerHTML = "*this field is required." 
    }
    else{
        nameError.innerHTML = "";
    }

    const email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (email.value.trim() === "")
    {
        e.preventDefault();
        emailError.innerHTML = "*this field is required.";
    }
   
    else if (!email.value.match(email_check))
    {
        e.preventDefault();
        emailError.innerHTML = "*enter a valid email.";
    }
    else{
        emailError.innerHTML = "";
    }

    if (phoneNumber.value.trim() === "")
    {
        e.preventDefault();
        numberError.innerHTML = "*this field is required.";
    }

    else if(!phoneNumber.value.startsWith("+94")){
        e.preventDefault();
        numberError.innerHTML = "*phone number should start with '+94'."
    }

    else if(phoneNumber.value.length !== 12 || !/^\+?\d+$/.test(phoneNumber.value.trim())){
        e.preventDefault();
        numberError.innerHTML = "*enter a valid phone number."
    }

    else{
        numberError.innerHTML = "";
    }

    if (message.value.trim() === "")
    {
        e.preventDefault();
        messageError.innerHTML = "*this field is required.";
    }

    else{
        messageError.innerHTML = "";
    }
})

nameInput.addEventListener('input',function(){
    nameError.innerHTML = "";
})

email.addEventListener('input',function(){
    emailError.innerHTML = "";
})

phoneNumber.addEventListener('input',function(){
    numberError.innerHTML = "";
})

message.addEventListener('input',function(){
    messageError.innerHTML = "";
})

