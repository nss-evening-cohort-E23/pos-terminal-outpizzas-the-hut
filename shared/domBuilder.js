import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id="maincontainer">
    <div id="formContainer"></div>
    <div id="viewContainer"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
