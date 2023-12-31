import navigationEvents from '../events/navigationEvents';
import homePage from '../pages/home';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import { formEvents, addOrderItemFunc } from '../events/formEvents';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  navigationEvents();
  domEvents();
  formEvents();
  addOrderItemFunc();
};

export default startApp;
