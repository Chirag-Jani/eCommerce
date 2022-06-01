// this will add the product object that we have sent in payload via action creators named as 'prodObj' into the cart array
const reducer = (cartArray = [], action) => {
  if (action.type === "addToCart") {
    return cartArray.push(action.payload);
  } else {
    return cartArray;
  }
};

export default reducer;
