import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const products = [
     { 
        id: 1, 
        name: 'Nandi Impon Bracelet', 
        price: 100, 
        description: 'This is product 1', 
        images: ['https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg', 'https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png'] 
      },
      { 
        id: 2, 
        name: 'Nandi Impon Bracelet', 
        price: 200, 
        description: 'This is product 2', 
        images: ['https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png','https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg'] 
      },
];


function NewB()
{
    const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const handleBuyNow = () => {
    const phoneNumber = '9360983515'; // Replace with your WhatsApp number
    const message = `Hello, I would like to buy ${product.name} for $${product.price}. Here are the details: ${product.description}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Redirect to WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank');
    
    // If opening a new tab is blocked, fallback to opening in the same window
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  };
    return (
        <>
        

        {/* <div class="img">
            <div class="img-box h-full max-lg:mx-auto ">
            <img src={} alt={product.name} class="max-lg:mx-auto lg:ml-auto h-full "  />
        <img src={} alt={product.name} class="max-lg:mx-auto lg:ml-auto h-full object-cover" />
            </div>
        </div> */}
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper sm:px-24 pr-6 px-3"
      >

        <SwiperSlide>          
          
            {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
            <div class="relative flex flex-col rounded-xl">
  <div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
    <img
      src={product.images[0]}
      alt="card-image"
      class="rounded-sm"
    />
  </div>

</div>
</SwiperSlide>
<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src={product.images[1]}
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>
</div>
</SwiperSlide>
</Swiper>

    
<div className="sm:p-4 px-5 -mt-10">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-black"
          >
           {product.name}
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-black"
            >
           ₹ {product.price}
            </p>
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                (5.0)
              </p>
              <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-black"
              >
                345 Reviews
              </a>
            
          </div>

   
</div>

        </div>
       
                <button type="button" onClick={handleBuyNow}
                    class=" relative top-5 left-4 py-2 rounded-md text-white font-forpop font-semibold sm:w-fu w-11/12  bg-yellow-600 ">Buy
                    now</button>
           
</>
    )
}

export default NewB

                                    