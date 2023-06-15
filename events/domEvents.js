import viewOrder from '../pages/orderDetails';
import { getSingleOrder } from '../api/orderData';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id.includes('order-details--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewOrder);
    }
  });
};

export default domEvents;
