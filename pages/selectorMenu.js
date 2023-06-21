// import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrderMenu = (array) => {
  let domString = '<button type="submit" class="btn btn-primary">Submit</button>';

  array.forEach((item) => {
    domString += `
    <div class="card" id="${item.dish}-card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title" id="item-dish">${item.dish}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary" id="item-price">Price: ${item.price}</h6>
        <hr>
        <div id="card-icons">
          <button type="button" id="add-order-item--${item.firebaseKey}" class="fas fa-solid fa-plus"></button>
        </div>
      </div>
    </div>`;
  });
  renderToDom('#showMenuItems', domString);
};

export default showOrderMenu;
