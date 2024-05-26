window.onload = function() {
    var timer1;
    var timer2;
    var seconds1 = 0;
    var minutes1 = 0;
    var hours1 = 0;
    var seconds2 = 0;
    var minutes2 = 0;
    var hours2 = 0;
  
    function pad(num) {
      return ("0" + num).slice(-2);
    }
  
    function startTimer1() {
      timer1 = setInterval(function() {
        seconds1++;
        if (seconds1 >= 60) {
          seconds1 = 0;
          minutes1++;
          if (minutes1 >= 60) {
            minutes1 = 0;
            hours1++;
          }
        }
  
        document.getElementById("hours1").textContent = pad(hours1);
        document.getElementById("minutes1").textContent = pad(minutes1);
        document.getElementById("seconds1").textContent = pad(seconds1);
      }, 1000);
    }
  
    function stopTimer1() {
      clearInterval(timer1);
    }
  
    function startTimer2() {
      timer2 = setInterval(function() {
        seconds2++;
        if (seconds2 >= 60) {
          seconds2 = 0;
          minutes2++;
          if (minutes2 >= 60) {
            minutes2 = 0;
            hours2++;
          }
        }
  
        document.getElementById("hours2").textContent = pad(hours2);
        document.getElementById("minutes2").textContent = pad(minutes2);
        document.getElementById("seconds2").textContent = pad(seconds2);
      }, 1000);
    }
  
    function stopTimer2() {
      clearInterval(timer2);
    }
  
    document.getElementById("start1").addEventListener("click", startTimer1);
    document.getElementById("stop1").addEventListener("click", stopTimer1);
    document.getElementById("start2").addEventListener("click", startTimer2);
    document.getElementById("stop2").addEventListener("click", stopTimer2);
  };