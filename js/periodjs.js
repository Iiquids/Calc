
function cureTime(timea, timeb) {
    if (timea > 12) {
        timea = timea - 12
    }
    if (timeb < 10 && timeb >= 0) {
        timeb = "0" + timeb
    }
    return "" + timea + ":" + timeb
}

function getDateSchool() {
    const start = new Date()
    const end = new Date()
    const current = new Date()

    const adstime = [[0]]

    const times = [[0, 0], [8, 20], [9, 04], [9, 48], [10, 32], [11, 16], [12, 0], [12, 44], [13, 28], [14, 12],[23, 59]]

    let i = 0
    while (i < 11) {
        start.setHours(times[i][0], times[i][1])
        end.setHours(times[i + 1][0], times[i + 1][1])
        if (current >= start && current < end) {
            let nextDate = cureTime(end.getHours(), end.getMinutes())
            return nextDate
        }
        i++;
    }
    return "Error, Value Not Found"
}

function getDateTitle() {
    const date = new Date
    const Dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    let currentWeek = Dates[date.getDay() - 1]
    let currentDate = date.getDate()

    return currentWeek
}

function foo() {

    if (getDateTitle() == "Sat" || getDateTitle() == "Sun") {
        document.getElementById("Period").innerText = "";
    } else {
        document.getElementById("Period").innerText = ".+* Next Period: " + getDateSchool() + " *+.";
    }

    setTimeout(foo, 5000);
}

foo();
