function nextField(event){
    if(event.keyCode == 13 || event.which == 13){
  document.getElementById('fpassword').focus();
    }
    if(femail.value==""){}
}
function LLField(event){
  var pass = document.getElementById('fpassword');
  var message = document.getElementById('error-nwl');
  var goodColor = "#66cc66";
  var badColor = "#ff6666";
    if(event.keyCode == 13 || event.which == 13){
  document.getElementById('fpassword-confirmation').focus();
    }
    if(pass.value.length < 5){
      message.innerHTML = " you have to enter at least 6 digit!"
      message.style.color = badColor;
      return false;
    }else{
      message.innerHTML = "character number ok!"
      message.style.color = goodColor;
    }
    
}
function KKField(event){
    var pass = document.getElementById('fpassword');
    var pass2 = document.getElementById('fpassword-confirmation');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    if(event.keyCode == 13 || event.which == 13){
  document.getElementById('fusername').focus();
    }
    if(pass2.value.length < 5 ){
      message.innerHTML = " you have to enter at least 6 digit!"
      message.style.color = badColor;
      return false;
    }if(pass2.value == pass.value){
      message.innerHTML = "character number ok!"
      message.style.color = goodColor;
    }else{
      message.innerHTML = " These passwords don't match"
      message.style.color = badColor;
    }
    
}

function cek(){
  document.getElementById("femail").required = true;
  document.getElementById("fpassword").required = true;
  document.getElementById("fpassword-confirmation").required = true;
  document.getElementById("fusername").required = true;
        
}