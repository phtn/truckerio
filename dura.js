function minusFive()
{
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value > 5){ 
        value -= 5;
    }else {
        value = 5;
    }
    document.getElementById('speed').innerHTML = value;
}

function minusOne()
{
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value > 5){
        value -= 1;
    }else {
        value = 5;
    }
    document.getElementById('speed').innerHTML = value;
}

function plusOne()
{
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value < 110){
        value += 1;
    }else {
        value = 110;
    }
    document.getElementById('speed').innerHTML = value;
}

function plusFive()
{
    var value = parseInt(document.getElementById('speed').innerHTML);
    if (value < 110){
        value += 5;
    }else {
        value = 110;
    }
    document.getElementById('speed').innerHTML = value;
}



/////////////////


function getDuration(){
    var pDistVal = parseInt(document.getElementById('p-distance').innerHTML);
    var dDistVal = parseInt(document.getElementById('d-distance').innerHTML);
    
    var speed = parseInt(document.getElementById('speed').innerHTML);
    
    
    var pDura = pDistVal / speed;
    if (pDura  > 1){
        var fpHour = Math.floor(pDura);
        var decip = (pDura % 1);
        var fpMins = Math.floor(decip * 60);
        document.getElementById('p-duration').innerHTML = fpHour + "<span>&nbsp;h&nbsp;&nbsp;</span>" + fpMins + "<span>&nbsp;m</span>";
    } else{
        pDura *= 60;
        document.getElementById('p-duration').innerHTML = Math.round(pDura) + "<span>&nbsp;m</span>";
    }
    
    var dDura = dDistVal / speed;
    if (dDura  > 1){
        var fdHour = Math.floor(dDura);
        var decid = (dDura % 1);
        var fdMins = Math.floor(decid * 60);
        document.getElementById('d-duration').innerHTML = fdHour + "<span>&nbsp;h&nbsp;&nbsp;</span>" + fdMins + "<span>&nbsp;m</span>";
    } else{
        dDura *= 60;
        document.getElementById('d-duration').innerHTML = Math.round(dDura) + " m";
    }
    
}
















