import { getSingleOrder } from '../api/orderData';

const addItemFunc = (arr, firebaseKey) => {
  const mergingArr = arr;
  getSingleOrder(firebaseKey).then((orderObj) => orderObj.menuItems.forEach((item) => {
    Object.assign(item, { id: mergingArr.length });
    mergingArr.push(item);
    console.warn(item);
    console.warn(mergingArr);
  }));
  return mergingArr;
  // getSingleOrder(firebaseKey).then((orderObj) => {
  //   const newArr = orderObj.menuItems.concat(arr);
  //   console.warn(newArr);
  //   return newArr;
  // });
};

export default addItemFunc;
