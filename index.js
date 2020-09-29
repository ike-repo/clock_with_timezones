let timeZone = 'est';

function getTime(timeZone) {
    let date = new Date();
    if (timeZone == "tsi") {
        rawHour = date.getUTCHours() + 3;
    } else if (timeZone == "cet") {
        rawHour = date.getUTCHours() + 2;
    } else {
        rawHour = date.getUTCHours() - 4;
    }
    if (rawHour >= 24) {
        hour = rawHour - 24;
    } else if (rawHour > 12) {
        hour = rawHour - 12;
    } else if (rawHour < 0) {
        hour = rawHour + 12;
    } else {
        hour = rawHour;
    }


    let min = date.getMinutes();

    let ap = "AM";
    if (rawHour < 12 && rawHour > 0) {
        ap = "AM";
    } else {
        ap = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min

    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#ap").innerHTML = ap;
}
getTime(est);
setInterval(getSec, 1000);

function getSec() {
    let date = new Date();
    let sec = date.getSeconds();
    sec = sec < 10 ? "0" + sec : sec
    document.querySelector("#sec").innerHTML = sec + " ";

}