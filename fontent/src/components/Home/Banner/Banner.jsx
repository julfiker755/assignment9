import img1 from '../../../assets/slider/img1.jpg'
import img2 from '../../../assets/slider/img2.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// custom css
import './Banner.css';


// import required modules
import { Navigation } from 'swiper/modules';

function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper !bg-[white] !w-full">
        <SwiperSlide>
              <div className='relative main'>
                <img className='w-full' src={img1} alt="img1" />
                <div className='absolute top-1/2 z-10 left-1/2 [transform:translate(-50%,-50%)] text-center'>
                    <h1 className='text-xl md:text-4xl lg:text-5xl font-extrabold text-white'>Education for Kids</h1>
                    <p className='text-white md:mt-2 text-base md:text-xl'>Donec sollicitudin lacus in felis luctus blandit. Ut hendrerit mattis justo at susp, vivamus orci urna.</p>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative main'>
                <img className='w-full' src={img2} alt="img1" />
                <div className='absolute top-1/2 z-10 left-1/2 [transform:translate(-50%,-50%)] text-center'>
                    <h1 className='text-xl md:text-4xl lg:text-5xl font-extrabold text-white'>Better Education For</h1>
                    <p className='text-white md:mt-2  text-base md:text-xl'>Donec sollicitudin lacus in felis luctus blandit. Ut hendrerit mattis justo at susp, vivamus orci urna.</p>
                </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;