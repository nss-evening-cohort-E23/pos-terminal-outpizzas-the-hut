import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  let domString = '<div id="order-cards-btns"><div id="order-detail-card-container">';

  if (obj.menuItems === undefined) {
    domString += '<p>There are no items in this order currently</p> <div id="showMenuItems"></div>';
  } else {
    for (let i = 0; i < obj.menuItems.length; i++) {
      domString += `
      <div>
        <div class="card" id="order-detail-card">
          <div class="card-body" id="order-detail-card-body">
            <div class="mt-5" id="order-detail-card-items">
              <h5 id="order-item-dish">${obj.menuItems[i].dish}</h5>
              <h5 id="order-item-price">$${obj.menuItems[i].price}</h5>
              <i id="delete-item--${obj.firebaseKey}--${obj.menuItems[i].id}">DELETE ITEM</i>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  domString += `
  </div>
  <div id="order-detail-btns">
    <button type="button" class="btn btn-primary" id="addNewItem--${obj.firebaseKey}">Add Item</button>
    <button type="button" class="btn btn-primary" id="payment--${obj.firebaseKey}">Go To Payment</button>
  </div>
  </div>`;

  renderToDom('#formContainer', domString);
};

export default viewOrder;
