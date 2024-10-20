import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'This is product 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, description: 'This is product 2', imageUrl: 'https://via.placeholder.com/150' },
];

function ProductList() {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/buy-now/${productId}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '10px' }}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
