import renderToDom from '../utils/renderToDom';

const revenuePage = (array, input1, input2) => {
  let grossIncome = 0;
  let totalTips = 0;
  let totalOnline = 0;
  let totalWalk = 0;
  let totalCash = 0;
  let totalCard = 0;

  let domString = '';

  domString += `<label for="start">Start date:</label>
  <input type="date" id="start" name="rev-start"
        value=${input1}
        min="2018-01-01" max="2024-12-31">
  <input type="date" id="end" name="rev-end"
        value=${input2}
        min="2018-01-01" max="2024-12-31">`;
  renderToDom('#viewContainer', domString);
  const date1 = document.getElementById('start').value;
  const date2 = document.getElementById('end').value;

  for (let i = 0; i < array.length; i++) {
    if (array[i].time > date1 && array[i].time < date2) {
      grossIncome += (array[i].orderPrice + array[i].tip);
      totalTips += array[i].tip;
      if (array[i].paymentType === 'card') {
        totalCard += 1;
      } else {
        totalCash += 1;
      }
      if (array[i].orderMethod === 'online') {
        totalOnline += 1;
      } else {
        totalWalk += 1;
      }
    }
  }

  domString += `<h1>Gross Income</h1>
  <h2>Gross Income: $${grossIncome}</h2>
  <h3>Total Tips: $${totalTips}</h3>
  <h3>Total online orders: ${totalOnline}</h3>
  <h3>Total walk in orders: ${totalWalk}</h3>
  <h3>Payment Types:</h3>
  <h4>Cash - ${totalCash}</h4>
  <h4>Card - ${totalCard}</h4>`;
  renderToDom('#viewContainer', domString);
};

export default revenuePage;
