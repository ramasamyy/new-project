import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 3,
      name: "Headphone",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      
      <nav className="navbar">
        <h2>MyShop</h2>
        <h3> Cart: {cart.length}</h3>
      </nav>

      
      <div className="product-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p style={{color:"green"}}>
  20% OFF
</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;