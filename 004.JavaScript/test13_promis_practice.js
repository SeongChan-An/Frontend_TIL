fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
console.log(1);
console.log(2);


fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국'));
        return
    })

    // 1차 접종자를 뽑아낼 경우