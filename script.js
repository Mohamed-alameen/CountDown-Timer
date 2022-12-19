const days=document.getElementById("days")
const hours=document.getElementById("hours")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")

function updateDate(){
    const currentYear=new Date().getFullYear();
const newYear=new Date(`january 1 ${ currentYear+1}
00:00:00`)

const currentDate=new Date();

const diff=newYear-currentDate;
/*
1000milsec=1sec,
60sec=1min,
60min-1hrs,
24hrs-1day
*/  
var day=Math.floor(diff/1000/60/60/24);
var hrs=Math.floor((diff/1000/60/60)%24);
var min=Math.floor((diff/1000/60)%60);
var sec=Math.floor((diff/1000)%60)

// console.log(day+" "+hrs+" "+min+" "+sec);
days.innerHTML=day<10?"0"+day:day;
hours.innerHTML=hrs<10?"0"+hrs:hrs;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+sec:sec;

}
// updateDate();
setInterval(updateDate,1000)