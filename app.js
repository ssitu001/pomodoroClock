$( document ).ready(function() {
  var minutes = 1;
  var seconds = minutes * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  var timer;
  var timerStarted = false;
  //When page loads reset timer to default time;
  reset();

  $('#reset').on('click', function() {
    reset();
  });

  $('#mainTimer').on('click', function() {
    if (!timerStarted) {
      console.log("timer started");
      decrement();  
      timerStarted = !timerStarted;    
    } else {
      console.log("stop");
      clearTimeout(timer);
      timerStarted = !timerStarted;
    }

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
      timer = setTimeout(decrement, 1000);
    } 
    
    if(seconds === 0) {
      console.log('timez up!');
    }
  }

  //reset timer
  function reset() {
    console.log("timer reset")
    $('#mainTimer').html(minutes + ':' + "00");
    clearTimeout(timer);
    minutes = 1;
    seconds = minutes * 60;
    timerStarted = false;
  }
  

  
  
});