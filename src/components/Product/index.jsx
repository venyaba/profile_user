import './index.css'

export const Product = ({ product, addToCart, removeFromCart }) => {
    return ( <div className="product_card" key={product.id}>
       <img src={product.url} alt={product.title} />
       <p>{product.title}</p>
       <div className='product_card_actions'>
       <button onClick={() => addToCart(product)}>+</button>
       <button onClick={() => removeFromCart(product.id)}>-</button>
       </div>
      
     </div>);
   };
   