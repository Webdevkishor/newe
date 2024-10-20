import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//images
import { Link } from 'react-router-dom';
import forim1 from "./Download.jpeg"
import forim2 from "./pref.webp"
import ques from "./question.png"
import forim4 from "./bang.webp"

import Tabs from "./Swiper"

import Slid from "./Slider_mob"

export default function App() {
 
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [toggled, setToggled] = React.useState(false);
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
        className="mySwiper font-forpop bg-yellow-300 sm:text-sm tracking-wide text-sm space-x-1 text-black p-2.5 text-center"
      >
        <SwiperSlide><p>🔥 Amazing Diwali Offer Available 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Note Your Product Name and send to Whatsapp 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Place your Order Throgh whats App 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 After Payment your order Will br Confirmed 🔥</p></SwiperSlide>
      </Swiper>
    <div className='bg-white text-black sticky top-0 z-50'>
    <nav class=" border-solid border-gray-200 w-full border-b py-4 sm:px-10 px-5 bg-white z-50 bg-inherit">
    <div class="container mx-auto">
        <div class="w-full flex flex-col lg:flex-row">
            <div class="flex justify-between lg:flex-row">
                <a href="" class="flex sm:absolute  sm:top-2 sm:text-md text-xl  items-center font-forpop  text-black sm:p-2 p-2">
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
                        <Link to="/offer"
                            class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M5 11H19M5 11C4.05719 11 3.58579 11 3.29289 10.7071C3 10.4142 3 9.94281 3 9V8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H19C19.9428 6 20.4142 6 20.7071 6.29289C21 6.58579 21 7.05719 21 8V9C21 9.94281 21 10.4142 20.7071 10.7071C20.4142 11 19.9428 11 19 11M5 11L5 17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11M12 6V21M12 6V4.5M12 6H9V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5M12 6H15V4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5"
                                    stroke="currentColor" stroke-width="1.6"></path>
                            </svg>
                        </Link>  
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
                <Link to="/offer"
                    class="flex items-center justify-center text-gray-500 transition-all duration-300 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 11H19M5 11C4.05719 11 3.58579 11 3.29289 10.7071C3 10.4142 3 9.94281 3 9V8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H19C19.9428 6 20.4142 6 20.7071 6.29289C21 6.58579 21 7.05719 21 8V9C21 9.94281 21 10.4142 20.7071 10.7071C20.4142 11 19.9428 11 19 11M5 11L5 17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V11M12 6V21M12 6V4.5M12 6H9V4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5M12 6H15V4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5"
                            stroke="currentColor" stroke-width="1.6"></path>
                    </svg>
                </Link>
               
            </div>
        </div>
    </div>
</nav>
          
    </div>

{/* */}
{/* Card  */}
     
     <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796678/sryhyjajblfcnetbltj1.png" className='sm:block hidden '/>
     <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728798206/timeless_b_fhws0y.png" className='sm:hidden block'/><br></br>
     <Slid/>
    <br></br>
<section className="  font-forpop dark:bg-dark sm:pl-10 pl-2">

      <div className=" relative mx-auto  sm:container">
      {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728799682/spark-svgrepo-com_p0wis3.png" className='absolute right-0 h-20'/> */}
<img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728799684/sparkles-svgrepo-com_tsqfae.png" className='absolute sm:h-24 h-16 -left-1 sm:top-4 top-0'/>
{/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728800230/sparkle-svgrepo-com_pnimpp.png" className='relative sm:h-14 h-14 -right-7 top-10 -rotate-45'/>  */}
 {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728800224/gui-sparkle-svgrepo-com_1_wsiujs.png" className='absolute sm:h-14 h-14 -left-1 top-2'/> 
 <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728800224/gui-sparkle-svgrepo-com_1_wsiujs.png" className='absolute sm:h-14 h-14 -left-1 top-2'/> */}


          <h2 className="mb-2 sm:text-4xl text-2xl font-titl font-semibold text-yellow-600  text-center">
            Trending Collections

          {/* <span className='text-transparent bg-clip-text bg-gradient-to-r to-yellow-400 from-yellow-500  font-bold'>Trending</span> Collections */}
          </h2>
          <p className='text-center text-gray-500'>Timeless jewelry for every occasion.</p>

      </div>
</section>
     
{/* Slider */}
<br></br>
<Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 0,
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
      src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
      alt="card-image"
      class="h-full w-full object-cover rounded-sm"
    />
  </div>
  
  <Link to="/rings"><div class="sm:px-4 p-1">
    <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
    </div>
  </div></Link>
</div>
</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<Link to="/rings"><div class="sm:px-4 p-1">
    <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
    </div>
  </div></Link>
</div>
         

</SwiperSlide>
<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<Link to="/rings"><div class="sm:px-4 p-1">
    <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
    </div>
  </div></Link>
</div>
         

</SwiperSlide>
<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
</SwiperSlide>
 </Swiper>
   {/* End */}

{/* <img src={wha} className='-mt-14 p-3 w-full rounded-lg'/> */}
<br></br>
          {/* Image Gal;ary */}
          <section className="font-forpop dark:bg-dark sm:pl-12 -mt-16">
      <div className=" relative mx-auto  sm:container">
      <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728800224/gui-sparkle-svgrepo-com_1_wsiujs.png" className='absolute sm:h-14 h-14 -left-1 top-12 brightness-50' /> 

          <h2 className=" text-center mb-2 sm:text-3xl text-2xl font-semibold font-titl text-dark dark:text-yellow-600">
          Categories of Jewellery
          </h2>
          <p className='text-center text-gray-500'>Timeless jewelry for every occasion.</p>
      </div>
</section>

<div class="grid grid-cols-12 gap-5 sm:p-10 sm:px-36 px-5 p-5">

        <div className='relative sm:col-span-3 col-span-6 sm:block hidden'>
            <img class="h-auto max-w-full rounded-lg" src={forim2} alt=""/>
        </div>
        <div className='relative sm:col-span-3 col-span-5 sm:hidden block'>
            <img class="h-auto max-w-full rounded-lg" src={forim1} alt=""/>
        </div>
        <div className='relative sm:col-span-3 col-span-7 sm:pt-0 pt-1'>
            <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796673/d4fz5w1x1imeyqtuaxcr.png" alt=""/>
          <h1 className='absolute sm:left-28 sm:top-32 top-20 sm:text-3xl text-2xl left-14 font-titl px-2 text-white  p-1  border border-white'>Rings</h1>
        </div>
        
        <div className=' relative sm:col-span-3 col-span-7 sm:pt-0  sm:block hidden'>
            <img class="h-auto max-w-full rounded-lg" src={forim4} alt=""/>
        </div>
        <div className=' relative sm:col-span-3 col-span-7 pt-2 sm:pt-0 '>
            <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796673/d4fz5w1x1imeyqtuaxcr.png" alt=""/>
            <h1 className='absolute sm:left-28 sm:top-32 top-20 sm:text-3xl text-2xl left-14 font-titl px-2 text-white  p-1  border border-white'>Rings</h1>

        </div>
        <div className='relative sm:col-span-3 col-span-5  sm:hidden block'>
            <img class="h-auto max-w-full rounded-lg" src={forim1} alt=""/>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-5 sm:p-10 sm:px-36 px-5 relative ">
    <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728800224/gui-sparkle-svgrepo-com_1_wsiujs.png" className='absolute sm:h-14 h-14 top-96 bottom-0 right-0  brightness-50' /> 

        <div className='relative sm:col-span-3 col-span-6 sm:block hidden'>
            <img class="h-auto max-w-full rounded-lg" src={forim2} alt=""/>
        </div>
    
        <div className='relative sm:col-span-3 col-span-7 sm:hidden block pt-1'>
            <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796673/d4fz5w1x1imeyqtuaxcr.png" alt=""/>
            <h1 className='absolute sm:left-28 sm:top-32 top-20 sm:text-3xl text-2xl left-14 font-titl px-2 text-white  p-1  border border-white'>Rings</h1>

        </div>
        <div className='relative sm:col-span-3 col-span-5 sm:pt-0 '>
            <img class="h-auto max-w-full rounded-lg" src={forim1} alt=""/>
          <h1 className='absolute sm:left-28 sm:top-32 top-20 sm:text-3xl text-2xl left-14 font-forpop px-2 text-white '>Rings</h1>
        </div>
        <div className=' relative sm:col-span-3 col-span-7 sm:pt-0  sm:block hidden'>
            <img class="h-auto max-w-full rounded-lg" src={forim4} alt=""/>
        </div>
        <div className=' relative sm:col-span-3 col-span-5 pt-1 sm:pt-0 '>
            <img class="h-auto max-w-full rounded-lg" src={forim1} alt=""/>
            <h1 className='absolute sm:left-28 sm:top-32 top-20 sm:text-3xl text-2xl left-14 font-titl px-2 text-white  p-1  border border-white'>Rings</h1>

        </div>
        <div className='relative sm:col-span-3 col-span-7  sm:hidden block'>
            <img class="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796673/d4fz5w1x1imeyqtuaxcr.png" alt=""/>
        </div>
    </div>
          {/*  */}
          <br></br>
          {/* How To order */}
<div className='bg-white w-11/12 sm:ml-16 ml-4 shadow-xl rounded-sm relative'>
<img src={ques} className='sm:h-10 h-10 sm:left-0 left-7 sm:top-0 top-3 absolute '/>
<h1 className='text-2xl sm:text-left text-center font-forpop font-semibold px-10 pt-5 border-yellow-800'>How To Order</h1>
<ol class="items-center sm:flex px-10 py-5  mb-4">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Choose the product</h3>
            <p class=" py-2 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Click Buy Now</h3>
            <p class=" py-2 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
           
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Send payment screen shot</h3>
            <p class=" py-2 text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>
</div>


          <section className="font-forpop dark:bg-dark sm:pl-12 mt-3">
      <div className="mx-auto  sm:container">
          <h2 className="text-center mb-2 sm:text-3xl text-2xl font-semibold font-titl text-dark dark:text-yellow-600">
          Recently Added
          </h2>
          <p className='text-center text-gray-500'>Timeless jewelry for every occasion.</p>
          .
             </div>
</section>


{/* Start */}
<Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 0,
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
      src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
      alt="card-image"
      class="h-full w-full object-cover rounded-sm"
    />
  </div>
  
  <a href=""><div class="sm:px-4 p-1">
    <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
    <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
    <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
    </div>
  </div></a>
</div>
</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>
<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796684/wp3vfguveqesct0iwau9.jpg"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>
<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
         

</SwiperSlide>

<SwiperSlide>          
          
          {/* <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"/> */}
          <div class="relative flex flex-col rounded-xl">
<div class="relative  overflow-hidden rounded-xl bg-clip-border p-2">
  <img
    src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796700/dniml4s0wb9fouzc2cgl.png"
    alt="card-image"
    class="h-full w-full object-cover rounded-sm"
  />
</div>

<a href=""><div class="sm:px-4 p-1">
  <p className='sm:text-2xl pl-1 text-xl font-curve text-gray-900'>Nandi Impon Bracelet</p>
  <div class="mb-2 flex items-center xs:flex-col justify-between sm:pt-2 pt-1 pl-1">
  <span className="text-xl font-light font-curve tracking-tight text-gray-900"> ₹1000</span>
  </div>
</div></a>
</div>
</SwiperSlide>
 </Swiper>
{/* end */}
<br></br><br></br>
<Tabs/>



          {/* footer */}
          
          <footer class="w-full bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
     
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href=""  class="relative flex justify-center lg:justify-start">
                        <img src="https://res.cloudinary.com/dglknbomx/image/upload/v1728796665/fauyagi7b4bvtors8ll6.png" height={200} width={200}/>
                    </a>
                    <p class="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <a href="tel:+1234567890"  class="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a>
                </div>
            </div>
         
            <div class="py-7 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-sm text-gray-500 ">©2024, All rights reserved.</span>
                    <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g id="Social Media">
                            <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                            </g>
                          </svg>
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg class="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg class="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                        <a href="javascript:;"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                            <svg class="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor"/>
                                </svg>
                                
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
<Link to="/pos12312321324325121" className='fixed bottom-0 p-5 bg-black text-white w-full text-center z-50'>Add Product</Link>

    
    
                                 
    </>
  );
}


// function Home()
// {
//     return (
//         // Upper part
//     <div className="font-miztitle bg-black text-2xl  text-yellow p-3 text-center">
//         <p>MIZANS CLOTHING</p>
//     </div>
//     )
// }
// export default Home

