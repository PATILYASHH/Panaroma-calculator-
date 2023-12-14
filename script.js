function calculate() {
  var invest = parseFloat(document.getElementById('invest').value);
  var uniswap = parseFloat(document.getElementById('uniswap').value);
  var pana = parseFloat(document.getElementById('pana').value);

  var d, e, per;

  if (uniswap < pana) {
    d = pana - uniswap;
    e = d / uniswap;
    per = e * 100;
  } else if (uniswap > pana) {
    d = uniswap - pana;
    e = d / pana;
    per = e * 100;
  } else {
    alert("Prices are equal!");
    return;
  }

  document.getElementById('priceDifference').innerText = "The difference between both is " + d;
  document.getElementById('percentageDifference').innerText = "The percentage difference is " + per + "%";

  var profit = invest * (per / 100);
  document.getElementById('profit').innerText = "The profit of this trade is " + profit.toFixed(2);

  document.getElementById('result').style.display = 'block';
}

function resetForm() {
  document.getElementById('cryptoForm').reset();
  document.getElementById('result').style.display = 'none';
}

function showHistory() {
  var investValue = document.getElementById('invest').value;
  var uniswapValue = document.getElementById('uniswap').value;
  var panaValue = document.getElementById('pana').value;

  var historyEntry = document.createElement('p');
  historyEntry.innerText = `Invest: ${investValue}, Uniswap: ${uniswapValue}, Panaroma: ${panaValue}`;

  var historyContainer = document.getElementById('historyContainer');
  historyContainer.appendChild(historyEntry);
}
function goBack() {
  window.location.href = 'index.html';
}