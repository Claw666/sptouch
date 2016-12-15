var tday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap="AM";nhour=12;}
else if(nhour<12){ap="AM";}
else if(nhour==12){ap="PM";}
else if(nhour>12){ap="PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementsByClassName('hdr-date')[0].innerHTML=""+tday[nday]+" "+nhour+":"+nmin+""+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}