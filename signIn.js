// let welcomeUser = alert("Welcome To ABC Fruit Shop!!\n Please Login To Proceed..")

// function signIn(){
//     window.location.href = "index.html";
//   }

function pageRedirect() {
  var name = document.getElementById("name");
  var password = document.getElementById("password");
  if (name.value.length === 0 || password.value.length === 0) {
    alert("Please input all fields!!");
    return false;

  }
  window.location.href = "main.html";
}

//    let name = document.getElementById("name");
//    let user = document.getElementById("signIn").innerText;
//    user = name.value;
//    console.log(user)

let name = document.getElementById("name").value;
console.log(name)
//    let user = document.getElementById("signIn").innerText;
//    console.log(user)