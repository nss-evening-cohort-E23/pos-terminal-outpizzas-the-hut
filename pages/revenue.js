import renderToDom from '../utils/renderToDom';

const revenuePage = (array) => {
  let grossIncome = 0;
  let totalTips = 0;
  let totalOnline = 0;
  let totalWalk = 0;
  let totalCash = 0;
  let totalCard = 0;
  array.forEach((card) => {
    grossIncome += (card.orderPrice + card.tip);
    totalTips += card.tip;
    if (card.paymentType === 'card') {
      totalCard += 1;
    } else {
      totalCash += 1;
    }
    if (card.orderMethod === 'online') {
      totalOnline += 1;
    } else {
      totalWalk += 1;
    }
  });
  const domString = `<h1>Gross Income</h1>
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
