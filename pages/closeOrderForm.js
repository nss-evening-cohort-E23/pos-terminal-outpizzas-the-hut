import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrderForm = (order = {}) => {
  clearDom();
  const domString = `
  <form id='submit-order'}">
    <div class="form-box">
      <h3 id="form-title">Close Order</h3>
      <input type="text" class="form-control" id="dish-input" placeholder="Select a Payment Type" value ="${order.payment || ''}" required>
    </div>
    <div class="form-box">
      <input type="text" class="form-control" id="tip-input" placeholder="Enter a tip amount" value ="${order.tip || ''}" required>
    </div>
      <button type="submit" id="close-order-btn" class="btn btn-danger" for="submit-order">Close Order</button>
    </div>
  </form>
  `;

  renderToDom('#formContainer', domString);
};

export default closeOrderForm;
