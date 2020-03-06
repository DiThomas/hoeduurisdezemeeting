var seconds = 0;
var hourlyPayrate = 90 * 11;
var counterElement = document.getElementById('counter');

function calculateCosts() {
    seconds += 1;
    var costsPerSecond = (hourlyPayrate / 60) / 60;
    counterElement.innerText = '€ '+ (500+(costsPerSecond * seconds)).toFixed(2);
}


var cancel = setInterval(calculateCosts, 1000);