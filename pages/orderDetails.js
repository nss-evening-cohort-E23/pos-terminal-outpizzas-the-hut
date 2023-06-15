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
          <i id="edit-item-btn--">EDIT ITEM</i>
          <i id="delete-item--">DELETE ITEM</i>
        </div>
      </div>
      </div>
     </div>`;
  }

  renderToDom('#viewContainer', domString);
};

export default viewOrder;
