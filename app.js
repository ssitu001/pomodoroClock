$( document ).ready(function() {
  var defaultMin = 25;
  var breakMins = 5;
  var userMinutes;
  // var minutes = defaultMin;
  var defaultSeconds = defaultMin * 60;
  var breakSeconds = breakMins * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  var timer;
  var timerStarted = false;

  var isBreak = false;
  //When page loads reset timer to default time;
  reset();

  $('#test').on('click', function () {
    console.log("testing");
    $('#mainTimer').empty();
    $('#mainTimer').html('<h1>'+breakMins + ' mins</h1>');
    decrement();
  }); 

  $('#add').on('click', function() {
    console.log("user incremented");
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = defaultMin++;
    userInput(defaultMin);
  });

  $('#subtract').on('click', function() {
    console.log("user decremented");
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = defaultMin--;
    userInput(defaultMin);
  });

  $('#reset').on('click', function() {
    reset();
  });

  $('#mainTimer').on('click', function() {
    if (!timerStarted) {
      console.log("timer started");
      decrement(work, defaultSeconds);  
      timerStarted = !timerStarted;    
    } else {
      console.log("stop");
      clearTimeout(timer);
      timerStarted = !timerStarted;
    }

  });

  //work Timer
  function decrement(type, seconds) {
    //TODO: determine type of timer and minutes (work or break)
    currentMinutes = Math.floor(seconds / 60);
    currentSeconds = seconds % 60;
    
    if (currentSeconds <= 9) {
      currentSeconds = "0" + currentSeconds;
    }
    
    seconds--;
    
    $('#mainTimer').html('<div><h4>Get To Work!!</h4></div><h1>'+currentMinutes + ':' + currentSeconds+'</h1>');
    
    if(seconds !== -1) {
      timer = setTimeout(decrement, 1000);
    } 
    
    if(seconds === 0) {
      isBreak = !isBreak;
      console.log('timez up!', isBreak);
      //call break
    // $('#mainTimer').empty();
    // $('#mainTimer').html('<h1>'+breakMins + ' mins</h1>');
    // decrement();
    }

  }

  //reset timer
  function reset() {
    console.log("timer reset")
    timerStarted = false;
    var minutes = defaultMin;
    var seconds = minutes * 60;
    var breakminss = breakMins;
    clearTimeout(timer);
    $('#mainTimer').html('<div><h4>Tap To Start Time</h4></div><h1>'+minutes + ' mins</h1>');
    $('#breakTimer').html('<div><h4>Break Time</h4></div><h1>'+breakminss + ' mins</h1>');
    $('#workTimer').html('<div><h4>Work Time</h4></div><h1>'+minutes + ' mins</h1>');
  }

  //user can increment/decrement
  function userInput(min) {
    defaultMin = min;
    defaultSeconds = min * 60;
    $('#mainTimer').html('<div><h4>Okay Okay! Tap To Start</h4></div><h1>'+min  + ' mins</h1>');
    $('#workTimer').html('<div><h4>Work Time</h4></div><h1>'+min + ' mins</h1>');   
  }
  
  //break logic
  function breakTime() {
    console.log('break time');
  
  }
  
});