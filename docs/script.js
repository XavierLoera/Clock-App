const week = ["Sunday","Monday","Tuesday","Wednesday","Tursday","Friday","Saturday"];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var date2 = new Date();
var min2 = 0;
var restTime = 0;
var restBool = false;
var workTime = 0;
const OnLoadDocument = () => {
    for(let i = 0; i < 100; i++) {
        window.clearInterval(i);
    }
    document.getElementById('static').style.display = 'none';
    document.body.style.backgroundColor = 'black';
    setInterval(displayTime,10);
}
const displayTime = () => {

var date = new Date();
var session = document.getElementById('session');
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var dayofMonth = date.getDate();

var h = (date.getHours() > 12) ? date.getHours() - 12: date.getHours();
var m = (date.getMinutes() < 10) ? '0' + date.getMinutes() :  date.getMinutes() ;
var s = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
session.innerHTML = (h >= 12) ? 'PM' : 'AM';
document.getElementById('date').style.display = 'block';
document.getElementById('week').innerHTML = week[day];
document.getElementById('month').innerHTML = months[month];
document.getElementById('day').innerHTML = dayofMonth;
document.getElementById('year').innerHTML = year;

document.getElementById('hours').innerHTML = h;
document.getElementById('minutes').innerHTML = m;
document.getElementById('seconds').innerHTML = s;

};
const countDown = () => {
    //document.getElementById('minutes').innerHTML = work;
    //document.getElementById('seconds').innerHTML = 1;
   

    var now = new Date().getTime();
    var gap = date2 - now;

    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;
    var texthour = (Math.floor((gap % day) / hour) < 10) ? '0' + Math.floor((gap % day) / hour) : Math.floor((gap % day) / hour);
    var textMin = (Math.floor((gap % hour) / min) < 10) ? '0' + Math.floor((gap % hour) / min) : Math.floor((gap 
% hour) / min);
    var textSec = (Math.floor((gap % min) / sec) < 10) ? '0' + Math.floor((gap % min) / sec) : Math.floor((gap % min) / sec);
   
    document.getElementById('hours').innerHTML = texthour;
    document.getElementById('minutes').innerHTML = textMin;
    document.getElementById('seconds').innerHTML = textSec;
    if(document.getElementById('minutes').innerHTML === '00' && document.getElementById('seconds').innerHTML === '00' && !restBool && document.getElementById('hours').innerHTML === '00') {
        document.body.style.backgroundColor = 'darkgreen';
        document.getElementById('minutes').innerHTML = restTime;
        document.getElementById('static').innerHTML = 'Rest';
        min2 = date2.getMinutes() + restTime ;
        date2.setMinutes(min2);
        for(let i = 0; i < 100; i++) {
            window.clearInterval(i);
        }
        setInterval(countDown,10);
        restBool = !restBool;
    }
    if(document.getElementById('minutes').innerHTML === '00' && document.getElementById('seconds').innerHTML === '00' && restBool && document.getElementById('hours').innerHTML === '00') {
        document.body.style.backgroundColor = 'darkred';
        document.getElementById('minutes').innerHTML = workTime;
        document.getElementById('static').innerHTML = 'Work';
        min2 = date2.getMinutes() + workTime ;
        date2.setMinutes(min2);
        for(let i = 0; i < 100; i++) {
            window.clearInterval(i);
        }
        setInterval(countDown,10);
        restBool = !restBool;
    }
}
const pomodoro = (work,rest) => {
    for(let i = 0; i < 100; i++) {
        window.clearInterval(i);
    }
    date2 = new Date();
    min2 = date2.getMinutes() + work ;
    date2.setMinutes(min2);
    restTime = rest;
    workTime = work;
    document.body.style.backgroundColor = 'darkred';
    document.getElementById('static').style.display = 'block';
    document.getElementById('date').style.display = 'none';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('session').innerHTML = '';
    setInterval(countDown,10);
}

 //calls displayTime every 10 milliseconds