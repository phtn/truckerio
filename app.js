
        
        function getInfo(){
            findMe();
            initialize();
            getDistanceP();
        }
        function findMe() {
            var text = document.getElementById('sms').value;
            //Get ORDER #
            var o = text.indexOf('Order:');
            var p = text.indexOf('|');
            var order = text.substring(o + 6, p - 1);
            if (text != null) {
                document.getElementById('orderNum').innerHTML = "ORDER: " + order;
            } else {
                document.getElementById('orderNum').innerHTML = "ORDER: ";
            }

            // Get Pick-up CITY
            var pu = text.indexOf('P/U:');
            var firstComma = text.indexOf(',');
            var pcity = text.substring(pu + 4, firstComma);

            //Get Pick-up STATE
            var pstate = text.substring(firstComma + 1, firstComma + 3);
            var ploc = pcity + ", " + pstate;

            //PICK-UP LOCATION FULL
            if (text !== "") {
                document.getElementById('ploc').innerHTML = ploc;
            } else {
                document.getElementById('ploc').innerHTML = "Location";
            }

            //Get Pick-up MONTH FROM
            var pstart = text.indexOf(pstate);
            var pdash = text.indexOf('-');
            var pmonthf = text.substring(pstart + 3, pdash - 9);

            //Get Pick-up DATE FROM
            var pdatef = text.substring(pstart + 6, pdash - 6);
            var pdatea = pmonthf + "/" + pdatef;


            //Get Pick-up TIME FROM
            var phourf = text.substring(pdash - 3, pdash - 5);
            var pminf = text.substring(pdash, pdash - 2);
            var ptimea = phourf + ":" + pminf;

            //Get Pick-up MONTH & DATE TILL
            var pmontht = text.substring(pdash + 1, pdash + 3);
            var pdatet = text.substring(pdash + 4, pdash + 6);
            var pdateb = pmontht + "/" + pdatet;

            // PICK-UP DATE FULL
            var pdate = pdatea + " - " + pdateb;
            if (text !== "") {
                document.getElementById('pdate').innerHTML = pdate;
            } else {
                document.getElementById('pdate').innerHTML = "Pick-up Date";
            }

            //Get Pick-up TIME TILL
            var phourt = text.substring(pdash + 7, pdash + 9);
            var pmint = text.substring(pdash + 10, pdash + 12);
            var ptimeb = phourt + ":" + pmint;

            //PICK-UP TIME FULL
            var ptime = ptimea + " - " + ptimeb;
            if (text !== "") {
                document.getElementById('ptime').innerHTML = ptime;
            } else {
                document.getElementById('ptime').innerHTML = "Pick-up Time Window";
            }

            //Get Delivery CITY & STATE
            var del = text.indexOf('DEL:');
            var secondComma = text.lastIndexOf(',');
            var dcity = text.substring(del + 4, secondComma);

            var dstate = text.substring(secondComma + 1, secondComma + 3);

            //DELIVERY LOCATION FULL
            var dloc = dcity + ", " + dstate;
            if (text !== "") {
                document.getElementById('dloc').innerHTML = dloc;
            } else {
                document.getElementById('dloc').innerHTML = "Delivery Location";
            }

            // Get Delivery MONTH & DATE FROM
            var secondDash = text.lastIndexOf('-');
            var dstart = text.indexOf(dstate);
            var dmonthf = text.substring(dstart + 3, secondDash - 9);

            var ddatef = text.substring(dstart + 6, secondDash - 6);
            var ddatea = dmonthf + "/" + ddatef;

            // Get Delivery TIME FROM
            var dhourf = text.substring(secondDash - 3, secondDash - 5);
            var dminf = text.substring(secondDash, secondDash - 2);
            var dtimea = dhourf + ":" + dminf;

            //Get Delivery MONTH & DATE TILL
            var dmontht = text.substring(secondDash + 1, secondDash + 3);
            var ddatet = text.substring(secondDash + 4, secondDash + 6);
            var ddateb = dmontht + "/" + ddatet;

            // DELIVERY MONTH & DATE FULL
            var ddate = ddatea + " - " + ddateb;
            if (text !== "") {
                document.getElementById('ddate').innerHTML = ddate;
            } else {
                document.getElementById('ddate').innerHTML = "Delivery Date";
            }

            //Get Delivery TIME TILL
            var dhourt = text.substring(secondDash + 7, secondDash + 9);
            var dmint = text.substring(secondDash + 10, secondDash + 12);
            var dtimeb = dhourt + ":" + dmint;

            //DELIVERY TIME FULL
            var dtime = dtimea + " - " + dtimeb;
            if (text !== "") {
                document.getElementById('dtime').innerHTML = dtime;
            } else {
                document.getElementById('dtime').innerHTML = "Delivery Time Window";
            }


            var runtimer = setInterval(function () {
                runTimerClock()
            }, 1000);

            function runTimerClock() {
                var now = new Date();
                //TIME
                var secs = now.getSeconds();
                var mins = now.getMinutes();
                var hour = now.getHours();
                //DAYS
                var month = now.getMonth();
                var date = now.getDate();
                var daysinmnth = 32 - new Date(now.getYear(), now.getMonth(), 32).getDate();

                var entryMonth = pmontht;
                var entryDate = pdatet;
                var entryHour = phourt;
                var entryMins = pmint;
                var entrySecs = 60;

                var dispMonth = entryMonth - (month + 1);
                var dispDate = entryDate - date;
                var dispHour = entryHour - hour;
                var dispMins = entryMins - mins;
                var dispSecs = entrySecs - secs;

                //PICK-UP TIME LEFT
                if (dispSecs < 0) {
                    dispSecs = (dispSecs + 60) % 60;
                    dispMins--;
                }
                if (dispMins < 0) {
                    dispMins = (dispMins + 60) % 60;
                    dispHour--;
                }
                if (dispHour < 0) {
                    dispHour = (dispHour + 24) % 24;
                    dispDate--;
                }
                if (dispDate < 0) {
                    dispDate = (dispDate + daysinmnth) % daysinmnth;
                    dispMonth--;
                }

                var ptimer = dispDate + "<span>d&nbsp;</span>" + dispHour + "<span>h&nbsp;</span>" + dispMins + "<span>min&nbsp;</span>" + dispSecs + "<span>sec&nbsp;</span>" + " &nbsp;&nbsp; <core-icon icon='hardware:keyboard-control' style='color:#4285f4;'></core-icon> &nbsp;&nbsp;" + ((dispDate * 24) + dispHour) + "<span>h&nbsp;</span>" + dispMins + "<span>min</span>";

                if (dispMonth < 0) {
                    document.getElementById('ptimeleft').innerHTML = "Pick-Up Date has passed the current date.";
                } else if (dispDate < 0) {
                    document.getElementById('ptimeleft').innerHTML = "Pick-Up Date has passed the current date.";
                } else if (dispMonth == 0 && dispDate == 0 && dispHour < 0) {
                    document.getElementById('ptimeleft').innerHTML = "Pick-Up time has passed the current time.";
                } else {
                    document.getElementById('ptimeleft').innerHTML = ptimer;
                }

                //DELIVERY

                var dentryMonth = dmontht;
                var dentryDate = ddatet;
                var dentryHour = dhourt;
                var dentryMin = dmint;
                var dentrySecs = 60;



                var dispMonthd = dentryMonth - (month + 1);
                var dispDated = dentryDate - date;
                var dispHourd = dentryHour - hour;
                var dispMinsd = dentryMin - mins;
                var dispSecsd = dentrySecs - secs;



                //DELIVERY TIME LEFT
                if (dispSecsd < 0) {
                    dispSecsd = (dispSecsd + 60) % 60;
                    dispMinsd--;
                }
                if (dispMinsd < 0) {
                    dispMinsd = (dispMinsd + 60) % 60;
                    dispHourd--;
                }
                if (dispHourd < 0) {
                    dispHourd = (dispHourd + 24) % 24;
                    dispDated--;
                }
                if (dispDated < 0) {
                    dispDated = (dispDated + daysinmnth) % daysinmnth;
                    dispMonthd--;
                }



                var dtimer = dispDated + "<span>d&nbsp;</span>" + dispHourd + "<span>h&nbsp;</span>" + dispMinsd + "<span>min&nbsp;</span>" + dispSecsd + "<span>sec&nbsp;</span>" + "&nbsp;&nbsp; <core-icon icon='hardware:keyboard-control' style='color:#4285f4;'></core-icon> &nbsp;&nbsp;" + ((dispDated * 24) + dispHourd) + "<span>h&nbsp;</span>" + dispMinsd + "<span>min</span>";

                if (dispMonthd < 0) {
                    document.getElementById('dtimeleft').innerHTML = "Delivery Date has passed the current date.";
                } else if (dispDated < 0) {
                    document.getElementById('dtimeleft').innerHTML = "Delivery Date has passed the current date.";
                } else if (dispHourd < 0) {
                    document.getElementById('dtimeleft').innerHTML = "Delivery time has passed the current time.";
                } else {
                    document.getElementById('dtimeleft').innerHTML = dtimer;
                }

                runTimer();

            }
            //DURATION

            var pDurHour = phourt - phourf;
            var pDurMins = pmint - pminf;

            //document.getElementById('pduration').innerHTML = pDurHour + " hours " + pDurMins + " minutes"



            //};

            function getWeather(callback) {
                var cityp = ploc;
                var weatherp = 'http://openweathermap.org/data/2.5/weather?q=' + cityp;
                $.ajax({
                    dataType: "jsonp",
                    url: weatherp,
                    success: callback
                });
            }

            // get data:
            getWeather(function (data) {
                var condResult = data.weather[0].description;
                var weatherResult = condResult.toUpperCase();
                var tempResult = data.main.temp;
                var toFah = Math.round(((tempResult - 273.15) * 1.8) + 32) + "&deg;F";

                document.getElementById('ploc').innerHTML = ploc;
                document.getElementById('ploc-weather-temp').innerHTML = toFah;
                document.getElementById('ploc-weather-desc').innerHTML = weatherResult;
                document.getElementById('ploc-second').innerHTML = ploc + " &nbsp;&nbsp;<span>( Pick-up Location )</span>";
            });

            function getWeatherTwo(callback) {
                var cityd = dloc;
                var weatherp = 'http://openweathermap.org/data/2.5/weather?q=' + cityd;
                $.ajax({
                    dataType: "jsonp",
                    url: weatherp,
                    success: callback
                });
            }

            // get data:
            getWeatherTwo(function (data) {
                var condResult = data.weather[0].description;
                var weatherResult = condResult.toUpperCase();
                var tempResult = data.main.temp;
                var toFah = Math.round(((tempResult - 273.15) * 1.8) + 32) + "&deg;F";

                document.getElementById('dloc').innerHTML = dloc;
                document.getElementById('dloc-weather-temp').innerHTML = toFah;
                document.getElementById('dloc-weather-desc').innerHTML = weatherResult;
                document.getElementById('dloc-second').innerHTML = dloc;
            });



        };

        function clearMe() {
            document.getElementById('sms').value = "";
        };

        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 400);
                        return false;
                    }
                }
            });
        });

var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng);
}

function errorFunction(){
    document.getElementById('currentCity').innerHTML = "Geocoder failed";
}

  function initialize() {
    geocoder = new google.maps.Geocoder();



  }

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results);
        if (results[1]) {
         //formatted address
          var fa = results[0].formatted_address;
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    state = results[0].address_components[4];
                    city  = results[0].address_components[2];
                    break;
                }
            }
        }
        //city data
        var stateName = state.short_name;
        var cityName = city.short_name;
        var cityUpper = cityName.toUpperCase();
        var cityState = cityUpper + ", " +stateName;
        document.getElementById('currentCity').innerHTML = cityState + " &nbsp;&nbsp;<span>( Your Current Location )</span>";

        } else {
          document.getElementById('currentCity').innerHTML = "No results found";
        }
      } else {
        document.getElementById('currentCity').innerHTML = "Geocoder failed due to: " + status;
      }
    });
  }

// GET DISTANCE
function getDistanceP(){
    
    var yCity = document.getElementById('currentCity'),
        yourCity = yCity.innerHTML;

    var pCity = document.getElementById('ploc'),
        plocCity = pCity.innerHTML;
    
    var dCity = document.getElementById('dloc'),
        dlocCity = dCity.innerHTML;
    
    document.getElementById('ploc-second-delivery').innerHTML = plocCity + " &nbsp;&nbsp;<span>( Pick-up Location )</span>";
    
    document.getElementById('dloc-second').innerHTML = dlocCity + " &nbsp;&nbsp;<span>( Delivery Location )</span>";
    var origin1 = yourCity,
        origin2 = plocCity,
        destination1 = plocCity,
        destination2 = dlocCity,
        service = new google.maps.DistanceMatrixService();
    
    

    service.getDistanceMatrix(
        {
            origins: [origin1, origin2],
            destinations: [destination1, destination2],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
        }, 
        callback
    );

    function callback(response, status) {

        if(status=="OK") {
            var distanceValue = response.rows[0].elements[0].distance.value;
            var distanceText = response.rows[0].elements[0].distance.text;
            document.getElementById('p-distance').innerHTML = distanceText;
            
            var durationValue = response.rows[0].elements[0].duration.value;
            var durationText = response.rows[0].elements[0].duration.text;
            document.getElementById('p-duration').innerHTML = durationText;
            
            var ddistanceValue = response.rows[1].elements[1].distance.value;
            var ddistanceText = response.rows[1].elements[1].distance.text;
            document.getElementById('d-distance').innerHTML = ddistanceText;
            
            var ddurationValue = response.rows[1].elements[1].duration.value;
            var ddurationText = response.rows[1].elements[1].duration.text;
            document.getElementById('d-duration').innerHTML = ddurationText;
        } else {
            alert("Error: " + status);
        }
    }
}







    
    