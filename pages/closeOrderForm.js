import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrderForm = (order = {}) => {
  clearDom();
  const domString = `
  <form id="close-order--${order.firebaseKey}">
    <div class="form-box">
      <h3 id="form-title">Close Order</h3>
      <label for="payment">Payment Type</label>
      <select class="paymenttype" aria-label="Default select example" id="ptype">
        <option selected>Select a Payment Type</option>
        <option value="card">Card</option>
        <option value="Cash">Cash</option>
      </select>
    </div>
    <div class="form-box">
    <label for="payment">Tip Amount</label>
      <input type="text" class="form-control" id="tip-input" placeholder="Enter a tip amount" value="${order.tip || ''}" required>
    </div>
      <button type="submit" id="close-order-btn" class="btn btn-danger" for="close-order">Close Order</button>
    </div>
  </form>
  `;

  renderToDom('#formContainer', domString);
};

export default closeOrderForm;
