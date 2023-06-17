import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const newOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="name">Order Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="orderName" placeholder="Enter Order Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Customer Phone Number:</label>
        <input type="text" class="form-control" id="phone" placeholder="Enter Phone Number" value="${obj.phone || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Customer Email:</label>
        <input type="text" class="form-control" id="phone" placeholder="Enter Email" value="${obj.email || ''}" required>
      </div><hr>
      <div class="form-group">
        <label for="orderType">Order Type:</label>
        <select id="orderType" name="orderType">
          <option option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select><hr>
      <button id="addItemsToOrder" type="button" class="btn btn-primary">Select Items For Order</button>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>
  `;

  renderToDom('#formContainer', domString);
};

export default newOrderForm;
