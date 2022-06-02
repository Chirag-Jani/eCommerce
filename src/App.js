import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import productData from "./components/productData.json";
import ProductList from "./components/ProductList";
import Register from "./components/Register";

function App() {
  // defining product array || we can use an API as well for data
  const products = productData;

  // fetching data from local storage
  const getLocalStorageData = () => {
    let cartAval = JSON.parse(localStorage.getItem("Cart"));
    if (cartAval) {
      return cartAval;
    } else {
      return [];
    }
  };

  // user logged in or not
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // defining cart array
  const [cartArray, setCartArray] = useState(getLocalStorageData());

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  }, [cartArray]);

  // add to cart
  const addToCart = (prod) => {
    if (userLoggedIn) {
      // first it will check if the product is already in cart and in that case it will only increase the quantity of product
      const prodObj = cartArray.find((product) => product.id === prod.id);
      if (prodObj) {
        addQty(prod, prod.id);
        alert("Item already in the cart, Quantity increased by +1.");
      }
      // if product is not in cart already, it will add it to the cart
      else {
        setCartArray([...cartArray, prod]);
        prod.cartQty = prod.cartQty + 1;
      }
      // this will update the local storage
      localStorage.setItem("Cart", JSON.stringify(cartArray));
    } else {
      alert("Log in / Register to add product to cart.");
    }
  };

  // remove item from cart
  const removeFromCart = (prod) => {
    // it will find the object and remove from the cart
    setCartArray(
      cartArray.filter((id) => {
        return prod !== id.id;
      })
    );
    // updating the local storage
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };

  // increase the quantity of item in cart
  const addQty = (prod, id) => {
    const prodObj = cartArray.find((product) => product.id === id);
    prodObj.cartQty += 1;
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };

  // decrease the quantity of item in cart
  const removeQty = (prod, id) => {
    const prodObj = cartArray.find((product) => product.id === id);

    // it will check for cart quantity of product to be greater than 1
    if (prodObj.cartQty > 1) {
      prodObj.cartQty -= 1;
    }
    // else it will remove the item from the cart
    else {
      removeFromCart(prod.id);
    }
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cartArray.length} />
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} products={products} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartArray={cartArray}
                removeFromCart={removeFromCart}
                addQty={addQty}
                removeQty={removeQty}
                userLoggedIn={userLoggedIn}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
