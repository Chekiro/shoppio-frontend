import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [session, setSession] = useState(false);

  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const item = { ...product, quantity: 1 };
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const updateQuantity = (itemId, action) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity =
            action === "increase" ? item.quantity + 1 : item.quantity - 1;
          const newDiscount = calculateDiscount(newQuantity, item.discount);
          return {
            ...item,
            quantity: newQuantity,
            discount: newDiscount,
          };
        }
        return item;
      })
    );
  };

  const calculateDiscount = (quantity, discount) => {
    return discount * quantity;
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const amountItems = cartItems.length;

  const getData = () => {
    axios
      .get("http://localhost:8080/api/items")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, cartItems, addToCart, setCartItems }}>
      <div className="App">
        <Header amountItems={amountItems} />
        <Navbar session={session} setSession={setSession} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                removeItemFromCart={removeItemFromCart}
                updateQuantity={updateQuantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
          <Route path="/login" element={<Login setSession={setSession} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
        <Copyright />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </DataContext.Provider>
  );
}

export default App;
