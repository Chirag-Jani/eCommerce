// this will let the app know that we have requested to add item to the cart
export const addToCart = (prodObj) => {
  return (dispatch) => {
    dispatch({
      type: "addToCart",
      //   payload: {
      //     id,
      //     title,
      //     description,
      //     urlToImage,
      //     rating,
      //     price,
      //   },
      payload: prodObj,
    });
  };
};
