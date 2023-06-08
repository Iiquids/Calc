const domain1 = "fort.edin.gay";
const domain2 = "fort.edin.gay";

// if (localStorage.getItem("Player") == "Premium") {
//     document.getElementsByClassName("navbar-end")[0].innerHTML = "";
// };


function printHistory(_0xdc7ex5) {
    document.getElementById("history-value").innerText = _0xdc7ex5;
}

function printOutput(_0xdc7ex5, _0xdc7ex8 = false) {
    if (_0xdc7ex5 == "") {
        document.getElementById("output-value").innerText = _0xdc7ex5;
    } else {
        if (_0xdc7ex8 == false) {
            document.getElementById("output-value").innerText = getFormattedNumber(_0xdc7ex5);
        } else {
            document.getElementById("output-value").style.fontSize = "large";
            document.getElementById("output-value").innerText = _0xdc7ex5;
        }
    }
}
function getFormattedNumber(_0xdc7ex5) {
    if (_0xdc7ex5 == "-") {
        return "";
    }
    ;
    var _0xdc7exa = Number(_0xdc7ex5);
    var _0xdc7exb = _0xdc7exa.toLocaleString("en");
    return _0xdc7exb;
}
function openCloak(bool) {
    var _0xdc7exe = "https://";
    if (localStorage.getItem("Player") == "Premium") {
        if (bool) {
            _0xdc7exe += domain2;
        } else {
            _0xdc7exe += domain1;
        }
    } else {
        if (localStorage.getItem("Player") == "Pro") {
            _0xdc7exe += domain1;
        } else {
            alert("To use exprimental features please login. Contact your administrator for your login.")
            return;
        }
    }
    ;
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var _0xdc7exf = win.document.createElement("iframe");
    _0xdc7exf.style.border = "none";
    _0xdc7exf.style.width = "100%";
    _0xdc7exf.style.height = "100%";
    _0xdc7exf.style.margin = "0";
    _0xdc7exf.src = _0xdc7exe;
    console.log(_0xdc7exf.src);
    win.document.body.appendChild(_0xdc7exf);
    window.close();
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else {
            if (this.id == "backspace") {
                var _0xdc7ex12 = Number(document.getElementById("output-value").innerText.replace(/,/g, "")).toString();
                if (_0xdc7ex12) {
                    _0xdc7ex12 = _0xdc7ex12.substr(0, _0xdc7ex12.length - 1);
                    printOutput(_0xdc7ex12);
                }
            } else {
                if (this.id == "empty1") {
                    if (!_0xdc7ex12) {
                        printOutput("NaN", true);
                        openCloak(false);
                    }
                } else {
                    if (this.id == "empty2") {
                        if (!_0xdc7ex12) {
                            printOutput("NaN", true);
                            openCloak(true);
                        }
                    } else {
                        var _0xdc7ex12 = document.getElementById("output-value").innerText;
                        var _0xdc7ex13 = document.getElementById("history-value").innerText;
                        if (_0xdc7ex12 == "" && _0xdc7ex13 != "") {
                            if (isNaN(_0xdc7ex13[_0xdc7ex13.length - 1])) {
                                _0xdc7ex13 = _0xdc7ex13.substr(0, _0xdc7ex13.length - 1);
                            }
                        }
                        ;
                        if (_0xdc7ex12 != "" || _0xdc7ex13 != "") {
                            _0xdc7ex12 = _0xdc7ex12 == "" ? _0xdc7ex12 : Number(_0xdc7ex12.replace(/,/g, ""));
                            _0xdc7ex13 = _0xdc7ex13 + _0xdc7ex12;
                            if (this.id == "=") {
                                var _0xdc7ex14 = eval(_0xdc7ex13);
                                printOutput(_0xdc7ex14);
                                printHistory("");
                            } else {
                                _0xdc7ex13 = _0xdc7ex13 + this.id;
                                printHistory(_0xdc7ex13);
                                printOutput("");
                            }
                        }
                    }
                }
            }
        }
    });
};

blurFunction = function (_0xdc7ex15) {
    var _0xdc7ex16 = document.getElementById("dev");
    if (_0xdc7ex15) {
        _0xdc7ex16.setAttribute("class", "blur");
    } else {
        _0xdc7ex16.setAttribute("class", null);
    }
};

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var _0xdc7ex12 = Number(document.getElementById("output-value").innerText.replace(/,/g, ""));
        if (_0xdc7ex12 != NaN) {
            _0xdc7ex12 = _0xdc7ex12 + this.id;
            printOutput(_0xdc7ex12);
        }
    });
};

const popup = document.getElementById("popup");
var ui = false;
let transitionEndEventName = getTransitionEndEventName();
function getTransitionEndEventName() {
    var _0xdc7ex1c = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
    let _0xdc7ex1d = document.body.style;
    for (let _0xdc7ex1e in _0xdc7ex1c) {
        if (_0xdc7ex1d[_0xdc7ex1e] != undefined) {
            return _0xdc7ex1c[_0xdc7ex1e];
        }
    }
}
function closePop() {
    if (ui) {
        ui = false;
        popup.addEventListener(transitionEndEventName, onTransitionEnd);
        popup.classList.add("close-popup");

        setTimeout(() => {
            document.getElementById("auth").value = null;
        }, 50);
    }
}
function openPop() {
    if (!ui) {
        ui = true;
        blurFunction(1);
        popup.classList.remove("close-popup");
        popup.classList.remove("popup-reset");
        popup.classList.add("open-popup");
    }
}
function onTransitionEnd() {
    popup.removeEventListener(transitionEndEventName, onTransitionEnd);
    popup.classList.add("popup-reset");
    blurFunction(0);
    document.getElementById("desc").innerText = "ㅤ";
}
function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};

var auth = document.getElementById("auth");
function Submit() {
    if (btoa(auth.value) == "ZWRpbmlzY29vbA==") {
        localStorage.setItem("Player", "Pro");
        closePop();
        toggleTheme();
    } else {
        if (auth.value == "Passwordword") {
            localStorage.setItem("Player", "Premium");
            // document.getElementsByClassName("navbar-end")[0].innerHTML = "";
            closePop();
            toggleTheme();
        } else {
            if (isValidURL(auth.value)) {
                var url = auth.value
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                console.log(iframe.src)
                win.document.body.appendChild(iframe)
            }
            document.getElementById("desc").innerText = "Incorrect Password.";
            auth.classList.add("shake");
            setTimeout(function () {
                auth.classList.remove("shake");
            }, 500);
        }
    }
}
const login = document.getElementById("Access");
login.addEventListener("click", function () {
    setTimeout(() => {
        openPop();
    }, 50);
});

document.addEventListener("keypress", _0xdc7ex25 => {
    if (_0xdc7ex25.code == "Enter" && ui && auth.value != "") {
        Submit();
    }

    if (_0xdc7ex25.code == "Space" && ui) {
        closePop();
    }

}, false);
