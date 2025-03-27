document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
  
    //get input from input field
    const mobileNumber = parseInt(document.getElementById("mobile-number").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);
  
    //Validate mobile number & pin number
    if (mobileNumber == 1234 && pinNumber == 123) {
      window.location.href = "/home.html";
    } else {
      alert("Invalid Credential");
    }
  
    console.log(parseInt(mobileNumber), pinNumber);
  });
  