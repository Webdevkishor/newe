import React, { useEffect, useState } from "react";
import { db, storage } from "./ForeverFirebase"; // Your Firebase config
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore
  // Function to delete a product and its image
  const deleteProduct = async (product) => {
    try {
      // Delete the image from Firebase Storage
      const imageRef = ref(storage, `posts/${product.imageUrl}`); // Make sure to use the correct path
      await deleteObject(imageRef);
      console.log("Image deleted successfully");

      // Delete the product document from Firestore
      await deleteDoc(doc(db, "products", product.id));
      console.log("Product deleted successfully");

      // Update state to remove the deleted product
      setProducts(products.filter((p) => p.id !== product.id));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-blue-500 font-bold">{product.price}</p>
          <button
            onClick={() => deleteProduct(product)}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
