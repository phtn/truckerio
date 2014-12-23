function minusFive() {
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value > 5) {
        value -= 5;
    } else {
        value = 5;
    }
    document.getElementById('speed').innerHTML = value;
}

function minusOne() {
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value > 5) {
        value -= 1;
    } else {
        value = 5;
    }
    document.getElementById('speed').innerHTML = value;
}

function plusOne() {
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value < 110) {
        value += 1;
    } else {
        value = 110;
    }
    document.getElementById('speed').innerHTML = value;
}

function plusFive() {
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value < 110) {
        value += 5;
    } else {
        value = 110;
    }
    document.getElementById('speed').innerHTML = value;
}



/////////////////


function getDuration() {
    var pDistVal = parseInt(document.getElementById('p-distance').innerHTML);
    var dDistVal = parseInt(document.getElementById('d-distance').innerHTML);

    var speed = parseInt(document.getElementById('speed').innerHTML);

    // DRIVING HOURS

    var hoursToggle = document.querySelector('#tshours');
    if (hoursToggle.checked) {
        var dh = document.getElementById('max-hours');
        var dhVal = dh.innerHTML;
    } else {
        var dh = document.getElementById('min-hours');
        var dhVal = dh.innerHTML;
    }


    var pDura = pDistVal / speed;
    if (pDura > dhVal) {
        var pDuraDays = pDura /= dhVal;
        expandDura(pDura, 'p-duration');
        //document.getElementById('p-duration').innerHTML = pDuraDays;
    } else {

        if (pDura > 1) {
            var fpHour = Math.floor(pDura);
            var decip = (pDura % 1);
            var fpMins = Math.floor(decip * 60);
            //document.getElementById('p-duration').innerHTML = pDura;
            document.getElementById('p-duration').innerHTML = fpHour + "<span>&nbsp;h&nbsp;&nbsp;</span>" + fpMins + "<span>&nbsp;m</span>";
        } else {
            pDura *= 60;
            //document.getElementById('p-duration').innerHTML = pDura;
            document.getElementById('p-duration').innerHTML = Math.round(pDura) + "<span>&nbsp;m</span>";
        }
    }
    var dDura = dDistVal / speed;
    if (dDura > dhVal) {
        var dDuraDays = dDura /= dhVal;
        expandDura(dDura, 'd-duration');
        //document.getElementById('p-duration').innerHTML = pDuraDays;
    } else {

        if (dDura > 1) {
            var fdHour = Math.floor(dDura);
            var decid = (dDura % 1);
            var fdMins = Math.floor(decid * 60);
            document.getElementById('d-duration').innerHTML = dDura;
            //document.getElementById('d-duration').innerHTML = fdHour + "<span>&nbsp;h&nbsp;&nbsp;</span>" + fdMins + "<span>&nbsp;m</span>";
        } else {
            dDura *= 60;
            //document.getElementById('d-duration').innerHTML = dDura;
            document.getElementById('d-duration').innerHTML = Math.round(dDura) + " m";
        }
    }
}

function expandDura(duration, whichSpan) {
    if (duration % 2 !== 0) {
        var numDays = Math.floor(duration),
            deciHours = (duration % 1),
            numHours = (deciHours * 24);
        if (numHours % 2 !== 0) {
            var wholeHour = Math.floor(numHours),
                deciMins = (numHours % 1),
                numMins = (deciMins * 60),
                wholeMins = Math.floor(numMins);
            document.getElementById(whichSpan).innerHTML = numDays + "<span>&nbsp;d&nbsp;&nbsp;</span>" + wholeHour + "<span>&nbsp;h&nbsp;&nbsp;</span>" + wholeMins + "<span>&nbsp;m</span>";
        } else {
            document.getElementById(whichSpan).innerHTML = numDays + "<span>&nbsp;d&nbsp;&nbsp;</span>" + wholeHour + "<span>&nbsp;h&nbsp;&nbsp;</span>";

        }
    } else {
        document.getElementById(whichSpan).innerHTML = duration + "<span>&nbsp;d</span>";
    }
}