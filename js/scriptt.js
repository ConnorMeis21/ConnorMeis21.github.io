const favteam= document.querySelector("#favteam");

favteam.onclick = function() {
    alert("You say your favorite team!");
};
function greetUser() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
      document.getElementById("message").innerHTML = "Please enter your name.";
    } else {
      document.getElementById("message").innerHTML = "Hello, " + name + "!";
    }
  }
