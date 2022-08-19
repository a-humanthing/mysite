function validateName()
{
    var uname=document.getElementById("name").value;
    var regx= "^[A-Za-z][A-Za-z0-9_]{7,29}$";
    if(regx.test(uname))
    {
        document.getElementById("name").style.borderColor="green";
        document.getElementById("check").style.visibility="visible";
        
    }
   else
   {
        document.getElementById("name").style.borderColor="red";
        document.getElementById("check").style.visibility="hidden";
   }
  
   

}
function validateEmail()
{
    var emailV=document.getElementById("email").value;
    var regx = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"; 
    if(regx.test(emailV))
    {
        document.getElementById("id").style.borderColor="green";
        document.getElementById("check").style.visibility="visible";
    }
    else
    {
        document.getElementById("id").style.borderColor="red";
        document.getElementById("check").style.visibility="hidden";
    }
}
function alertMessage()
{
    alert("submitted");
}