import renderToDom from '../utils/renderToDom';

const revenuePage = (array, input1, input2) => {
  console.warn(array);
  let grossIncome = 0;
  let totalTips = 0;
  let totalOnline = 0;
  let totalWalk = 0;
  let totalCash = 0;
  let totalCard = 0;

  let domString = `
  <div class="top-row">
    <h1 class="title">REVENUE</h1>
  </div>`;

  domString += `<div id="date-inputs><label for="start">Start date:</label>
  <input type="date" id="start" name="rev-start"
        value=${input1}
        min="2018-01-01" max="2024-12-31">
  <input type="date" id="end" name="rev-end"
        value=${input2}
        min="2018-01-01" max="2024-12-31"></div>`;
  renderToDom('#viewContainer', domString);
  const date1 = document.getElementById('start').value;
  const date2 = document.getElementById('end').value;
  console.warn(date1);

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

  domString += `<div id="revenue-page"><h1><u><b>Gross Income</b></u></h1>
  <h2><b>Gross Income:</b> $${grossIncome}</h2>
  <h3><b>Total Tips:</b> $${totalTips}</h3>
  <h3><b>Total online orders:</b> ${totalOnline}</h3>
  <h3><b>Total walk in orders:</b> ${totalWalk}</h3>
  <h3><u><b>Payment Types:</b></u></h3>
  <h4><i>Cash</i> - ${totalCash}</h4>
  <h4><i>Card</i> - ${totalCard}</h4></div>`;
  renderToDom('#viewContainer', domString);
};

export default revenuePage;
