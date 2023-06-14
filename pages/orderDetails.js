import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <div class="mt-5">
        <i id="edit-item-btn--">EDIT ITEM</i>
        <i id="delete-item--">DELETE ITEM</i>
      </div>
    </div>
  <div class="text-white ms-5 details">
    <h5>${obj.name}</h5>
    <h5>${obj.name}</h5>
     </div>
   </div>`;

  renderToDom('#app', domString);
};

export default viewOrder;
