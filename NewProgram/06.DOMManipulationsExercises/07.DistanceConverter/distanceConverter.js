function attachEventsListeners() {
    let metrics = {
        km  : 1000,
        m   : 1,
        cm  : 0.01,
        mm  : 0.001,
        mi  : 1609.34,
        yrd : 0.9144,
        ft  : 0.3048,
        in  : 0.0254,
    };

    let $button = $('#convert');
    $button.on('click', () => {
        let $inputDistance = $('#inputDistance');
        let $outputDistance = $('#outputDistance');

        let $inputUnits = $('#inputUnits');
        let $outputUnits = $('#outputUnits');

        let distanceInMetres = $inputDistance.val() * metrics[$inputUnits.val()];
        $outputDistance.val(distanceInMetres / metrics[$outputUnits.val()]);
    }) 
}