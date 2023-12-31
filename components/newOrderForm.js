import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const newForm = (obj = {}) => {
  clearDom();

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
      <button id="${obj.firebaseKey ? 'update-order' : 'addItemsToOrder'}" type="${obj.firebaseKey ? 'submit' : 'button'}" class="btn btn-primary">${obj.firebaseKey ? 'Update Order' : 'Add menu items'}</button>
      <div id="showMenuItems"></div>
    </form>
    
  `;
  renderToDom('#formContainer', domString);
};

export default newForm;
