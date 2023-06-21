import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyMenu = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#viewContainer', domString);
};

const showMenu = (array) => {
  clearDom();

  let domString = `
  <div class="top-row">
    <h1 class="title">MENU</h1>
    <button id="add-menu-item" type="button" class="btn btn-primary">Add Menu Item</button>
  </div>`;
  array.forEach((item) => {
    domString += `
    <div class="card-container">
      <div class="card" id="${item.dish}-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="item-dish">${item.dish}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="item-price">Price: $${item.price}</h6>
          <img id="pizza-pic" src="https://modpizza.com/wp-content/uploads/2021/12/Website-Maddy.png">
          <h6 class="card-subtitle mb-2 text-body-secondary" id="item-description">${item.description}</h6>
          <hr>
          <div id="card-icons">
            <i id="edit-menu-item--${item.firebaseKey}" type="button" class="fas fa-solid fa-pen fa-lg"></i>
            <i id="delete-menu-item--${item.firebaseKey}" type="button" class="fas fa-solid fa-trash fa-lg"></i>
          </div>
        </div>
      </div>
    </div>`;
  });
  renderToDom('#viewContainer', domString);
};

export { emptyMenu, showMenu };
