import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";

function App() {
  const getLocalStorageData = () => {
    let cartAval = localStorage.getItem("Cart");
    if (cartAval) {
      return JSON.parse(cartAval);
    } else {
      return [];
    }
  };
  const [cartArray, setCartArray] = useState(getLocalStorageData());

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  }, [cartArray]);

  const addToCart = (prod) => {
    setCartArray([...cartArray, prod]);
    prod.cartQty = prod.cartQty + 1;
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };

  const removeFromCart = (prod) => {
    setCartArray(
      cartArray.filter((id) => {
        return prod !== id.id;
      })
    );
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };

  const addQty = (prod) => {
    prod.cartQty += 1;
    console.log("increased" + prod.cartQty);
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };
  const removeQty = (prod) => {
    prod.cartQty -= 1;
    console.log("decreased" + prod.cartQty);
    localStorage.setItem("Cart", JSON.stringify(cartArray));
  };
  const products = [
    {
      id: 1,
      title: "Product one",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur assumenda, natus sint officia beatae cum voluptatem fugiat excepturi, magni porro consequatur quidem! one",
      urlToImage:
        "https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SX316_BO1,204,203,200_.jpg",
      rating: 4,
      price: "599.99",
      cartQty: 0,
    },
    {
      id: 2,
      title: "Product two",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur assumenda, natus sint officia beatae cum voluptatem fugiat excepturi, magni porro consequatur quidem! two",
      urlToImage:
        "https://ih1.redbubble.net/image.1127902161.3914/fposter,small,wall_texture,product,750x1000.u1.jpg",
      rating: 5,
      price: "199.99",
      cartQty: 0,
    },
    {
      id: 3,
      title: "Product three",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur assumenda, natus sint officia beatae cum voluptatem fugiat excepturi, magni porro consequatur quidem! three",
      urlToImage:
        "https://cdn.shopify.com/s/files/1/0739/8545/products/EpicShitWhite_1024x1024.jpg?v=1533987119",
      rating: 3,
      price: "2599.99",
      cartQty: 0,
    },
  ];

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
              />
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
