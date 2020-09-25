// Not in use

var type = [ 'Genre', 'Colour', 'Vibrancy', 'Temperature' ];
var typeId = 0;

window.setInterval(function () {
    $('#type').html(type[typeId]);
    typeId = typeId + 1;
    if(typeId >= type.length) { typeId = 0; }
}, 3000);
