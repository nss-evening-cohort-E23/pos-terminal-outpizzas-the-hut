import { getOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';
import newOrderForm from '../components/newOrderForm';

const navagationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
    if (e.target.id === 'createOrder') {
      newOrderForm();
    }
  });
};

export default navagationEvents;
