import homePage from "../pages/home";
import domBuilder from "../shared/domBuilder"
import navBar from "../shared/navBar";

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
}

export default startApp;
