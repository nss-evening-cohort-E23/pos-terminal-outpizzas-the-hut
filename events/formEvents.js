import {
  createMenuItem, updateMenuItem, getMenuItem, getSingleMenuItem
} from '../api/menuData';
import homePage from '../pages/home';
import { showMenu } from '../pages/menu';
import { createOrder, getOrder, updateOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';
import orderTotal from '../utils/orderTotal';

const formEvents = () => {
  document.querySelector('#maincontainer').addEventListener('submit', (e) => {
    e.preventDefault();
    console.warn(e.target.id);
    // CREATE MENU ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('clicked submit menu item button', e.target.id);
      const payload = {
        dish: document.querySelector('#dish-input').value,
        price: document.querySelector('#price-input').value,
        description: document.querySelector('#description-input').value,
      };

      document.querySelector('form').reset();

      createMenuItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateMenuItem(patchPayload).then(() => {
          getMenuItem().then(showMenu);
        });
      });
    }
    // UPDATE MENU ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('clicked edit button', e.target.id);
      const payload = {
        dish: document.querySelector('#dish-input').value,
        price: document.querySelector('#price-input').value,
        description: document.querySelector('#description-input').value,
        firebaseKey,
      };

      document.querySelector('form').reset();

      updateMenuItem(payload).then(() => {
        getMenuItem().then(showMenu);
      });
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('clicked edit button', e.target.id);
      const payload = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email-form').value,
        phone: document.querySelector('#phone').value,
        time: new Date().toISOString().split('T')[0],
        firebaseKey,
      };

      document.querySelector('form').reset();

      updateOrder(payload).then(() => {
        getOrder().then(showOrderCards);
      });
    }
    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      const payload = {
        paymentType: document.querySelector('#ptype').value,
        tip: Number(document.querySelector('#tip-input').value),
        completed: true,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        homePage();
      });
    }
  });
};

const addOrderItemFunc = () => {
  let array = [];
  document.querySelector('#formContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('add-order-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleMenuItem(firebaseKey).then((item) => {
        Object.assign(item, { id: array.length });
        array.push(item);
      });
      console.warn('this is add order item', array);
    }
  });
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    // SUBMIT ORDER
    if (e.target.id.includes('submit-order')) {
      console.warn('submit order clicked');
      const payload = {
        completed: false,
        email: document.querySelector('#email-form').value,
        name: document.querySelector('#name').value,
        orderMethod: document.querySelector('#orderType').value,
        orderPrice: Number(orderTotal(array)),
        phone: document.querySelector('#phone').value,
        menuItems: array
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = {
          firebaseKey: name,
          time: new Date().toISOString().split('T')[0],
        };

        updateOrder(patchPayload).then(() => {
          getOrder().then(showOrderCards);
        });
      });
    }
    array = [];
  });
};

export { formEvents, addOrderItemFunc };
