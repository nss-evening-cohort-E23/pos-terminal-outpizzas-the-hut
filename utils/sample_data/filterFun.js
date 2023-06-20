import { getOrder } from '../../api/orderData';
import showOrderCards from '../../pages/showOrder';

const filterOpen = () => getOrder().then((orders) => showOrderCards(orders.sort((a, b) => b.completed - a.completed)));
const filterClosed = () => getOrder().then((orders) => showOrderCards(orders.sort((a, b) => a.completed - b.completed)));
const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  getOrder().then((orders) => orders.filter((order) => order.name.toLowerCase().includes(userInput))).then(showOrderCards);
};
export { filterClosed, filterOpen, search };
