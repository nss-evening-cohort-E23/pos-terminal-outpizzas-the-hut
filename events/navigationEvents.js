import { getOrder } from '../api/orderData';
import newOrderForm from '../components/newOrderForm';
import showOrderCards from '../pages/showOrder';

const navagationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
    if (e.target.id === 'create-order-btn') {
      console.warn('test');
      newOrderForm();
    }
  });
};

export default navagationEvents;
