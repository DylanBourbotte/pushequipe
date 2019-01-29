    var pseudo = document.getElementById('pseudo');
    var password = document.getElementById('MOT DE PASS');

document.cookie= 'pseudo';
document.cookie= 'password';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + pseudo + password;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1); }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
}
    }
    return "";
}
function Language(lang)
{
    var __construct = function() {
        if (eval('typeof ' + lang) == 'undefined')
        {
            lang = "en";
        }
        return;
    }()

    this.getStr = function(str, defaultStr) {
        var retStr = eval('eval(lang).' + str);
        if (typeof retStr != 'undefined')
        {
            return retStr;
        } else {
            if (typeof defaultStr != 'undefined')
            {
                return defaultStr;
            } else {
                return eval('en.' + str);
            }
        }
    }
}
var en = {
    SelPlace:"Select this place?",
    Save:"Saved."
};

var tr = {
    SelPlace:"Burayı seçmek istiyor musunuz?"
};

var translator = new Language("en");


var translator = new Language("tr");


