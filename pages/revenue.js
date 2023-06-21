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
        value=${input1 ? `${input1}` : '2023-06-01'}>
  <input type="date" id="end" name="rev-end"
        value=${input2 ? `${input2}` : new Date().toISOString().split('T')[0]}>`;
  renderToDom('#viewContainer', domString);
  const date1 = document.getElementById('start').value;
  const date2 = document.getElementById('end').value;
  console.warn(date1);
  console.warn(date2);

  // for (let i = 0; i < array.length; i++)
  array.forEach((item) => {
    if (!input1) {
      console.warn('defualt');
      grossIncome += (item.orderPrice + item.tip);
      totalTips += item.tip;
      if (item.paymentType === 'card') {
        totalCard += 1;
      } else {
        totalCash += 1;
      }
      if (item.orderMethod === 'Online') {
        totalOnline += 1;
      } else {
        totalWalk += 1;
      }
    } else if (item.time > date1 && item.time < date2) {
      grossIncome += (item.orderPrice + item.tip);
      totalTips += item.tip;
      if (item.paymentType === 'card') {
        totalCard += 1;
      } else {
        totalCash += 1;
      }
      if (item.orderMethod === 'Online') {
        totalOnline += 1;
      } else {
        totalWalk += 1;
      }
    }
  });

  domString += `<h1>Gross Income</h1>
  <h2>Gross Income: $${grossIncome.toFixed(2)}</h2>
  <h3>Total Tips: $${totalTips}</h3>
  <h3>Total online orders: ${totalOnline}</h3>
  <h3>Total walk in orders: ${totalWalk}</h3>
  <h3>Payment Types:</h3>
  <h4>Cash - ${totalCash}</h4>
  <h4>Card - ${totalCard}</h4>`;
  renderToDom('#viewContainer', domString);
};

export default revenuePage;
