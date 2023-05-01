function sendEmail(){

    Email.send({
        Host : "smtp.gmail.com",
        Username : "rohinmaleywar@gmail.com",
        Password : "delhi@12345",
        To : 'rohinmaleywar@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert("message sent successfully") 
    );
    }

    console.log("hello thakur ")


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

