
  $(document).ready(function(){
    $('.container div').mouseover(function(){
      $(this).addClass('flip')
    })
  });
document.querySelector('.unlock-img').addEventListener('click',function()
{
  document.querySelector('.bg-modal').style.display="flex";
});

document.querySelector('.close').addEventListener('click',function(){
  document.querySelector('.bg-modal').style.display="none";
});

var submit =document.getElementById("submit")
submit.onclick= function(){
 
var password =document.getElementById("password").value;
  
  if(password=="hi naman jain"){
    window.location="./next.html";

  }
  else{
    alert("nooo what is the rply?")
  }
}

