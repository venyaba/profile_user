import { useEffect, useState } from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Context } from "./сontext";
import { ProfilPage } from "./pages/ProfilePage/ProfilPage";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isProfilPage, setIsProfilPage] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);
  return (
    <Context.Provider
      value={{
        setUserInfo,
        userInfo,
        setIsProfilPage,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      <div className="App">
        {isProfilPage ? <ProfilPage user={userInfo[0]} /> : <LoginPage />}{" "}
      </div>
    </Context.Provider>
  );
}

export default App;
