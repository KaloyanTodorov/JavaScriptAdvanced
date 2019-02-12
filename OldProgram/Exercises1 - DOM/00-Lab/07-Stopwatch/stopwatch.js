function stopwatch() {
    let time, intervalID;
    let startBtn = document.getElementById('start-btn');
    let stopBtn = document.getElementById('stop-btn');

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);

    function start() {
        time = -1;
        incrementTime();
        intervalID = setInterval(incrementTime, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }

    function stop () {
        clearInterval(intervalID);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }

    function incrementTime() {
        time++;
        document.getElementById('time').textContent = ("0" + Math.trunc(time / 60)).slice(-2) +
            ":" + ("0" + Math.trunc(time % 60)).slice(-2);
    }
}