function setBrightness() {
    var slider = document.querySelector('.mdc-slider').getAttribute('aria-valuenow')
    var brightness;
    if (slider == 0) {
        brightness = "off"
    } else if (slider == 1) {
        brightness = "low"
    } else if (slider == 2) {
        brightness = "med"
    } else if (slider == 3) {
        brightness = "high"
    }

    document.getElementById("currentMode").innerHTML = brightness.toUpperCase()

    childProcess.exec("asusctl -k " + brightness, function (error, stdout, stderr) {
    });
}

setBrightness()