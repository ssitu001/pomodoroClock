$( document ).ready(function() {
  var defaultMin = 1;
  var breakMins = 1;
  var userMinutes;
  var userBreak = breakMins * 60;
  var seconds = defaultMin;
  var defaultSeconds = defaultMin * 60;
  var breakSeconds = breakMins * 60;
  var currentMinutes = 0;
  var currentSeconds = 0;
  var timer;
  var timerStarted = false;
  var isBreak = false;
  var timerType = "work";
  //When page loads reset timer to default time;
  reset();

  $('#test').on('click', function () {
    startBreak()
  }); 
  //main timer add
  $('#add').on('click', function() {
    console.log("user incremented");
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = ++defaultMin;
    userInput(defaultMin);
  });
  //main timer subtract
  $('#subtract').on('click', function() {
    clearTimeout(timer);
    timerStarted = false;
    userMinutes = --defaultMin;
    userInput(defaultMin);
  });

  $('#addBreak').on('click', function() {
    userBreak = ++breakMins;
    console.log("userBreak", userBreak);
    breakTime();
  });

  $('#subtractBreak').on('click', function() {
    userBreak = --breakMins;
    console.log("userBreak", userBreak);
    breakTime();
  });

  $('#reset').on('click', function() {
    reset();
  });

  $('#mainTimer').on('click', function() {
    if (!timerStarted) {
      console.log("timer started");
      !isBreak ? decrementWork() : decrementBreak();
      timerStarted = !timerStarted;    
    } else {
      console.log("stop");
      clearTimeout(timer);
      timerStarted = !timerStarted;
    }

  });

  //work Timer
  function decrementWork() {
    //TODO: determine type of timer and minutes (work or break)
      $("#mainTimer").empty();
      currentMinutes = Math.floor(defaultSeconds / 60);
      currentSeconds = defaultSeconds % 60;
     
      if (currentSeconds <= 9) {
        currentSeconds = "0" + currentSeconds;
      }   
      $('#mainTimer').html('<div><h4>Get To Work!!</h4></div><h1>'+ currentMinutes + ':' + currentSeconds+'</h1>');       
      defaultSeconds--;

 
      
      if(defaultSeconds !== -1) {
        timer = setTimeout(decrementWork, 100);
      } 
      
      if(defaultSeconds === 0) {
        isBreak = true;
        defaultSeconds = defaultMin * 60;
        console.log('timez up!', isBreak);
        decrementBreak();
      }
  }

    //break Timer
  function decrementBreak() {

      $("#mainTimer").empty();
      currentMinutes = Math.floor(breakSeconds / 60);
      currentSeconds = breakSeconds % 60;
     
      if (currentSeconds <= 9) {
        currentSeconds = "0" + currentSeconds;
      }   
      $('#mainTimer').html('<div><h4>BreakTime!!</h4></div><h1>'+ currentMinutes + ':' + currentSeconds+'</h1>');       
      breakSeconds--;

 
      
      if(breakSeconds !== -1) {
        timer = setTimeout(decrementBreak, 100);
      } 
      
      if(breakSeconds === 0) {
        isBreak = false;
        breakSeconds = breakMins * 60;
        decrementWork();
      }
  }

  //reset timer
  function reset() {
    console.log("timer reset")
    timerStarted = false;
    var minutes = defaultMin;
    var seconds = minutes * 60;
    breakMins = 1;
    clearTimeout(timer);
    $('#mainTimer').html('<div><h4>Tap To Start Time</h4></div><h1>'+minutes + ' mins</h1>');
    $('#breakTimer').html('<div><h4>Break Time</h4></div><h1>'+breakMins + ' mins</h1>');
    $('#workTimer').html('<div><h4>Work Time</h4></div><h1>'+minutes + ' mins</h1>');
  }

  //user can increment/decrementWork
  function userInput(min) {
    defaultMin = min;
    defaultSeconds = min * 60;
    $('#mainTimer').html('<div><h4>Okay Okay! Tap To Start</h4></div><h1>'+min  + ' mins</h1>');
    $('#workTimer').html('<div><h4>Work Time</h4></div><h1>'+min + ' mins</h1>');   
  }
  
  //break logic
  function breakTime() {
    //$('#breakTimer').empty();
    $('#breakTimer').html('<div><h4>Break Time</h4></div><h1>'+ userBreak + ' mins</h1>');  
  }

  // function startBreak() {
  //   console.log('breaktimer started');
  //   $('#mainTimer').empty();
  //   defaultSeconds = userBreak;
  //   decrementWork();
  // }
  
});