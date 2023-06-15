import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyMenu = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#menuContainer', domString);
};

const showMenu = (array) => {
  clearDom();

  let domString = '<button id="add-menu-item" type="button" class="btn btn-primary">Add Menu Item</button>';
  array.forEach((item) => {
    domString += `
      <div class="card" id="${item.dish}-card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="item-dish">${item.dish}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary" id="item-price">Price: ${item.price}</h6>
          <hr>
          <div id="card-icons">
            <i id="update-card--${item.firebaseKey}" class="fas fa-solid fa-pen fa-lg"></i>
            <i id="delete-card--${item.firebaseKey}" class="fas fa-solid fa-trash fa-lg"></i>
          </div>
        </div>
      </div>`;
  });
  renderToDom('#menuContainer', domString);
};

export { emptyMenu, showMenu };
