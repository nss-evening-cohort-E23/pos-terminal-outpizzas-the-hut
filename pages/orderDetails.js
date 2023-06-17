import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  let domString = '';

  for (let i = 0; i < obj.menuItems.length; i++) {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <div class="mt-5">
        <h5>${obj.menuItems[i].dish}</h5>
        <h5>${obj.menuItems[i].price}</h5>
          <i id="delete-item--${obj.firebaseKey}--${obj.menuItems[i].firebaseKey}">DELETE ITEM</i>
        </div>
      </div>
      </div>
     </div>`;
  }

  domString += `
  <button type="button" class="btn btn-primary" id="addmenuitem">Add Item</button>
  <button type="button" class="btn btn-primary" id="payment">Go To Payment</button>
  `;

  renderToDom('#viewContainer', domString);
};

export default viewOrder;
