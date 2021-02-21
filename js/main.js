var selectedCurrency = "オーストラリアドル(オーストラリア)";
var rate_list = new Array();

window.onload = function () {
    getCurrency();
}

async function getCurrency() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://api.exchangeratesapi.io/latest', true);
    request.responseType = 'json';

    request.onload = function () {
        var data = this.response;
        var json = JSON.stringify(data.rates);;
        rate_list = JSON.parse(json);
        console.log(data);
    };

    request.send();
}

function changeCurrency() {
    var currency = document.getElementById("currency");

    selectedCurrency = currency.options[currency.selectedIndex].value;
    var rateElement = document.getElementById("rate");

    switch (selectedCurrency) {

        case "円（日本）":
            rateElement.value = rate_list["JPY"] / rate_list["JPY"];
            break;
        case "オーストラリアドル(オーストラリア)":
            rateElement.value = rate_list["JPY"] / rate_list["AUD"];
            break;
        case "クローナ（アイスランド）":
            rateElement.value = rate_list["JPY"] / rate_list["ISK"];
            break;
        case "ゴールド(ドラクエ)":
            rateElement.value = 50;
            break;
        case "シャケル（イスラエル）":
            rateElement.value = rate_list["JPY"] / rate_list["SEK"];
            break;
        case "ズウォティ（ポーランド）":
            rateElement.value = rate_list["JPY"] / rate_list["PLN"];
            break;
        case "フィリピンペソ（フィリピン）":
            rateElement.value = rate_list["JPY"] / rate_list["PHP"];
            break;
        case "ペリカ(カイジ)":
            rateElement.value = 0.1;
            break;
        case "米ドル（アメリカ）":
            rateElement.value = rate_list["JPY"] / rate_list["USD"];
            break;
        case "ユーロ（ヨーロッパ）":
            rateElement.value = rate_list["JPY"];
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