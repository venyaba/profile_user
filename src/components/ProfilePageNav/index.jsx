import "./index.css";
export function ProfilePageNav({ setIsProfile, setIsCart, setIsSearchBar }) {
    
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
        />
      </li>
      <li>
        <input
          onClick={handleClick}
          type="button"
          value="Поиск товаров"
          id="search"
        />
      </li>
      <li>
        <input
          onClick={handleClick}
          type="button"
          value="Корзина и оформление"
          id="cart"
        />
        <span>beta</span>
      </li>
    </ul>
  );
}
