import { useState, useEffect } from "react";
import { ProfilePageNav } from "../../components/ProfilePageNav";
import { ProfileInfo } from "../../components/ProfilInfo";
import { SearchBar } from "../../components/SearchBar";
import ModalCart from "../../components/Cart/Modal";
import { Cart } from "../../components/Cart";
import "./index.css";

export const ProfilPage = ({ user }) => {
  const { name } = user;
  const [isProfile, setIsProfile] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const renderSections = () => {
    if (isProfile) {
      return <ProfileInfo />;
    }
    if (isSearchBar) {
      return <SearchBar />;
    }
    if (isCart)
      return <Cart />;
    else {
      return null;
    }
  };

  return (
    <div>
      <h1>Welcome,dear {name}!</h1>
      <div>
        {
          <ProfilePageNav
            render={renderSections}
            isProfile={isProfile}
            isSearchBar={isSearchBar}
            setIsCart={setIsCart}
            isCart={isCart}
            setIsProfile={setIsProfile}
            setIsSearchBar={setIsSearchBar}
          />
        }
      </div>
      <div className="profile_container">{renderSections()}</div>
    </div>
  );
};
