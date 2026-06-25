import React, { useState } from "react";
import "./App.css";
import img1 from "./image/neodium.webp";
import img2 from "./image/neodium magnet.jpg";
import img3 from "./image/disco-ima-neodimio-n35-niquel-20x1-5-mm-imashop-01.webp";
import img4 from "./image/neodymium-rare-earth-disc-magnet-500x500.webp";
import img5 from "./image/magnet .jpeg";
import img6 from "./image/OIP.jpeg";
import img7 from "./image/logo.jpeg"
function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id:"1",
       name:"Magnet1",
         size: "25*5", 
      grade:"N-35",
      price: "500", 
      image: img1
    },
    { 
      id: 2,
       name:"Magnet2",
      size: "10*2", 
      grade:"N-35",
      price: 100,
       image: img2
     },
    {
       id: 3,
        name:"Magnet3",
       size: "10*10*2",
      grade:"N-35",
       price: 250,
          image: img3
      },
         { 
          id: 4, 
           name:"Magnet4",
      size: "5*3", 
      grade:"N-35",
      price: 100,
         image: img4

    },
        {
           id: 5,
             name:"Magnet5",
      size: "6*3", 
      grade:"N-35",
      price: 100,
         image: img5
     },
        { 
          id: 6, 
 name:"Magnet6",
      size: "40*10*5", 
      grade:"N-35",
      price: 100,
         image: img6
    },
    
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="header">
      <img src={img7} alt="logo" className="logo" />
      <h1>texpart</h1>   

      <h2>Cart Items: {cart.length}</h2>

      <div className="products-grid">
        {products.map((product) => (
          < div className="card" key={product.id}>
            <img
  src={product.image}
  alt={product.name}
  className="product-image"
/>
    <h3>{product.name}</h3>
    <p>{product.size}</p>
    <p>{product.grade}</p>
    <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;