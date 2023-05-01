var eventDate = new Date("May 5, 2023") .getTime();

var x = setInterval( function(){
    var currentDate = new Date();
    var difference = eventDate - currentDate;
    // Calculate days, hours, minutes, seconds

    var s = Math.floor(difference / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    var w = Math.floor(d / 7);

    // get the remaining time

    s %= 60;
    m %= 60;
    h %= 24;

    //  get 0 at the begning

    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;
    h = (h < 10) ? "0" + h : h;
    d = (s < 10) ? "0" + d : d;
    w = (w < 10) ? "0" + w : w;

    // display in html

    document.getElementById("weeks").innerHTML = w;
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    // stop the countdown clock

    if(difference <= 0){
        clearInterval(x);
    }

}, 1000)
