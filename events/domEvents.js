import viewOrder from '../pages/orderDetails';
import {
  getSingleOrder, deleteOrderItem, deleteOrder, getOrder, completedOrders
} from '../api/orderData';
import { getSingleMenuItem, deleteMenuItem, getMenuItem } from '../api/menuData';
import newForm from '../components/newOrderForm';
import addItemForm from '../pages/addItemForm';
import showOrderCards from '../pages/showOrder';
import revenuePage from '../pages/revenue';
import closeOrderForm from '../pages/closeOrderForm';
import { showMenu } from '../pages/menu';
import { filterClosed, filterOpen, search } from '../utils/sample_data/filterFun';
import showOrderMenu from '../pages/selectorMenu';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewOrder);
    }
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
    if (e.target.id === 'create-order-btn') {
      newForm();
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
      completedOrders().then((orderArray) => revenuePage(orderArray));
    }
    if (e.target.id.includes('addItemsToOrder')) {
      getMenuItem().then(showOrderMenu);
    }
    // UPDATE ORDER BTN
    if (e.target.id.includes('edit-order')) {
      console.warn('update order clicked');
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((cardObj) => newForm(cardObj));
    }
  });

  document.querySelector('#viewContainer').addEventListener('change', (e) => {
    if (e.target.id === ('start') || e.target.id === ('end')) {
      const date1 = document.querySelector('#start').value;
      const date2 = document.querySelector('#end').value;
      if (e.target.id === 'end' && date1 !== '') {
        completedOrders().then((orderArray) => revenuePage(orderArray, date1, date2));
      } else if (e.target.id === 'start' && date2 !== '') {
        completedOrders().then((orderArray) => revenuePage(orderArray, date1, date2));
      }
    }
  });
  document.querySelector('#maincontainer').addEventListener('change', (e) => {
    switch (e.target.value) {
      case '1':
        console.warn(1);
        filterClosed();
        break;
      case '2':
        console.warn(2);
        filterOpen();
        break;
      default:
        break;
    }
  });
  document.querySelector('#viewContainer').addEventListener('keydown', (e) => {
    if (e.key === ('Enter')) {
      search(e);
    }
  });
};
export default domEvents;
