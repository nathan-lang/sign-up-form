function getDetails() {
  let password = document.getElementById("password").value;
  let cpw = document.getElementById("confirm").value;
  if (password != cpw) {
    alert("Enter the same password in 'Confirm Password'");
  }
  console.log(password);
}
