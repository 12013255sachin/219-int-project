const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");

genBtn.addEventListener("click", () => genPassword());
copyBtn.addEventListener("click", () => copyPassword());

function genPassword() {
  let chars =
    "0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  passwordLength = 6;
  password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  if(password.match(/\W/)){

    document.getElementById("strength").innerHTML = "Strong password";
    document.getElementById("strength").style.color = "green";

  } else {
    document.getElementById("strength").innerHTML = "Weak password";
    document.getElementById("strength").style.color = "red";


  }
  document.getElementById("password").value = password;


  // if(password.match(passw)){
  //   document.getElementById("strength").innerHTML = "Strong password";
  // }
  // else {
  //   document.getElementById("strength").innerHTML = "Weak password";

  // }


}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}