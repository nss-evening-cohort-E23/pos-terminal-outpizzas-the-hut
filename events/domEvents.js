import viewOrder from '../pages/orderDetails';
import { getMenuItem } from '../api/menuData';
import newOrderForm from '../components/newOrderForm';
import addItemForm from '../pages/addItemForm';
import showOrderMenu from '../pages/selectorMenu';
import { createOrder, updateOrder, getOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';
// import { showMenu } from '../pages/menu';
// import addItemsToOrder from '../pages/addItemsToOrder';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      getMenuItem(firebaseKey).then(viewOrder);
    }
    if (e.target.id === 'create-order-btn') {
      newOrderForm();
    }
    // Brings up form to add an item to the menu
    if (e.target.id === 'add-menu-item') {
      console.warn('add menu item button clicked');
      addItemForm();
    }
    if (e.target.id.includes('addItemsToOrder')) {
      getMenuItem().then(showOrderMenu);
    }
    if (e.target.id.includes('submit-order')) {
      console.warn('testtttttt');
      const payload = {
        completed: false,
        email: document.querySelector('#email-form').value,
        name: document.querySelector('#name').value,
        orderMethod: document.querySelector('#orderType').value,
        orderPrice: document.querySelector('#orderPrice').value,
        phone: document.querySelector('#phone').value,
        menuItems: document.querySelector('#menuItems').value,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then(showOrderCards);
        });
      });
    }
  });
};

export default domEvents;
