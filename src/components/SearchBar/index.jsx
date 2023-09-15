import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Product } from "../Product";
import './index.css'
import { Context } from "../../сontext";

export const SearchBar = () => {

const {cart,addToCart,removeFromCart} = useContext(Context)
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
 

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

 

  useEffect(() => {
    if (query.length >= 2 ) {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos?q=${query}`)
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  console.log(cart);

  return (
    <div className="searchBar">
      <h1>Поиск товаров</h1>
      <input
        type="text"
        placeholder="Введите запрос"
        value={query}
        onChange={handleInputChange}
      />
      <div className="searchList">
        {results.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
     </div>
  );
};

