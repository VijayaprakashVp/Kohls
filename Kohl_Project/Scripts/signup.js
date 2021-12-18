function signUp() {
  // alert("Hey!");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let F_name = document.getElementById("F_name").value;
  let L_name = document.getElementById("L_name").value;

  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }
  let user = {
    email,
    password,
    L_name,
    F_name,
  };
  if (email.length != 0) {
    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push(user);

    localStorage.setItem("users", JSON.stringify(arr));

    alert("Account created successfully!");

    window.location.href = "index.html";
  } else if (password.length < 6) {
    alert("Password length is too short");
  }
}
