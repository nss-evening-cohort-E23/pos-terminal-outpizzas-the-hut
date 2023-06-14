import newOrderForm from '../components/newOrderForm';

const domEvents = () => {
  document.querySelector('#maincontainer').addEventListener('click', (e) => {
    if (e.target.id === 'create-order-btn') {
      console.warn('test');
      newOrderForm();
    }
  });
};

export default domEvents;
