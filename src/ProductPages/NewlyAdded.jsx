import one from "./forimg2.jpeg";
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Components/Firebase/ForeverFirebase";

function Product() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'Trend'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  }, []);
  const formatDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      const date = new Date(timestamp.seconds * 1000);
      return date.toLocaleDateString(); // Adjust the format as needed
    }
    return null;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper font-forpop bg-black sm:text-sm tracking-wide text-sm space-x-1 text-white p-2.5 text-center"
      >
        <SwiperSlide><p>🔥 Shop your dresses with fire offer 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from Chennai's most loved shop 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from Chennai's most loved shop 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from Chennai's most loved shop 🔥</p></SwiperSlide>
      </Swiper>
      <div className='bg-white text-black sticky top-0 z-50'>
    <nav class="absolute top-0 border-solid border-gray-200 w-full border-b py-4 sm:px-10 px-5 bg-white z-50 bg-inherit">
    <div class="container mx-auto">
        <div class="w-full flex flex-col lg:flex-row">
            <div class="flex justify-between lg:flex-row">
                <a href="./Forever.jsx" class="flex sm:absolute  sm:top-2 sm:text-md text-xl  items-center font-forpop  text-black sm:p-2 p-2">
                Forever  Fashion
                </a>
                <div class="flex lg:hidden items-center gap-5">
                    <div class="flex items-center gap-3 lg:flex-row">
                        <a href="javascript:;"
                            class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M21 15H11C8.17157 15 6.75736 15 5.87868 14.1213C5 13.2426 5 11.8284 5 9V5C5 3.89543 4.10457 3 3 3M10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5ZM12.5 11H16.5C17.9045 11 18.6067 11 19.1111 10.6629C19.3295 10.517 19.517 10.3295 19.6629 10.1111C20 9.60669 20 8.90446 20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4H12.5C11.0955 4 10.3933 4 9.88886 4.33706C9.67048 4.48298 9.48298 4.67048 9.33706 4.88886C9 5.39331 9 6.09554 9 7.5C9 8.90446 9 9.60669 9.33706 10.1111C9.48298 10.3295 9.67048 10.517 9.88886 10.6629C10.3933 11 11.0955 11 12.5 11Z"
                                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                            </svg>
                        </a>
                        <a href="javascript:;"
                            class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M5 11H19M5 11C4.05719 11 3.58579 11 3.29289 10.7071C3 10.4142 3 9.94281 3 9V8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H19C19.9428 6 20.4142 6 20.7071 6.29289C21 6.58579 21 7.05719 21 8V9C21 9.94281 21 10.4142 20.7071 10.7071C20.4142 11 19.9428 11 19 11M5 11L5 17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11M12 6V21M12 6V4.5M12 6H9V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5M12 6H15V4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5"
                                    stroke="currentColor" stroke-width="1.6"></path>
                            </svg>
                        </a>
                        
                        
                    </div>

                </div>
            </div>
            <div class="hidden w-full lg:flex lg:pl-11" id="navbar-with-secondary-icon">
                <ul class="flex items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:ml-auto lg:flex-row">
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Home</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">About
                            us</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">product</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Features</a>
                    </li>
                </ul>
            </div>
            <div class="hidden lg:flex items-center gap-3 lg:flex-row">
                <a href="javascript:;"
                    class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 15H11C8.17157 15 6.75736 15 5.87868 14.1213C5 13.2426 5 11.8284 5 9V5C5 3.89543 4.10457 3 3 3M10 19.5C10 20.3284 9.32843 21 8.5 21C7.67157 21 7 20.3284 7 19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5ZM18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5ZM12.5 11H16.5C17.9045 11 18.6067 11 19.1111 10.6629C19.3295 10.517 19.517 10.3295 19.6629 10.1111C20 9.60669 20 8.90446 20 7.5C20 6.09554 20 5.39331 19.6629 4.88886C19.517 4.67048 19.3295 4.48298 19.1111 4.33706C18.6067 4 17.9045 4 16.5 4H12.5C11.0955 4 10.3933 4 9.88886 4.33706C9.67048 4.48298 9.48298 4.67048 9.33706 4.88886C9 5.39331 9 6.09554 9 7.5C9 8.90446 9 9.60669 9.33706 10.1111C9.48298 10.3295 9.67048 10.517 9.88886 10.6629C10.3933 11 11.0955 11 12.5 11Z"
                            stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                    </svg>
                </a>
                <a href="javascript:;"
                    class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 11H19M5 11C4.05719 11 3.58579 11 3.29289 10.7071C3 10.4142 3 9.94281 3 9V8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H19C19.9428 6 20.4142 6 20.7071 6.29289C21 6.58579 21 7.05719 21 8V9C21 9.94281 21 10.4142 20.7071 10.7071C20.4142 11 19.9428 11 19 11M5 11L5 17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11M12 6V21M12 6V4.5M12 6H9V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5M12 6H15V4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5"
                            stroke="currentColor" stroke-width="1.6"></path>
                    </svg>
                </a>
               
            </div>
        </div>
    </div>
</nav>
          
    </div>
      <br /><br /><br /><br />
      {/* Grid for displaying products */}
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-7  gap-4 sm:px-16 px-3">
        {posts.map((post, index) => (
          <div className="relative">
              <img src={post.imageUrl} className="rounded-lg"/>
                    <h1 className="absolute top-0  bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-500 text-white font-curve  font-extralight tracking-wide rounded-br-xl px-2">{post.title}</h1>
                    <a href=""><div class="sm:px-4 p-1">
                    <p className="text-[10px] text-gray-500 p-1">
                Posted on: {formatDate(post.timestamp)} {/* Render formatted date */}
              </p>
    <p className='sm:text-2xl sm:pl-0 pl-1 text-xl font-curve text-gray-900'>{post.Pname}</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹{post.Price}</span>
    </div>
  </div></a>
          </div>
        ))}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default Product;
