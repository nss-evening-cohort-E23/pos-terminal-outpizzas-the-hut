import { createMenuItem, updateMenuItem, getMenuItem } from '../api/menuData';
import { updateOrder } from '../api/orderData';
import homePage from '../pages/home';
import { showMenu } from '../pages/menu';

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

    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      const payload = {
        paymentType: document.querySelector('#ptype').value,
        tip: document.querySelector('#tip-input').value,
        completed: true,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        homePage();
      });
    }
  });
};

export default formEvents;
