function 로드다됨(e) {
    console.log(e.currentTarget.response);
}

var req = new XMLHttpRequest();
var 주소 = "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json";

req.addEventListener("load", 로드다됨);
req.open("GET", 주소);
req.send();