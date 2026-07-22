const prediction = document.getElementById("prediction");
const confidence = document.getElementById("confidence");
const result = document.getElementById("result");
const scanBtn = document.getElementById("scanBtn");

// Sample chart (temporary until we connect to Deriv)
const ctx = document.getElementById("priceChart").getContext("2d");

let labels = [];
let values = [];

for (let i = 0; i < 20; i++) {
    labels.push(i + 1);
    values.push(Math.floor(Math.random() * 100) + 50);
}

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Market Trend",
            data: values,
            borderWidth: 2,
            fill: false,
            tension: 0.3
        }]
    },
    options: {
        responsive: true
    }
});

scanBtn.onclick = function(){

    const digit = Math.floor(Math.random()*10);

    const conf = Math.floor(Math.random()*31)+70;

    prediction.innerHTML = digit;

    confidence.innerHTML = conf + "%";

    if(conf > 90){

        result.innerHTML =
        "🔥 Strong BUY SIGNAL<br><br>Prediction Digit : " + digit;

    }

    else if(conf > 80){

        result.innerHTML =
        "🟡 Medium Signal<br><br>Prediction Digit : " + digit;

    }

    else{

        result.innerHTML =
        "⚪ WAIT... No strong opportunity detected.";

    }

};
