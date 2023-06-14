import navagationEvents from '../events/navigationEvents';
import homePage from '../pages/home';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';

import viewOrder from '../pages/orderDetails';
import { getSingleOrder } from '../api/orderData';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  navagationEvents();
  const firebaseKey = '-NXqzM_R3yriHKML0fsl';
  getSingleOrder(firebaseKey).then(viewOrder);
};

export default startApp;
