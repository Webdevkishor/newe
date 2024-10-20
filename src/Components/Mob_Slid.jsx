
import{ useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import bangle from "./bangle.png"
import vid from "./introvid.mp4"
import sd from "./wqe.jpg"
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    
    <div className="App">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 10,
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
            slidesPerView: 0,
            spaceBetween: 50,
          },
        }}
       
        className="mySwiper sm:hidden"
      >
        {/* <span className='text-sm pl-6'>Mens</span> */}
        <SwiperSlide><img className="px-1 rounded-xs border-dashed border-4 border-black" onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>
        <SwiperSlide><img className="px-1 rounded-full border-dashed border-4 border-black"  onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>
        <SwiperSlide><img className="px-1 rounded-full border-dashed border-4 border-black"  onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>
        <SwiperSlide><img className="px-1 rounded-full border-dashed border-4 border-black"  onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>
        <SwiperSlide><img className="px-1 rounded-full border-dashed border-4 border-black"  onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>
        <SwiperSlide><img className="px-1 rounded-full border-dashed border-4 border-black"  onClick={toggleModal} src={sd} width={100} height={100}/></SwiperSlide>


      </Swiper>
      {/* Button to Toggle Modal */}
    

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow bg-transparent">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
             
              <button
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7L1 1m6 6l6-6"
                  />
                </svg>
              
              </button>
            </div>
            {/* Modal Body */}
            <div className="p-4 md:p-5 space-y-4">
            <video class="h-full w-full rounded-lg" controls autoPlay muted>
      <source src="https://res.cloudinary.com/duzq3xnnk/video/upload/v1729061478/mizansclothingsurplus_BRAND_-_ZUDI_2_PCS_-999_SIZE_-_28_to_38NO_ONLINE_ORDERS_STORE_VISIT_ONLY_mizansclothingsurplus_ac0udh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>

            {/* Modal Footer */}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

  