function clickMain() {
    currency = calcCurrency();
    clicks += (1 * currency);   
    document.getElementById("totalCurrency").innerHTML = clicks;
    curPoints = getPoints();
    document.getElementById("points").innerHTML = curPoints;
    curGain = getGain();
    gainPercentage = gainAsPercentage();
    document.getElementById("gain").innerHTML = gainPercentage;
    document.getElementById("currency").innerHTML = currency;
};

function calcCurrency() {
    let curPoints = getPoints();
    let curGain = getGain();
    return curGain * curPoints;
}

function getPoints() {
    return points;
}

function calcPoints() {

}

function getGain() {
    return gain;
}

function calcGain() {
    
}

function gainAsPercentage() {
    cur = getGain();
    return cur * 100;
}

function clickUpgrade() {
    UpgradeButton += 1;
}

function enableUpgrade() {

}