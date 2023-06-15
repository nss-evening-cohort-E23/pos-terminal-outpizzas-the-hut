import navigationEvents from '../events/navigationEvents';
import homePage from '../pages/home';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  domEvents();
  navigationEvents();
  formEvents();
};

export default startApp;
