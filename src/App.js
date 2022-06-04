import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import productData from "./components/productData.json";
import ProductList from "./components/ProductList";
import Register from "./components/Register";
import Profile from "./Profile";

function App() {
  // defining product array || we can use an API as well for data
  const products = productData;

  // fetching data from local storage
  const getLocalStorageDataCart = () => {
    let cartAval = JSON.parse(localStorage.getItem("Cart"));
    if (cartAval) {
      return cartAval;
    } else {
      return [];
    }
  };

  // user logged in or not
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // state for current user
  const getCurrUser = () => {
    let cUser = JSON.parse(localStorage.getItem("CurrUser"));
    if (cUser) {
      return cUser;
    } else {
      return {};
    }
  };

  // state for currently logged in user
  const [currUser, setCurrUser] = useState([getCurrUser()]);

  // logging user out
  const logout = (e) => {
    setUserLoggedIn(false);
    // set curr user for guest
    currUser.email = "Guest";
    currUser.password = "None";

    // setting guest user in local storage
    localStorage.setItem("CurrUser", JSON.stringify(currUser));
  };

  // defining cart array
  const [cartArray, setCartArray] = useState(getLocalStorageDataCart());

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

  //
  //
  //
  //
  //
  //
  // Login states and functions

  // this is getting local storage data to map and find if user is already there
  const getLocalStorageDataUserCollection = () => {
    let registeredUsers = JSON.parse(localStorage.getItem("UserCollection"));
    if (registeredUsers) {
      return registeredUsers;
    } else {
      return [];
    }
  };

  // setAvalAccounts has been removed from the below state
  const [avalAccounts] = useState(getLocalStorageDataUserCollection());

  // state to handle user input
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  // handler function for user input
  const userInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prev) => {
      if (name === "password") {
        return {
          email: prev.email,
          password: value,
        };
      } else {
        return {
          email: value,
          password: prev.password,
        };
      }
    });
  };

  // login function
  const login = () => {
    // pattern to validate email
    const emailValid = userDetails.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );

    // if email is valid then only move furether in checking in local storage
    if (emailValid) {
      avalAccounts.find((user) => {
        if (
          user.email === userDetails.email &&
          user.password === userDetails.password
        ) {
          setUserLoggedIn(true);
          setCurrUser(userDetails);
          localStorage.setItem("CurrUser", JSON.stringify(userDetails));
          setUserDetails({
            email: "",
            password: "",
          });
        } else {
          alert("User not found");
        }
      });
    }
    // alert if email is not valid
    else {
      alert("Enter a valid email id.");
    }
  };

  //
  //
  //
  //
  //
  // register state and functions

  // state to handle user input
  const [userDetailsRegistration, setUserDetailsRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [userCollection, setUserCollection] = useState(
    getLocalStorageDataUserCollection()
  );

  // handling function to handle user input
  const userInputRegistration = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // setting state for user input
    setUserDetailsRegistration((prev) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prev.lastName,
          email: prev.email,
          password: prev.password,
        };
      } else if (name === "lastName") {
        return {
          firstName: prev.firstName,
          lastName: value,
          email: prev.email,
          password: prev.password,
        };
      } else if (name === "email") {
        return {
          firstName: prev.firstName,
          lastName: prev.lastName,
          email: value,
          password: prev.password,
        };
      } else {
        return {
          firstName: prev.firstName,
          lastName: prev.lastName,
          email: prev.email,
          password: value,
        };
      }
    });
  };

  const register = () => {
    // adding new user to the userlist
    const email = userDetailsRegistration.email;
    const check = userCollection.find((user) => user.email === email);
    const emailValid = userDetailsRegistration.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    if (emailValid) {
      if (!check) {
        // if there is no user with the same email, it will add it to the list
        setUserCollection([...userCollection, userDetailsRegistration]);
        // updating local storage
        localStorage.setItem("UserCollection", JSON.stringify(userCollection));
        setCurrUser(userDetailsRegistration);
        localStorage.setItem(
          "CurrUser",
          JSON.stringify(userDetailsRegistration)
        );

        // logging user in
        setUserLoggedIn(true);

        // resetting input fields
        setUserDetailsRegistration({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }
      // if user already exist
      else {
        alert("User with the same email already exist.");
      }
    } else {
      return alert("Please enter a valid email id.");
    }
  };

  // useEffect
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartArray));
    // this is preventing user from getting logged out on refresh
    const cEmail = JSON.parse(localStorage.getItem("CurrUser")).email;
    if (cEmail === "Guest") {
      setUserLoggedIn(false);
      setCurrUser(() => {
        return {
          email: JSON.parse(localStorage.getItem("CurrUser")).email,
          password: JSON.parse(localStorage.getItem("CurrUser")).password,
        };
      });
    } else {
      setUserLoggedIn(true);
      setCurrUser(() => {
        return {
          email: JSON.parse(localStorage.getItem("CurrUser")).email,
          password: JSON.parse(localStorage.getItem("CurrUser")).password,
        };
      });
    }
    //
    localStorage.setItem("UserCollection", JSON.stringify(userCollection));
  }, [cartArray, userCollection]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cartItems={cartArray.length}
          userLoggedIn={userLoggedIn}
          logout={logout}
          currUser={currUser}
          listOfProducts={productData}
        />
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
                currUser={currUser}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                setUserLoggedIn={setUserLoggedIn}
                userInput={userInput}
                userDetails={userDetails}
                login={login}
              />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Register
                userLoggedIn={userLoggedIn}
                userInputRegistration={userInputRegistration}
                userDetailsRegistration={userDetailsRegistration}
                register={register}
              />
            }
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
