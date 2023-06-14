import { getOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';

const navagationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
  });
};

export default navagationEvents;
