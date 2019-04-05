function theTime() {
    var today = new Date();
    var week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var noon;
    var hours = today.getHours();

    if (today.getHours() >= 12) {
        noon = "PM";
    } else noon = "AM";

    if (hours > 12) {
        hours = hours - 12;
    }
    console.log("Today is : " + week[today.getDay()] + ". Current time is : " + hours + " " + noon + " : " + today.getMinutes() +" : "+ today.getSeconds());
}