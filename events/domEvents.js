import viewOrder from '../pages/orderDetails';
import { getMenuItem } from '../api/menuData';
import newOrderForm from '../components/newOrderForm';
import addItemForm from '../pages/addItemForm';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      getMenuItem(firebaseKey).then(viewOrder);
    }
    if (e.target.id === 'create-order-btn') {
      console.warn('test');
      newOrderForm();
    }
    // Brings up form to add an item to the menu
    if (e.target.id === 'add-menu-item') {
      console.warn('add menu item button clicked');
      addItemForm();
    }
  });
};

export default domEvents;
