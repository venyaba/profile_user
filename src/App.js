import { useEffect, useState } from "react";
import "./App.css";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Context } from "./сontext";
import { ProfilPage } from "./pages/ProfilePage/ProfilPage";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isProfilPage, setIsProfilPage] = useState(false);
  const [isSearchProduct, setIsSearchProduct] = useState(false);

  useEffect(() => {
    console.log("userINfo in useeffect", userInfo[0]);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);
  return (
    <Context.Provider value={{ setUserInfo, userInfo, setIsProfilPage }}>
      <div className="App">
        {isProfilPage ? <ProfilPage user={userInfo[0]} /> : <LoginPage />}{" "}
      </div>
    </Context.Provider>
  );
}

export default App;
