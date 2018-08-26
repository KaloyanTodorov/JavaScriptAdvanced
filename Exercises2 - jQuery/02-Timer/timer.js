function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds')
    let secondsPassed = 0;
    let interval = null;

    stopBtn.prop('disabled', true);

    startBtn.on('click', start);
    stopBtn.on('click', stop);

    function start() {
        if (!interval) {
            interval = setInterval(incrementTime, 1000);
        }

        startBtn.prop('disabled', true);
        stopBtn.prop('disabled', false);
    }

    function stop() {

        clearInterval(interval);
        interval = null;
        secondsPassed = 0;

        startBtn.prop('disabled', false);
        stopBtn.prop('disabled', true);
    }
    
    function incrementTime() {
        secondsPassed++;
        seconds.text(("0" + Math.trunc(secondsPassed % 60)).slice(-2));
        minutes.text(("0" + Math.trunc(secondsPassed / 60) % 60).slice(-2));
        hours.text(("0" + Math.trunc(secondsPassed / 60 / 60)).slice(-2));
    }
}