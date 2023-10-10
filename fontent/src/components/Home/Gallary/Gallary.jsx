import React from 'react';
import './Gallary.css'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
// img
import img1 from '../../../assets/gallary/img1.jpg'
import img2 from '../../../assets/gallary/img2.jpg'
import img3 from '../../../assets/gallary/img3.jpg'
import img4 from '../../../assets/gallary/img4.jpg'
import img5 from '../../../assets/gallary/img5.jpg'
import img6 from '../../../assets/gallary/img6.jpg'
import img7 from '../../../assets/gallary/img7.jpg'
import img8 from '../../../assets/gallary/img8.jpg'
const images=[
    {
        id:1,
        img:img1,
    }, {
        id:2,
        img:img2,
    }, {
        id:3,
        img:img3,
    }, {
        id:4,
        img:img4,
    }, {
        id:5,
        img:img5,
    },{
        id:6,
        img:img6,
    },{
        id:7,
        img:img7,
    },{
        id:8,
        img:img8,
    }
]

const Gallary = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className='w-11/12 lg:max-w-7xl lg:py-10 m-auto'>
            <div className='text-center mb-4'>
                <h1 className='text-2xl lg:text-4xl font-semibold'>Our Gallary</h1>
                <h1 className='text-[#666]'>Our gallery Educational and Training</h1>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
              
               {images?.map(im=>( <a key={im.id}  href={im.img}>
                    <img data-aos="zoom-in" alt="img1" src={im.img} />
                </a>))}
            </LightGallery>
        </div>
    );
};

export default Gallary;