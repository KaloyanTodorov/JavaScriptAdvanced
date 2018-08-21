function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (this.clientWidth);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    function gradientOut() {
        document.getElementById('result').textContent = "";
    }
}