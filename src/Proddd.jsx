import { useNavigate } from 'react-router-dom';

const products = [
  { 
    id: 1, 
    name: 'Product 1', 
    price: 100, 
    description: 'This is product 1', 
    images: ['https://res.cloudinary.com/dglknbomx/image/upload/v1728796665/fauyagi7b4bvtors8ll6.png', 'https://res.cloudinary.com/dglknbomx/image/upload/v1728796665/fauyagi7b4bvtors8ll6.png'] 
  },
  { 
    id: 2, 
    name: 'Product 2', 
    price: 200, 
    description: 'This is product 2', 
    images: ['https://res.cloudinary.com/dglknbomx/image/upload/v1728796665/fauyagi7b4bvtors8ll6.png', 'https://res.cloudinary.com/dglknbomx/image/upload/v1728796665/fauyagi7b4bvtors8ll6.png'] 
  },
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

<div className="sm:col-span-3 col-span-6 relative" key={product.id} onClick={() => handleBuyNow(product.id)}>
                    <img src={product.images[0]} alt={product.name} className="rounded-lg"/>
                    <h1 className="absolute top-0  bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-500 text-white font-curve  font-extralight tracking-wide rounded-br-xl px-2">Best Seller</h1>
                    <a href=""><div class="sm:px-4 p-1">
    <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>{product.name}</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹ {product.price}</span>
    </div>

  </div></a> </div>
        
        ))}
      </div>
    </div>
  );
}

export default ProductList;
