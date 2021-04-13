$(document).ready(function(){

    let currentTime = new Date();

    let currentOffset = currentTime.getTimezoneOffset();

    let ISTTime = new Date(currentTime.getTime());
    let dateObj = new Date();

    // ISTTime now represents the time in IST coordinates
    let hoursIST = ISTTime.getHours()
    let minutesIST = ISTTime.getMinutes()
    let secondsIST = ISTTime.getSeconds()

    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    setInterval(function () {
        // set current time
        $('#currentHour').text(hoursIST );
        $('#currentMinutes').text(minutesIST);

        // let x = "Crafting Interfaces"
        // let iconDest = "accets/img/announcement.gif"

        if (hoursIST > 1) {
            x = "Sleeping 💤"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 7 ) {
            x = "Having Breakfast"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 9) {
            x = "working on Sideprojects"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 11 ) {
            x = "on Lunch Break"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 13) {
            x = "Crafting Interfaces"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 19 ) {
            x = "Listening to Skrillex"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 21) {
            x = "Stuffing Dinner"
            iconDest = "accets/img/announcement.gif"
        }
        if (hoursIST > 23 ) {
            x = "Playing Call of Duty"
            iconDest = "accets/img/announcement.gif"
        }

        if ($('#activity-end').text != x) {
            $('#activity-end').text(x);
        }
        $( '#activity-img' ).attr("src",iconDest);

        document.getElementById("time").innerHTML = hoursIST + ":" + minutesIST + ":" + secondsIST;
        document.getElementById("date").innerHTML = day + "/" + month + "/" + year;

    }, 3000)
});
