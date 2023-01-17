

var given_date = new Date("Jan 5, 2024 7:37:25").getTime();

var x = setInterval(function () {

    now = new Date().getTime();
    var diff = given_date - now;

    var hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hr + ":"+ min + ":" + sec + "    Left";


    if (diff < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
