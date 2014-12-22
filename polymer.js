// SPEED - SLIDER

  
    var ratings = document.querySelector('#speed-slider');
        ratings.addEventListener('core-change', function() {
        document.querySelector('#speed').textContent = ratings.value;
    });
  
  