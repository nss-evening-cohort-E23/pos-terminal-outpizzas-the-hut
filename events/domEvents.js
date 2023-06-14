import viewOrder from '../pages/orderDetails';
import { getMenuItem } from '../api/menuData';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details')) {
      const [, firebaseKey] = e.target.id.split('--');
      getMenuItem(firebaseKey).then(viewOrder);
    }
  });
};

export default domEvents;
