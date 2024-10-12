const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name"); 
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${firstName.value} ${lastName.value} <br> Email: ${email.value} <br> Message: ${mess.value}`;
  
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ralphlaurencerazonable@gmail.com",
    Password: "FDF49797F8E77211DC35C6A02700D12BF296",
    To: 'ralphlaurencerazonable@gmail.com',
    From: "ralphlaurencerazonable@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then((message) => alert(message))
  .catch((error) => console.error("Error sending email:", error));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
