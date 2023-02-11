function checkCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username and password match a set of credentials
    if(username=="") {
      alert("username must not be empty");
      return false;
  }else if(password==""){
      alert("password must be filed");
      return false;
  }else if (password.length<5){
      alert("Password must be more than 5 letter")
      return false;
  }else {
      alert("Log in succesfully");
      return true;
  }
  }