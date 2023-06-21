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
  const domString = `
  <div class="top-row">
    <h1 class="title">REVENUE</h1>
  </div>
  <div id="revenue-page">
    <h1><u><b>Gross Income</b></u></h1>
    <h2><b>Gross Income:</b> $${grossIncome}</h2>
    <h3><b>Total Tips:</b> $${totalTips}</h3>
    <h3><b>Total online orders:</b> ${totalOnline}</h3>
    <h3><b>Total walk in orders:</b> ${totalWalk}</h3>
    <h3><b>Payment Types:</b></h3>
    <h4><i>Cash</i> - ${totalCash}</h4>
    <h4><i>Card</i> - ${totalCard}</h4>
  </div>`;
  renderToDom('#viewContainer', domString);
};

export default revenuePage;
