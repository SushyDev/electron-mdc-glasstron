function videoMode(mode) {
    childProcess.exec("asusctl -g " + mode, function (error, stdout, stderr) {
        alert("Success, please reboot \nlogs: \n" + stdout)
    });
}

function primeQuery() {
    childProcess.exec("prime-select query", function (error, stdout, stderr) {
        document.getElementById("profile").innerHTML = "Current profile: " + stdout
    });
}
// primeQuery() waiting for fluke to update asus-nb-ctrl

function reboot() {
    var answer = window.confirm("Are you sure you want to reboot?");
    if (answer) {
        sudo.exec('reboot', options,
        function (error, stdout, stderr) {
            if (error) {
                throw error;
            } else {}
            console.log('stdout: ' + stdout);
        }
    );
    }
}