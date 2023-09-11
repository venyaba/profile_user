import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../Product";
import './index.css'

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
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

  console.log(results);

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

