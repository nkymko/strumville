document.getElementById("form-group").addEventListener("keyup", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email !== "" && password !== "") {
    document.getElementById("login-button").removeAttribute("disabled");
  } else {
    document.getElementById("login-button").setAttribute("disabled", null);
  }
});
