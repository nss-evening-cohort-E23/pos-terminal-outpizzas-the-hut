import renderToDom from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img id="logo" src="https://i.kym-cdn.com/entries/icons/original/000/032/408/cover1.jpg" alt="Bootstrap" width="50" height="30">
    </a>
    <button id="viewOrders" type="button" class="btn btn-primary">View orders</button>
    <button id="create-order-btn" type="button" class="btn btn-primary">Create order</button>
    <button id="viewMenu" type="button" class="btn btn-primary">View Menu</button>
    <div id="logout"></div>
  </div>
</nav>`;

  renderToDom('#navBar', domString);
};

export default navBar;
