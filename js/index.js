var today = new Date();
var time = today.getHours();

console.log(time);

if(time>=6 && time<12){
  document.querySelector(".greeting").innerHTML="Good Morning!";
}

else if(time>=12 && time<17 ){
  document.querySelector(".greeting").innerHTML="Good Afternoon!";
}

else {
  document.querySelector(".greeting").innerHTML="Good Evening!";
}
