function exchange() {
    var rate = document.getElementById("rate").value;
    var inMoney = document.getElementById("inMoney").value;

    var exchangeMoney = inMoney * rate;

    var outMoneyElement = document.getElementById("outMoney");
    outMoneyElement.innerHTML = exchangeMoney + "円";
}