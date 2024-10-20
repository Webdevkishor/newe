import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//images
import samp from "./im.png"
import cat from "./cargo.webp"
// import Mob_Slid from "./Mob_Slid"
import oversiz from "./over.jpeg"
import jeasn from "./jeans.avif"
import mizlogo from "./mizlogo.png"
import ban from "./ban.png"
import Seps from "./Seps"
import zara from "./zara.png"
import snitch from "./snitch.png"
import hm from "./h&m.png"
// import sd from "./wqe.png"
import pan from "./pan.avif"
import vid from "./banvid.mp4"
import cardimg from "./mizcardimg.png"
export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    
    <div className=' text-white'>
    <nav class="fixed top-0 border-solid border-gray-200 w-full border-b py-4 sm:px-10 px-5 bg-white z-50 bg-inherit">
    <div class="container mx-auto">
        <div class="w-full flex flex-col lg:flex-row">
            <div class="flex justify-between lg:flex-row text-black">
                <a href="https://mizansclothing.io/">
                <img src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063602/Black_and_Grey_Modern_Graffiti_Ginger_Company_Logo_1200_x_328_px_1_djygkk.png" className='sm:h-10 sm:w-full h-9 '/>
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
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Formals</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Genz
                            us</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Shirt</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            class="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">pants</a>
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
    <br></br>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper font-Prodtit bg-black sm:text-sm tracking-wide text-xs space-x-1 text-yellow-200 p-2.5 text-center"
      >
        <SwiperSlide><p>🔥 Shop your dresses with fire offer 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from chennai most loved shop  🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from chennai most loved shop🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Shop your dresses from chennai most loved shop 🔥</p></SwiperSlide>
      </Swiper>
<br></br>
<br></br> */}
{/* <Mob_Slid/> */}
<br></br>
      <img src={ban} className='sm:block hidden'/>
      <div className="flex sm:hidden justify-center items-center ">
      <video
        className=""
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729063592/Modern_Typography_Animated_Launching_Soon_Your_Story_1080_x_1350_px_uwnhcw.mp4" type="video/mp4" />
      
      </video>
    </div>
{/* Card  */}

<h1 className='sm:block hidden font-Prodtit font-semibold text-center text-xl pb-2'>BRANDS AVAILABLE</h1>
<div className='hidden sm:flex sm:gap-7 px-44 py-5'>
  <div ><img src={zara} className='rounded-xl'/></div>
  <div ><img src={snitch} className='rounded-xl h-[98px] w-60 bg-white'/></div>
  <div ><img src={hm} className='rounded-xl'/></div>
  <div ><img src={zara} className='rounded-xl'/></div>
  <div ><img src={snitch} className='rounded-xl h-[90px] w-60 bg-white'/></div>
  <div ><img src={hm} className='rounded-xl'/></div>
  <div ><img src={zara} className='rounded-xl'/></div>
  <div ><img src={snitch} className='rounded-xl h-[90px] w-60 bg-white'/></div>
  <div ><img src={hm} className='rounded-xl'/></div>
</div>
{/* Trending categories */}
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  
        modules={[Autoplay]}
        className=" mySwiper font-forpop bg-black sm:text-sm tracking-wide text-sm space-x-1 text-white p-2.5 text-center"
      >
        <SwiperSlide><p>🔥 Upto 50% Off on All products🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 Make a easy shopping with mizans wear 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 You can also order through whats app 🔥</p></SwiperSlide>
        <SwiperSlide><p>🔥 After Payment your order Will br Confirmed 🔥</p></SwiperSlide>
      </Swiper>
<h1 className=' font-Prodtit font-semibold  text-black text-center text-2xl pb-2 pt-3'>Trending Styles</h1>
<div>
  <div class=" container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block sm:h-3/4 h-full sm:w-3/4 w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063804/cargo_oafdqu.webp" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063804/over_iibxt2.jpg" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063805/jeans_idjpee.avif" />
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<div class="relative w-full h-304 ">
  <div class="absolute top-0 left-0 w-full h-1/2 font-Prodtit font-semibold text-black text-2xl bg-zinc-50  text-center sm:pt-6 pt-4">
New Collections
  </div>
  <div class="relative z-10 sm:pt-0 pt-12  text-white">
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
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper sm:p-20 px-5 pt-2"
      >
        <SwiperSlide>      
        <div className='sm:col-span-3  col-span-6 p-2' >
            {/* <img src={samp}/> */}
            <div class="relative flex flex-col bg-transparent  ">
  <div class="relative  overflow-hidden bg-clip-border">
    <img
      src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063595/Black_and_Cream_Minimalist_T-Shirt_Mockup_Instagarm_Post_800_x_1200_px_zwktdj.png"
      alt="card-image"
      class="h-full w-full object-cover"
    />
  </div>
  <hr></hr>
  <div class="px-1 py-1">
    <div class="mb-2">
      <p class="text-slate-600 font-curve sm:text-lg text-xl">
      Linen Branded Shirt
      </p>
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      <del className='text-lg'>₹ 1800.00</del> ₹ 500
      </p>
    </div>
  </div>
</div>
            </div> 
</SwiperSlide>
     
<SwiperSlide>      
        <div className='sm:col-span-3  col-span-6 p-2' >
            {/* <img src={samp}/> */}
            <div class="relative flex flex-col bg-transparent    ">
  <div class="relative  overflow-hidden bg-clip-border">
    <img
      src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063595/Black_and_Cream_Minimalist_T-Shirt_Mockup_Instagarm_Post_800_x_1200_px_zwktdj.png"
      alt="card-image"
      class="h-full w-full object-cover"
    />
  </div>
  <hr></hr>
  <div class="px-1 py-1">
    <div class="mb-2">
      <p class="text-slate-600 font-curve sm:text-lg text-xl">
      Linen Branded Shirt
      </p>
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      <del className='text-lg'>₹ 1800.00</del> ₹ 500
      </p>
    </div>
  </div>
</div>
            </div> 
</SwiperSlide>
        <SwiperSlide>      
        <div className='sm:col-span-3  col-span-6 p-2' >
            {/* <img src={samp}/> */}
            <div class="relative flex flex-col bg-transparent   ">
  <div class="relative  overflow-hidden bg-clip-border">
    <img
      src="https://res.cloudinary.com/duzq3xnnk/image/upload/v1729063595/Black_and_Cream_Minimalist_T-Shirt_Mockup_Instagarm_Post_800_x_1200_px_zwktdj.png"
      alt="card-image"
      class="h-full w-full object-cover"
    />
  </div>
  <hr></hr>
  <div class="px-1 py-1">
    <div class="mb-2">
      <p class="text-slate-600 font-curve sm:text-lg text-xl">
      Linen Branded Shirt
      </p>
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      <del className='text-lg'>₹ 1800.00</del> ₹ 500
      </p>
    </div>
  </div>
</div>
            </div> 
</SwiperSlide>
<h1 className='relative -top-12 text-right text-black'>View More ....</h1>
      </Swiper>
      
     </div>
</div>
<h1 className='sm:hidden font-Prodtit  text-black font-semibold text-center text-2xl pb-2 '>Brands Available</h1>

<Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper sm:hidden sm:p-20 pt-5"
      >

        <SwiperSlide>      
        
    <img
      src={zara}
      alt="card-image"
      class="h-full w-full object-cover "
    />

</SwiperSlide>
<SwiperSlide>      
        
        <img
          src={hm}
          alt="card-image"
          class="h-[74px] w-full object-cover "

        />
    
    </SwiperSlide> <SwiperSlide>      
        
        <img
          src={snitch}
          alt="card-image"
          class="h-full w-full object-cover bg-white"
        />
    
    </SwiperSlide>  <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide> <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide> <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide> <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide> <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide> <SwiperSlide>      
        
        <img
          src={zara}
          alt="card-image"
          class="h-full w-full object-cover "
        />
    
    </SwiperSlide>
    <SwiperSlide>      
            
            <img
              src={hm}
              alt="card-image"
              class="h-[74px] w-full object-cover "
    
            />
        
        </SwiperSlide> <SwiperSlide>      
            
            <img
              src={snitch}
              alt="card-image"
              class="h-full w-full object-cover bg-white"
            />
        
        </SwiperSlide>
   
      </Swiper>
    <Seps/>

    {/* Review */}
    <h1 className='font-Prodtit text-4xl pl-3 text-center'>Reviews</h1>
    <div>
       
<Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper sm:hidden sm:p-20 p-5"
      >
<SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide>
<SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide><SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide><SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide><SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide><SwiperSlide>      
        
        <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

</SwiperSlide>

   
      </Swiper>

    </div>
    {/* <div className='text-white bg-black text-center py-2 w-full z-50 fixed bottom-0'> Have a Happy Shopping</div> */}
    
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