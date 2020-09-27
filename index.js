let timeZone = 'tsi';

function getTime(timeZone) {
    let date = new Date();
    if (timeZone == "tsi") {
        rawHour = date.getUTCHours() + 3;
        if (rawHour >= 24) {
            hour = rawHour - 24;
        } else {
            hour = rawHour;
        }
    } else if (timeZone == "cet") {
        rawHour = date.getUTCHours() + 2;
        if (rawHour >= 24) {
            hour = rawHour - 24;
        } else {
            hour = rawHour;
        }
    } else {
        hour = date.getHours();
    }
    let min = date.getMinutes();

    let ap = "AM";
    if (hour < 12) {
        ap = "AM";
    } else {
        ap = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#ap").innerHTML = ap;
}
getTime(timeZone);
setInterval(getSec, 1000);

function getSec() {
    let date = new Date();
    let sec = date.getSeconds();
    sec = sec < 10 ? "0" + sec : sec
    document.querySelector("#sec").innerHTML = sec + " ";

}