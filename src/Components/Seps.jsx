// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import samp from "./forim1.jpeg"
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';


// export default function App() {
//   return (
//     <>
//     <br></br><br></br>
//       <Swiper
//         slidesPerView={5}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           '@0.00': {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           '@0.75': {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           '@1.00': {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           '@1.50': {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         navigation={true}
//         modules={[ Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>      
//           <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-b-none"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div>
// </SwiperSlide>
//         <SwiperSlide>  </SwiperSlide>
// <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide> <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide> <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide> <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide> <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide> <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide>
//         <SwiperSlide>  <div class="relative flex flex-col bg-white shadow-sm border  rounded-lg ">
//   <div class="relative overflow-hidden rounded-xl bg-clip-border">
//     <img
//       src={samp}
//       alt="card-image"
//       class="h-full w-full object-cover rounded-md"
//     />
//   </div>
//   <hr></hr>
//   <div class="p-4">
//     <div class="mb-2 flex items-center xs:flex-col justify-between">
//       <p class="text-slate-800 sm:text-xl text-sm font-semibold">
//         Shirt
//       </p>
//       <p class=" sm:text-xl text-sm font-semibold text-black">
//         <del className='sm:text-sm text-xs text-black'>₹195.00</del>&nbsp;₹180.00
//       </p>
//     </div>
//   </div>
// </div></SwiperSlide>
       
//       </Swiper>
//     </>
//   );
// }

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';


// import './Style.css';


// // import required modules
// import { Grid, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         grid={{
//           rows: 2,
//         }}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Grid, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className='bg-black'>Slide 1</SwiperSlide>
//         <SwiperSlide className='bg-gray-300'>Slide 2</SwiperSlide>
//         <SwiperSlide className='bg-black'>Slide 3</SwiperSlide>
//         <SwiperSlide className='bg-gray-300'>Slide 4</SwiperSlide>
//         <SwiperSlide className='bg-black'>Slide 5</SwiperSlide>
//         <SwiperSlide className='bg-gray-300'>Slide 6</SwiperSlide>
//         <SwiperSlide className='bg-black'>Slide 7</SwiperSlide>
//         <SwiperSlide className='bg-gray-300'>Slide 8</SwiperSlide>
//         <SwiperSlide className='bg-black'>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React from "react";
import cardimg from "./mizcardimg.png"
import star from "./start.png"

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap px-4 -mt-10 relative">
      {/* <img src={spa} className="absolute h-12 top-16 left-0 "/> */}
      {/* <img src={star} className="absolute h-12 top-3/4 left-3 z-50 "/>
      <img src={star} className="absolute h-12 top-16 right-4 z-50"/> */}
      {/* <img src={spa} className="absolute h-12 top-3/4 right-0 z-50  "/> */}
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-" + color + "-100"
                    : "text-" + color + "-200 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
              Shirts
              </a>
            </li>
            
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-" + color + "-100"
                    : "text-" + color + "-200 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
               Bottom Wear
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-" + color + "-100"
                    : "text-" + color + "-200 bg-slate-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
               Extras
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
            <div className="sm:px-20 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  
                <div className='grid sm:grid-cols-12 grid-cols-12  sm:p-7'>
          
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      LINEN SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      OVERSIZED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      LINEN SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
            </div>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className='grid sm:grid-cols-12 grid-cols-12 sm:p-7'>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
    JOGGER PANTS
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      LINEN SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
          
          </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className='grid sm:grid-cols-12 grid-cols-12  sm:p-7'>
          
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
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      PRINTED SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
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
      
      <p class=" sm:text-xl text-xl  font-curve font-semibold text-black">
      LINEN SHIRT
      </p>
    </div>
  </div>
</div>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
     <Tabs color="white" />
    </>
  );
}