document.getElementById("form").addEventListener("click", (e) => {
  e.preventDefault();
});
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateName(name) {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
}

let verifyPass = (pass) => {
  const passRegEx = /[a-zA-Z0-9 \!\@\#\$\%\*\,\.\<\>]+/;
  if (pass.length > 8 && pass.length < 20) {
    return passRegEx.test(pass);
  } else {
    return false;
  }
};
let button = document.getElementById("btnSubmit");
button.addEventListener("click", () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let pass = document.getElementById("pass");
  console.log(name.value)
  if (name.value.length < 4 || !validateName(name.value)) {
    alert("Invalid Name");
  }
  if (!validateEmail(email.value)) {
    alert("Invalid email");
  }
  if (phone.value.length < 10) {
    alert("Invalid Phone Number");
  }
  if (!verifyPass(pass.value)) {
    alert("Invalid Password");
  }

  let newUser = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    pass: pass.value
  };
  console.log(name.value)
  fetch('http://localhost/ku_24_lab_backend/Ass2_backend/get.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(res=>res.json()).then(data=>{
    console.log(data)
    name.value = "";
    email.value = "";
    phone.value = "";
    pass.value = "";
  })
});
