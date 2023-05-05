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
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [session, setSession] = useState(false);

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/api/items")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Header />
        <Navbar session={session} setSession={setSession} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login setSession={setSession} />} />
          <Route path="/register" element={<Register />} />
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
