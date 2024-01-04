// Contact send working //
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const description = document.getElementById("description");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> phone: ${phone.value}<br> Subject: ${subject.value}<br> Description: ${description.value}`;

    Email.send({
      SecureToken : "a5b9a5c2-d7b0-471a-a5ce-c0f1ebe6d2f6",
      To : 'triostone0102@gmail.com',
      From : "triostone0102@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Email sent successfully!",
          icon: "success"
        });
        
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const contact__input of items) {

    if (contact__input.value == "") {
      contact__input.classList.add("error");
      contact__input.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    // if (items[1].value != "") {
    //   checkPhone();
    // }

    // items[1].addEventListener("keyup", () => {
    //   checkPhone();
    // });

    contact__input.addEventListener("keyup", () => {
      if (contact__input.value != "") {
        contact__input.classList.remove("error");
        contact__input.parentElement.classList.remove("error");
      }
      else {
        contact__input.classList.add("error");
        contact__input.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z])(\.[a-z])?$/;

  // ^[a-zA-Z0-9_+&*-]+(?:\\."+"[a-zA-Z0-9_+&*-]+)*@"+"(?:[a-zA-Z0-9-]+\\.)+[a-z"+"A-Z]{2,7}$

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
  }
  else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

// function checkPhone() {
//   const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

//   if (!phone.value.match(phoneRegex)) {
//     phone.classList.add("error");
//     phone.parentElement.classList.add("error");
//   }
//   else {
//     phone.classList.remove("error");
//     phone.parentElement.classList.remove("error");
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !description.classList.contains("error")) {
    
    sendEmail();

    form.reset();
    return fetch;
  }
});