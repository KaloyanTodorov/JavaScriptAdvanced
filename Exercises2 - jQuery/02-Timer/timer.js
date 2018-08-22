function timer() {
    let time, intervalID;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    startBtn.on('click', start);
    stopBtn.on('click', stop);

    function start() {
        time = -1;
        incrementTime();
        intervalID = setInterval(incrementTime(), 1000);
    }

    function stop() {

    }
    
    function incrementTime() {
        time++;
        console.log(time);
        $('#hours').textContent = 'ásd';

        $('#seconds').val(time);
    }
}