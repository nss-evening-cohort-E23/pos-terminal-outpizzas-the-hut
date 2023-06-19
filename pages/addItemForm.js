import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addItemForm = (item = {}) => {
  clearDom();
  const domString = `
  <form id="${item.firebaseKey ? `update-item--${item.firebaseKey}` : 'submit-item'}">
    <div class="form-box">
      <h3 id="form-title">Add Menu Item:</h3>
      <input type="text" class="form-control" id="dish-input" placeholder="Dish Name" value ="${item.dish || ''}" required>
    </div>
    <div class="form-box">
      <input type="text" class="form-control" id="price-input" placeholder="Price" value ="${item.price || ''}" required>
    </div>
      <button type="submit" id="submit-item-btn" class="btn btn-danger" for="submit-item">Add Item</button>
    </div>
  </form>`;

  renderToDom('#formContainer', domString);
};

export default addItemForm;
