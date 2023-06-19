const orderTotal = (array) => {
  let orderSum = 0;
  array.forEach((item) => {
    orderSum += Number(item.price);
  });
  return orderSum.toFixed(2);
};

export default orderTotal;
