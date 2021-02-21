var selectedCurrency = "ドル"; //  グローバル変数
const puppeteer = require('puppeteer');
const url = 'https://info.finance.yahoo.co.jp/fx/' // 任意のURL;
async function getCurrency() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto(url);
    await browser.close();
}

function changeCurrency() {
    var currency = document.getElementById("currency");

    selectedCurrency = currency.options[currency.selectedIndex].value;

    var rateElement = document.getElementById("rate");

    switch (selectedCurrency) {
        case "ドル":
            rateElement.value = 110;
            break;

        case "ペリカ(カイジ)":
            rateElement.value = 0.1;
            break;

        case "ゴールド(ドラクエ)":
            rateElement.value = 50;
            break;

            dafault:
            rareElement.value = -1;
            break;
    }

    document.getElementById("buttonExchange").value = selectedCurrency + "から円に両替";
    document.getElementById("buttonExchange2").value = "円から" + selectedCurrency + "に両替";

}



function exchange(excahngeType) {
    var rate = document.getElementById("rate").value;
    var inMoney = document.getElementById("inMoney").value;

    var exchangeMoney;
    var currency;

    if (excahngeType == "toYen") {
        exchangeMoney = inMoney * rate;
        currency = "円";
        var currencyfrom = document.getElementById("currencyFrom");
        currencyfrom.innerHTML = selectedCurrency;
    } else {
        exchangeMoney = inMoney / rate;
        currency = selectedCurrency;
        var currencyfrom = document.getElementById("currencyFrom");
        currencyfrom.innerHTML = "円";

    }

    exchangeMoney = Math.round(exchangeMoney * 100) / 100;

    if (isNaN(exchangeMoney)) {
        alert("数値を入力してください！");
        exchangeMoney = "- - -";
    }

    if (rate <= 0) {
        alert("為替レートには０より大きな数値を入力してください！");
        exchangeMoney = "- - -";
    }

    var outMoneyElement = document.getElementById("outMoney");
    outMoneyElement.innerHTML = exchangeMoney + currency;
}
