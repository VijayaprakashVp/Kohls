function signin() {
    // e.preventDefault();

    // let myForm = document.getElementById("myForm");

    let email = document.getElementById('email').value;
        // console.log('email:', email);
        let password = document.getElementById('password').value;
        // console.log('password:', password);


    let all_users = JSON.parse(localStorage.getItem("users"));
    let flag = 0;

    all_users.forEach(function (user) {
      if (email === user.email && password === user.password) {
        window.location.href = "index.html";
        alert("Logged in");
        flag = 1;
      }
    });

    if (flag == 0) {
      alert("Invalid Credintial");
    }
  }