import homePage from '../pages/home';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  domEvents();
};

export default startApp;
