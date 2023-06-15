import renderToDom from '../utils/renderToDom';

const homePage = () => {
  const domString = `
  <h1>Welcome user</h1>
  <button type="button" class="btn btn-primary">View Orders</button>
  <button type="button" class="btn btn-primary" id="create-order-btn">Create An Order</button>
  <button type="button" class="btn btn-primary">View Revenue</button>
  `;
  renderToDom('#viewContainer', domString);
};

export default homePage;
