import React from 'react';
import './App.css';
import Home from "../src/Components/Forever"
import NewlyAdded from "../src/ProductPages/NewlyAdded"
import Posting from "../src/Components/Firebase/Posting"
import Rings from "./ProductPages/Rings"
import Chains from "./ProductPages/Chains"
import Haram from "./ProductPages/Haram"
// import fd from "./Components/zara.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offer from './Components/offer';
import ProductList from './prod';
import BuyNow from './BuyNow';
import NewB from './Newbuynow';
import Pro from './Proddd';
// import Swiper from '../src/Components/Swiper';
// import JewelBackground from "../src/Components/Swiper"
// import Image from "../src/Components/im.jpeg";

function App() {

  return (
    <div className='' >
        {/* <img className='h-20' src={cloudinaryImageUrl5} alt="Cloudinary Example"  loading="lazy" /> */}
       {/* <Home/> */}
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Rings/>}/>
      <Route path="/buy-now/:productId" element={<NewB/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;

// src/App.js

// import React, { useState } from 'react';
// import productsData from '../src/Components/Sort';

// const App = () => {
//   const [products, setProducts] = useState(productsData);
//   const [sortOption, setSortOption] = useState('');
//   const [filterOption, setFilterOption] = useState('');

//   const handleSort = (e) => {
//     const value = e.target.value;
//     setSortOption(value);
//     let sortedProducts = [...productsData];

//     if (value === 'low-to-high') {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (value === 'high-to-low') {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }

//     setProducts(sortedProducts);
//   };

//   const handleFilter = (e) => {
//     const value = e.target.value;
//     setFilterOption(value);
//     if (value === 'all') {
//       setProducts(productsData);
//     } else {
//       const filteredProducts = productsData.filter(
//         (product) => product.category === value
//       );
//       setProducts(filteredProducts);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>

//       <div className="flex justify-between mb-4">
//         <select
//           value={filterOption}
//           onChange={handleFilter}
//           className="border p-2 rounded"
//         >
//           <option value="all">All Categories</option>
//           <option value="jewelry">Jewelry</option>
//           <option value="accessories">Accessories</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={handleSort}
//           className="border p-2 rounded"
//         >
//           <option value="">Sort By</option>
//           <option value="low-to-high">Price: Low to High</option>
//           <option value="high-to-low">Price: High to Low</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded shadow">
//             <h2 className="text-lg font-bold">{product.name}</h2>
//             <p className="text-gray-700">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

