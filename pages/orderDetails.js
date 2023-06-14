import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  const domString = `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
      <div class="mt-5">
      <h5>${obj.menuItems[0].dish}</h5>
      <h5>${obj.menuItems[0].price}</h5>
        <i id="edit-item-btn--">EDIT ITEM</i>
        <i id="delete-item--">DELETE ITEM</i>
      </div>
    </div>
    </div>
   </div>`;

  renderToDom('#app', domString);
};

export default viewOrder;
