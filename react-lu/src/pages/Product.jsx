import React, { useState } from 'react';

const Product = () => {
  let [avengers, setAvengers] = useState([
    { name: "Thor", age: 1500 },
    { name: "Iron Man", age: 50 },
    { name: "Captain America", age: 150 },
  ]);

  let [product, setProduct] = useState([
    {
      name: "iPhone 15",
      price: 90000,
      img: "https://imgs.search.brave.com/ED3DwAw5NHKI2_wzMCTFT1dPY70oYBROcWicsif1iIw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MTI4MzY0Ni9waG90/by9pcGhvbmUtMTMt/cHJvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1Ca2RCZ0V3/N3BrQmRWeUItRnhy/U2phQnl3QWpieUJN/T2pSR3IyZUlKS09B/PQ",
    },
    {
      name: "Samsung S23",
      price: 78000,
      img: "https://imgs.search.brave.com/2eUppDGtsulpidSEqPUMP9H5FQZmS_CHZwlRRsz214U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Ftc3VuZy5j/b20vaXMvaW1hZ2Uv/c2Ftc3VuZy9wNnBp/bS9pbi9zbS1tMzU2/YmxiZ2lucy9nYWxs/ZXJ5L2luLWdhbGF4/eS1tLXNtLW0zNTZi/bGJnaW5zLXNtLW0t/LS1ibGJiaW5zLTU0/MjcxMDU3ND8kNjg0/XzU0N19KUEck.jpeg",
    },
    {
      name: "Redmi Note 13 Pro",
      price: 24999,
      img: "https://imgs.search.brave.com/7D0yko7gFMOCVCv5qak43RGgPALtWCu9z6rEHB5Kwk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNwZWNzLmlu/Zm8vX25leHQvaW1h/Z2UvP3VybD1odHRw/czovL3d3dy50ZWNo/c3BlY3MuaW5mby91/cGxvYWRzL1hpYW9t/aV9SZWRtaV9Ob3Rl/XzEzX1Byb180MzVj/ZTc3YjU5LmpwZyZ3/PTM4NDAmcT03NQ",
    },
  ]);

  return (
    <>
      <div className="Products">
        <h2>Product List</h2>
      </div>

      <div className='box'>

      {product.map((ele, index) => (
        <div key={index}>
          <h3>{ele.name}</h3>
          <h5>Price: ₹{ele.price}</h5>
          <img src={ele.img} alt={ele.name} width="200px" />
        </div>
      ))}


      </div>
    </>
  );
};

export default Product;
