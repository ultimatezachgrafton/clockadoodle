let isMilitaryTime = false;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

renderClock();
let btnInterval = setInterval(renderClock, 1000);

const btn = document.getElementById("btn-time-format");
btn.innerHTML = "Click for Military Time";
btn.value = "Standard Time";
btn.addEventListener("click", function(e) {
    if (isMilitaryTime === false) { 
        btn.innerHTML = "Click for Standard Time";
        isMilitaryTime = true;
    } else { 
        btn.innerHTML = "Click for Military Time";
        isMilitaryTime = false;
    };
    renderClock();
});

function renderClock() {
    const today = new Date();

    document.getElementById("h2-date").innerHTML = 
        days[today.getDay()] + ", " +  months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

    const hour = today.getHours();
    const minutes = ('0'+today.getMinutes()).slice(-2);
    const seconds = ('0'+today.getSeconds()).slice(-2);

    if (isMilitaryTime) {
        document.getElementById("h1-clock").innerHTML = 
            `${hour}:${minutes}:${seconds}`;
        return;
    } 
    
    document.getElementById("h1-clock").innerHTML =
        `${hour > 12 ? hour - 12 : hour}:${minutes}:${seconds} ${hour > 12 ? "PM" : "AM"}`;
}