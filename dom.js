var today = new Date();
var hour;
var minutes;
var seconds;
var meridies;
var timeStandard = "00:00:00 --";
var timeMilitary = "00:00:00";
var btn = document.getElementById("btn-time-format");
var btnInterval = setInterval(incrementStandard, 1000);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

btn.innerHTML = "Click for Military Time", btn.value = "Standard Time", 
    btn.addEventListener("click", changeTimeFormat);

function updateTimeStandard(hour, minutes, seconds) {
    today = new Date();
    hour = today.getHours();
    minutes = ('0'+today.getMinutes()).slice(-2);
    seconds = ('0'+today.getSeconds()).slice(-2);
    if (hour > 12) { meridies="PM"; hour = (hour-12); } else { meridies="AM";}
    getDay();
    return timeStandard = hour + ":" + minutes + ":" + seconds + " " + meridies;
}

function updateTimeMilitary(hour, minutes, seconds) {
    today = new Date();
    hour = today.getHours();
    minutes = ('0'+today.getMinutes()).slice(-2);
    seconds = ('0'+today.getSeconds()).slice(-2);
    getDay();
    return timeMilitary = hour + ":" + minutes + ":" + seconds;
}

function incrementStandard() {
    timeStandard = updateTimeStandard(hour, minutes, seconds);
    document.getElementById("h1-clock").innerHTML = timeStandard;
}

function incrementMilitary() {
    timeMilitary = updateTimeMilitary(hour, minutes, seconds);
    document.getElementById("h1-clock").innerHTML = timeMilitary;
}

function changeTimeFormat() {
    if (btn.value=="Standard Time") { 
        btn.innerHTML = "Click for Standard Time", btn.value = "Military Time" ,
        clearInterval(btnInterval),
        btnInterval = setInterval(incrementMilitary, 1000);
    } else { btn.innerHTML = "Click for Military Time", btn.value = "Standard Time",
        clearInterval(btnInterval),
        btnInterval = setInterval(incrementStandard, 1000);
    };
}

function getDay() {
    document.getElementById("h2-date").innerHTML = days[today.getDay()] + ", " +  months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
}