import "./index.css";
export function ProfilePageNav({setIsProfile, isProfile,isCart,isSearchBar, setIsCart, setIsSearchBar }) {
    
  const handleClick = (e) => {

    switch (e.target.id) {
      case "profile":
         setIsProfile(true);
         setIsSearchBar(false);
         setIsCart(false);
        break;
      case "search":
        setIsSearchBar(true);
        setIsCart(false);
        setIsProfile(false);
        break;
      case "cart":
        setIsCart(true);
        setIsProfile(false);
        setIsSearchBar(false);
        break;

      default:
        break;
    }
  };


  return (
    <ul className="profile_nav">
      <li>
        <input
          onClick={handleClick}
          type="button"
          value="Личная информация"
          id="profile"
          style={{
            backgroundColor: isProfile?"rgb(121, 133, 32)":"antiquewhite",
            color:isProfile?"antiquewhite": "rgb(121, 133, 32)"
        }}
        />
      </li>
      <li>
        <input
          onClick={handleClick}
          type="button"
          value="Поиск товаров"
          id="search"
          style={{
            backgroundColor: isSearchBar?"rgb(121, 133, 32)":"antiquewhite",
            color:isSearchBar?"antiquewhite": "rgb(121, 133, 32)"
        }}
        />
      </li>
      <li>
        <input
          onClick={handleClick}
          type="button"
          value="Корзина и оформление"
          id="cart"
          style={{
            backgroundColor: isCart?"rgb(121, 133, 32)":"antiquewhite",
            color:isCart?"antiquewhite": "rgb(121, 133, 32)"
        }}
        />
        <span>beta</span>
      </li>
    </ul>
  );
}
