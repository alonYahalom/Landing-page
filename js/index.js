window.onload = () => {
  const form = document.getElementById("id_form");
  form.addEventListener("submit", formValid);
};

formValid = (e) => {
  e.preventDefault();
  console.log(e);
  let fullName = document.getElementById("id_fullName").value;
  let email = document.getElementById("id_email").value;
  let phone = document.getElementById("id_phone").value;
  let fullName_error = document.getElementById("id_fullName_error");
  let phone_error = document.getElementById("id_phone_error");
  let email_error = document.getElementById("id_email_error");

  if (fullName.length < 3) {
    fullName_error.innerHTML = "(Must contain at least 3 letters)";
  } else if (phone.length < 8 || phone.length > 10) {
    phone_error.innerHTML = "(Must contain at least 8 to 10 numbers)";
  } else if (email.length < 5) {
    email_error.innerHTML = "(Must contain at least 5 letters)";
  } else {
    window.location = "./thank.html";
  }
};
