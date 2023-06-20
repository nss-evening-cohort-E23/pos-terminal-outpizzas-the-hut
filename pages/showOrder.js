import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrderCards = (array) => {
  clearDom();
  let domString = '<div><select id="filterBy" class="form-select" aria-label="Default select example"><option selected disabled hidden>Filter by</option><option value="1">Open</option><option value="2">Closed</option></select><label for="search" class="form-label"></label><input id="search" type="text" class="form-control"></div>';
  console.warn(array);
  array.forEach((card) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="order-name card-title">${card.name}'s order</h5>
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
