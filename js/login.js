// get element
const email = document.getElementById("email");
console.log(email);
const password = document.getElementById("password");

const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value === "femilia@gmail.com") {
    if (password.value === "12345678") {
      alert("Success Login!");
      window.location.href = "../pages/home.html";
    } else {
      alert("Password Salah!");
    }
  } else {
    alert("Email Salah!");
  }
});
