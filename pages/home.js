import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const homePage = () => {
  clearDom();
  const domString = `
  <div class="top-row">
    <h1 id="welcome-title">HIP HOP PIZZA & WANGS</h1>
  </div>
    <div id="welcome-buttons">
      <button type="button" class="btn btn-primary">View Orders</button>
      <button id="create-order-btn" type="button" class="btn btn-primary">Create An Order</button>
      <button id="revenueBtn" type="button" class="btn btn-primary">View Revenue</button>
    </div>
  `;
  renderToDom('#viewContainer', domString);
};

export default homePage;
