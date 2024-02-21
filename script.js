document.getElementById('calculate').addEventListener('click', function() {
    var total = parseFloat(document.getElementById('total').value);
    var percentage = parseFloat(document.getElementById('percentage').value);
    var tip = total * (percentage / 100);
    var totalAmount = total + tip;
    document.getElementById('result').innerHTML = "Gorjeta: R$ " + tip.toFixed(2) + "<br>Total: R$ " + totalAmount.toFixed(2);
});