function exchange(excahngeType) {
    var rate = document.getElementById("rate").value;
    var inMoney = document.getElementById("inMoney").value;

    var exchangeMoney;
    var currency;

    if (excahngeType == "toYen") {
        exchangeMoney = inMoney * rate;
        currency = "円";
    } else {
        exchangeMoney = inMoney / rate;
        currency = "ドル";

    }

    var outMoneyElement = document.getElementById("outMoney");
    outMoneyElement.innerHTML = exchangeMoney + currency;
}