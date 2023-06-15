import { getOrder } from '../api/orderData';
import showOrderCards from '../pages/showOrder';
import { getMenuItem } from '../api/menuData';
import { showMenu } from '../pages/menu';

const navigationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }

    if (e.target.id === 'viewMenu') {
      console.warn('clicked menu button');
      getMenuItem().then(showMenu);
    }
  });
};

export default navigationEvents;
