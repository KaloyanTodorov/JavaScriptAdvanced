function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', calculateFromDays);

    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', calculateFromHours);

    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', calculateFromMinutes);

    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', calculateFromSeconds);

    function calculateFromDays() {
        let days = Number(document.getElementById('days').value);

        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 24 * 60;
        document.getElementById('seconds').value = days * 24 * 60 * 60;
    }

    function calculateFromHours() {
        let hours = Number(document.getElementById('hours').value);

        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    }

    function calculateFromMinutes() {
        let minutes = Number(document.getElementById('minutes').value);

        document.getElementById('days').value = minutes / (24 * 60);
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60 ;
    }

    function calculateFromSeconds() {
        let seconds = Number(document.getElementById('seconds').value);

        document.getElementById('days').value = seconds / (24 * 60 * 60);
        document.getElementById('hours').value = seconds / (60 * 60);
        document.getElementById('minutes').value = seconds / 60;
    }

}