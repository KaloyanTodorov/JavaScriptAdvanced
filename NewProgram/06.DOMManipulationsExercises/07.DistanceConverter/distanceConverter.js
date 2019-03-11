function attachEventsListeners() {
    let metrics = {     km  : 1000, m   : 1, cm  : 0.01,  mm  : 0.001, mi  : 1609.34, yrd : 0.9144, ft  : 0.3048, in  : 0.0254  };
    $('#convert').on('click', () => {
        $('#outputDistance').val($('#inputDistance').val() * metrics[$('#inputUnits').val()] / metrics[$('#outputUnits').val()]);
    }) 
}