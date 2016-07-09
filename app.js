$( document ).ready(function() {
  var defaultMin = 25;
  var userMinutes;
  var minutes = defaultMin;
  var seconds = minutes * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  var timer;
  var timerStarted = false;

  var breakMins = 5;
  var isBreak = false;
  //When page loads reset timer to default time;
  reset();

  $('#test').on('click', function () {
    breakTime();
  }); 

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

  //work Timer
  function decrement(type, minutes) {
    //TODO: determine type of timer and minutes (work or break)
    currentMinutes = Math.floor(seconds / 60);
    currentSeconds = seconds % 60;
    
    if (currentSeconds <= 9) {
      currentSeconds = "0" + currentSeconds;
    }
    
    seconds--;
    
    $('#mainTimer').html('<h1>'+currentMinutes + ':' + currentSeconds+'</h1>');
    
    if(seconds !== -1) {
      timer = setTimeout(decrement, 1000);
    } 
    
    if(seconds === 0) {
      console.log('timez up!');
      //call break
      breakTime();
    }

  }

  //reset timer
  function reset() {
    console.log("timer reset")
    timerStarted = false;
    minutes = defaultMin;
    seconds = minutes * 60;
    clearTimeout(timer);
    $('#mainTimer').html('<h1>'+minutes + ':' + '00</h1>');
  }

  //user can increment/decrement
  function userInput(min) {
    minutes = min;
    seconds = min * 60;
    $('#mainTimer').html('<h1>'+min + ':' + '00</h1>');   
  }
  
  //break logic
  function breakTime() {
    console.log('break time');
    $('#mainTimer').empty();
    $('#mainTimer').html('<h1>'+breakMins + ':' + '00</h1>');
  }
  
});