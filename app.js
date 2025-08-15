let historyStack = [];
let redoStack = [];

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function updateChart() {
  const symbol = document.getElementById('symbolSelect').value;
  loadTradingViewChart(symbol);
}

function updateCurrency() {
  const currency = document.getElementById('currencySelect').value;
  alert(`Currency set to ${currency}`);
}

function undoAction() {
  if (historyStack.length > 0) {
    redoStack.push(historyStack.pop());
    alert('Undo action performed');
  }
}

function redoAction() {
  if (redoStack.length > 0) {
    historyStack.push(redoStack.pop());
    alert('Redo action performed');
  }
}

function loadTradingViewChart(symbol) {
  document.getElementById('tradingview_chart').innerHTML = '';
  new TradingView.widget({
    container_id: "tradingview_chart",
    autosize: true,
    symbol: symbol,
    interval: "60",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    enable_publishing: false
  });
}

window.addEventListener('load', () => {
  loadTradingViewChart('NASDAQ:AAPL');
});
