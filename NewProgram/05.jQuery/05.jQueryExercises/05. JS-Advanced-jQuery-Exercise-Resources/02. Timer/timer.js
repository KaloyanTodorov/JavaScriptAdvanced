function timer() {
   let $startButton = $('#start-timer');
   let $stopButton = $('#stop-timer');

   let $hours = $('#hours');
   let $minutes = $('#minutes');
   let $seconds = $('#seconds');
   
   let secondsPassed = 0;
   let currentTime;
   let timerStarted = false;

   $startButton.on('click', startTimer);

   $stopButton.on('click', stopTimer);

   function startTimer() {
      if(!timerStarted) {
         timerStarted = true;
         currentTime = setInterval(updateTimePassed, 1000);
      }

      function updateTimePassed() {
         if(timerStarted) {
            secondsPassed++;
            $seconds.text(('0' + secondsPassed % 60).slice(-2));
            $minutes.text(('0' + Math.floor(secondsPassed / 60) % 60).slice(-2));
            $hours.text(('0' + Math.floor(secondsPassed / (60 ** 2))).slice(-2));
         }
      }
   }

   function stopTimer() {
      timerStarted = false;
      clearInterval(currentTime);
   }
}