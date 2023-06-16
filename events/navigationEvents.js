import { getOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';

const navigationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
  });
};

export default navigationEvents;
