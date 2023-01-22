// Main Click Button variable declaration
var clicks = 0;
var currency = 0;
var points = 1;
var gain = 1;
// Miner Click Button variable declaration
var minerLevel = 0;
var minerTotalValue = 1;
var minerPrice = 100;
// Upgrade Click Button variable declaration
var upgradeLevel = 0;
var upgradeTotalValue = 0;
var upgradePrice = 10;


// Functions handling Main Button onClick event
function clickMain() {
    calcMain();
    calcCurrency();
    outputClickMain()
    testing();
}

function outputClickMain() {
    document.getElementById("points").innerHTML = calcTotalPoints();
    document.getElementById("gain").innerHTML = (gain * 100);
    document.getElementById("currency").innerHTML = calcCurrency();
    document.getElementById("totalCurrency").innerHTML = (Math.ceil(currency));
}

function calcMain() {
    let curCurrency = calcCurrency();
    clicks += (1 * curCurrency);
    currency = clicks;   
}

function calcCurrency() {
    let curGain = getGain();
    let curPoints = calcTotalPoints();
    return curGain * curPoints;
}

function calcTotalPoints() {
    let totalPoints = (getPoints() + getUpgradeValue());
    return totalPoints;
}

function gainAsPercentage() {
    cur = getGain();
    return cur * 100;
}

function getPoints() {
    return points;
}

function getGain() {
    return gain;
}

function getCurrency() {
    return currency;
}

function getUpgradeValue() {
    return upgradeTotalValue;
} 

// Functions handling upgrade button onClick event
function clickUpgrade() {
    let enabled = enableUpgrade();
    if (enabled != true) {
        return;
    }else {
        //upgradeMultiplier();
        upgradeTotalValue = calcUpgradeValue()
        upgradePrice = calcNewUpgradeCost();
        upgradeLevel += 1;
        outputClickUpgrade();
        subtractUpgradeCost();
        clickMain();
    }
    testing();
}

function subtractUpgradeCost() {
    let curCurrency = calcCurrency();
    clicks -= curCurrency;
    currency = clicks;
}

function upgradeMultiplier() {
}

// Checks to see if user has enough money to buy upgrade
function enableUpgrade() {
    let curUpgradePrice = upgradePrice;
    let tempCurrency = getCurrency();
    if (curUpgradePrice <= tempCurrency) {
        clicks = tempCurrency - curUpgradePrice;
        return true;
    }
    return false;
}

function calcUpgradeValue() {
    let curUpgradeValue = upgradeTotalValue;
    curUpgradeValue += 1;
    return curUpgradeValue;
}

function calcNewUpgradeCost() {
    let curPrice = upgradePrice;
    curPrice *= 1.75;
    upgradePrice = (Math.ceil(curPrice));
    return upgradePrice;
}

function outputClickUpgrade() {
    document.getElementById("upgradeLevel").innerHTML = upgradeLevel;
    document.getElementById("upgradeTotalValue").innerHTML = upgradeTotalValue;
    document.getElementById("upgradePrice").innerHTML = upgradePrice;
}




// Console testing
function testing() {
    console.log("Currency: " + currency);
    console.log("Points: " + calcTotalPoints());
    console.log("Clicks: " + clicks);
    console.log("Upgrade Level: " + upgradeLevel);
    console.log("Upgrade total value: " + upgradeTotalValue);
    console.log("Upgrade Price: " + upgradePrice);
    console.log("<------------BREAK------------>");
}

