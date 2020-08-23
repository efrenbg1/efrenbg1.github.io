
let req = new XMLHttpRequest();
req.open("GET", 'db.json', true);
req.responseType = 'json';
req.onload = function () {
    if (navigator.languages.includes('es')) {
        var lang = req.response['es'];
    } else {
        var lang = req.response['en'];
    }
    Object.keys(lang).forEach((n) => {
        document.getElementById(n).innerText = lang[n];
    });
};
req.send();