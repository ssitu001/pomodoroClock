$( document ).ready(function() {
  var minutes = 1;
  var seconds = minutes * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  
  $('#mainTimer').html(minutes + ':' + '00');
  
  $('#mainTimer').on('click', function() {
     setTimeout(decrement, 1000);
  });
  
  function decrement() {
    currentMinutes = Math.floor(seconds / 60);
    currentSeconds = seconds % 60;
    
    if (currentSeconds <= 9) {
      currentSeconds = "0" + currentSeconds;
    }
    
    seconds--;
    
    $('#mainTimer').html(currentMinutes + ':' + currentSeconds);
    
    if(seconds !== -1) {
      setTimeout(decrement, 1000);
    } 
    
    if(seconds === 0) {
      console.log('timez up!');
    }
  }
  

  
  
});