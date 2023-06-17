import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getSingleMenuItem } from '../api/menuData';

const newOrderForm = (obj = {}) => {
  clearDom();
  console.warn(obj);
  const orderItems = [];
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
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
        <input type="text" class="form-control" id="email-form" placeholder="Enter Email" value="${obj.email || ''}" required>
      </div><hr>
      <div class="form-group">
        <label for="orderType">Order Type:</label>
        <select id="orderType" name="orderType">
          <option option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select><hr>
      <button id="addItemsToOrder" type="button" class="btn btn-primary">Select Items For Order</button>
      <div id="showMenuItems"></div>
    </form>
    
  `;
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleMenuItem(firebaseKey).then((item) => orderItems.push(item));
      console.warn(orderItems);
    }
  });
  renderToDom('#formContainer', domString);
};

export default newOrderForm;
