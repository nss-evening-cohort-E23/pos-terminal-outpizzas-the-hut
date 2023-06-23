import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  let domString = '';

  if (obj.menuItems === undefined) {
    domString += '<p>There are no items in this order currently</p>';
  } else {
    for (let i = 0; i < obj.menuItems.length; i++) {
      domString += `
      <div id="order-detail-card-container">
        <div class="card" id="order-detail-card">
          <div class="card-body" id="order-detail-card-body">
            <div class="mt-5" id="order-detail-card-items">
              <h5 id="order-item-dish">${obj.menuItems[i].dish}</h5>
              <h5 id="order-item-price">$${obj.menuItems[i].price}</h5>
              <i id="delete-item--${obj.firebaseKey}--${obj.menuItems[i].id}">DELETE ITEM</i>
            </div>
            </div>
          </div>
        </div>
      </div>`;
    }
  }
  domString += `
  <div id="order-detail-btns">
    <button type="button" class="btn btn-primary" id="addmenuitem--${obj.firebaseKey}">Add Item</button>
    <button type="button" class="btn btn-primary" id="payment--${obj.firebaseKey}">Go To Payment</button>
  </div>
  `;

  renderToDom('#viewContainer', domString);
};

export default viewOrder;
