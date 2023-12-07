let inputvalue = document.getElementById("email");
let button = document.getElementById("button");
let erroemes = document.getElementById("error_message");

button.addEventListener("click", validateError);

function validateError(e) {
  const email = inputvalue.value;

  if (!validateemail(email)) {
    erroemes.innerHTML = "Please provide a valid email address";
    inputvalue.style.borderColor = "red";
  } else {
    erroemes.innerHTML = " ";
    inputvalue.style.borderColor = "    ";
    inputvalue.value = " ";
  }
}
function validateemail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
