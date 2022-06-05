

setInterval(()=>{

    let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
let ap=document.getElementById('AMPM');

let hr_dot=document.querySelector('.hr_dot')
let min_dot=document.querySelector('.min_dot')
let sec_dot=document.querySelector('.sec_dot')

let hh=document.getElementById('hh')
let mm=document.getElementById('mm')
let ss=document.getElementById('ss')
    
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm=(h>=12)? "PM" : "AM";
    if(h>12){
        h=h-12;
    }
    
    hours.innerHTML=(h<10)? "0"+h+"<br><span>Hours</span>":h +"<br><span>Hours</span>";
    minutes.innerHTML=(m<10)? "0"+m+"<br><span>Minutes</span>":m +"<br><span>Minutes</span>";
    seconds.innerHTML=(s<10)? "0"+s+"<br><span>Seconds</span>":s +"<br><span>Seconds</span>";
    ap.innerHTML=ampm;

    hh.style.strokeDashoffset=440-(440*h)/12;
    mm.style.strokeDashoffset=440-(440*m)/60;
    ss.style.strokeDashoffset=440-(440*s)/60;

    hr_dot.style.transform=`rotate(${h*30}deg)`
    min_dot.style.transform=`rotate(${m*6}deg)`
    sec_dot.style.transform=`rotate(${s*6}deg)`
})

