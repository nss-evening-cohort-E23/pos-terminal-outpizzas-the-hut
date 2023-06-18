import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrderCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((card) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${card.name}'s order</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Completed: ${card.completed}</li>
    <li class="list-group-item">Customer phone number ${card.phone}</li>
    <li class="list-group-item">Customer phone number ${card.email}</li>
    <li class="list-group-item">Order type: ${card.orderMethod}</li>
    <li class="list-group-item">Order total: $${card.orderPrice}</li>
  </ul>
  <div class="card-body">
    <a href="#" id="order-details--${card.firebaseKey}" class="card-link">Details</a>
    <a href="#" id="edit-order--${card.firebaseKey}" class="card-link">Edit</a>
    <a href="#" id="delete-order--${card.firebaseKey}" class="card-link">Delete</a>
  </div>
</div>`;
  });
  renderToDom('#viewContainer', domString);
};

export default showOrderCards;
