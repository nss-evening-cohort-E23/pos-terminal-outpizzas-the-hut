import { getOrder } from '../../api/orderData';
import showOrderCards from '../../pages/showOrder';

const filterOpen = () => getOrder().then((orders) => showOrderCards(orders.sort((a, b) => b.completed - a.completed)));
const filterClosed = () => getOrder().then((orders) => showOrderCards(orders.sort((a, b) => a.completed - b.completed)));

export { filterClosed, filterOpen };
