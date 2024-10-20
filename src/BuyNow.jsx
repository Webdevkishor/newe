import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'This is product 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, description: 'This is product 2', imageUrl: 'https://via.placeholder.com/150' },
];

function BuyNow() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default BuyNow;
