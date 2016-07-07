$( document ).ready(function() {
  var userMinutes;
  var minutes = 5;
  var seconds = minutes * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  var timer;
  var timerStarted = false;
  //When page loads reset timer to default time;
  reset();

  $('#add').on('click', function() {
    console.log("user incremented");
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = minutes++;
    userInput(minutes);
  });

  $('#subtract').on('click', function() {
    console.log("user decremented");
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = minutes--;
    userInput(minutes);
  });

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
    timerStarted = false;
    minutes = 5;
    seconds = minutes * 60;
    clearTimeout(timer);
    $('#mainTimer').html(minutes + ':' + "00");
  }

  function userInput(min) {
    minutes = min;
    seconds = min * 60;
    $('#mainTimer').html(min + ':' + "00");   
  }
  

  
  
});