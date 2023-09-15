import { useContext, useEffect } from "react"
import { Context } from "../../сontext"
import './index.css'
import { Product } from "../Product"

export const Cart = ()=>{
const {cart,addToCart,removeFromCart} = useContext(Context)




    return <div>
        <h1>My cart</h1>
        <div className="CartList">
        {cart?.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

    </div>
}