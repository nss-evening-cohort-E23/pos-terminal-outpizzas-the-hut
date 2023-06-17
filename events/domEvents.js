import viewOrder from '../pages/orderDetails';
import {
  getSingleOrder, deleteOrderItem, deleteOrder, getOrder
} from '../api/orderData';
import { getSingleMenuItem, deleteMenuItem, getMenuItem } from '../api/menuData';
import newOrderForm from '../components/newOrderForm';
import addItemForm from '../pages/addItemForm';
import showOrderCards from '../pages/showOrder';
import revenuePage from '../pages/revenue';
import closeOrderForm from '../pages/closeOrderForm';
import { showMenu } from '../pages/menu';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewOrder);
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
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrder().then(showOrderCards);
      });
    }

    if (e.target.id.includes('payment')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => closeOrderForm(orderObj));
    }

    if (e.target.id.includes('delete-item--')) {
      const [, firebaseKey, key2] = (e.target.id.split('--'));
      deleteOrderItem(firebaseKey, key2).then(() => {
        getSingleOrder(firebaseKey).then(viewOrder);
      });
    }
    // EDIT MENU ITEM CLICK EVENT
    if (e.target.id.includes('edit-menu-item')) {
      console.warn('edit menu item button clicked');
      const [, firebaseKey] = e.target.id.split('--');

      getSingleMenuItem(firebaseKey).then((cardObj) => addItemForm(cardObj));
    }

    if (e.target.id.includes('delete-menu-item')) {
      console.warn('delete menu item button clicked', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');

      deleteMenuItem(firebaseKey).then(() => {
        getMenuItem().then(showMenu);
      });
    }

    if (e.target.id === 'revenueBtn') {
      console.warn('clicked menu button');
      getOrder().then(revenuePage);
    }
  });
};

export default domEvents;
