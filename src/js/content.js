var $ = require("jquery");

function goto(event) {

    try{
        if(event.path[0].children[0].className == "mdc-list-item mdc-list-item--activated") return;
    }catch(e) {}

    var page;

    if (event == "home") {
        page = "Home"
    } else {
        page = event.path[0].children[2].innerHTML
    }

    document.getElementById("top-app-bar-title").innerHTML = page

    $(function () {
        $("#main-content").load(page.toLowerCase().replace(/ /g, "_") + ".html");
    });
}
goto('home')

function checkTheme() {
    if (localStorage.getItem("darkmode") == "true") {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            console.log(document.getElementById("theme").childNodes)
            document.getElementById("theme").childNodes[3].innerHTML = `brightness_high`
            document.getElementById("theme").childNodes[5].innerHTML = `Light mode`
        } catch (error) {}
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("darkmode", false)
        try {
            document.getElementById("theme").childNodes[3].innerHTML = `nights_stay`
            document.getElementById("theme").childNodes[5].innerHTML = `Dark mode`
        } catch (error) {}
    }
}
checkTheme()