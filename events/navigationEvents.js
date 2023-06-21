import { getOrder } from '../api/orderData';
import newForm from '../components/newOrderForm';
import showOrderCards from '../pages/showOrder';
import { getMenuItem } from '../api/menuData';
import { showMenu } from '../pages/menu';
// import homePage from '../pages/home';

const navigationEvents = () => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id === 'viewOrders') {
      getOrder().then(showOrderCards);
    }
    if (e.target.id === 'viewMenu') {
      console.warn('clicked menu button');
      getMenuItem().then(showMenu);
    }
    if (e.target.id === 'createOrder') {
      console.warn('new form event listener');
      newForm();
    }
    if (e.target.id === 'logo') {
      console.warn('clicked menu button');
      // homePage();
    }
  });
};

export default navigationEvents;
