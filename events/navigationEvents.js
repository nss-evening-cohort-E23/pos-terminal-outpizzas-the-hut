import { getOrder } from '../api/orderData';
import newForm from '../components/newOrderForm';
import showOrderCards from '../pages/showOrder';
import { getMenuItem } from '../api/menuData';
import { showMenu } from '../pages/menu';
import homePage from '../pages/home';

const navigationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
    if (e.target.id === 'viewMenu') {
      getMenuItem().then(showMenu);
    }
    if (e.target.id === 'createOrder') {
      newForm();
    }
    if (e.target.id === 'logo') {
      homePage();
    }
  });
};

export default navigationEvents;
