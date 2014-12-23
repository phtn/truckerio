/*
    var ts = document.querySelector('#teamOrSolo');
        ts.addEventListener('change', function(){
    if (ts.checked) {
        document.getElementById('minh').innerHTML = 11;
    } else {
        document.getElementById('minh').innerHTML = 22;
    }
});

*/
function toggle() {
    var button = document.querySelector('#tors');
    if (button) {
        button.addEventListener('core-change', function () {
            if (button.checked) {
                document.getElementById('min-hours').innerHTML = 11;
                document.getElementById('max-hours').innerHTML = 14;
                getDuration();
            } else {
                document.getElementById('min-hours').innerHTML = 22;
                document.getElementById('max-hours').innerHTML = 24;
                getDuration();
            }
        });
    }
}