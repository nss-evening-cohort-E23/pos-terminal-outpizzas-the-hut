import renderToDom from '../utils/renderToDom';

const addItemsToOrder = () => {
  const domString = `<div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <p>This is a simple modal!</p>
  </div>

</div>`;

  renderToDom('#app', domString);
};

export default addItemsToOrder;
