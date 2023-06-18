import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="container" id="nav-container">
    <a class="navbar-brand" href="#">
      <img id="logo" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Bootstrap" width="70" height="70">
    </a>
    <button id="viewOrders" type="button" class="btn btn-primary">View orders</button>
    <button id="createOrder" type="button" class="btn btn-primary">Create order</button>
    <button id="create-order-btn" type="button" class="btn btn-primary">Create order</button>
    <button id="viewMenu" type="button" class="btn btn-primary">View Menu</button>
    <div id="logout"></div>
  </div>
</nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
