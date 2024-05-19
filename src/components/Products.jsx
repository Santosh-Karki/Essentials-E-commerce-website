import React from "react";
import Slider from "react-slick";
import Img1 from '../assets/sweats/img1.png';
import Img2 from '../assets/sweats/img2.png'
import Img3 from '../assets/sweats/img3.png'
import Img4 from '../assets/sweats/img4.png'
import Img5 from '../assets/sweats/img5.png'
import Img6 from '../assets/sweats/img6.png'
import Img7 from '../assets/sweats/img7.png'



const Clothes = [
  {
    id: 1,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img1,
    aosDelay: "50",
  },
  {
    id: 2,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img2,
    aosDelay: "100",
  },
  {
    id: 3,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img3,
    aosDelay: "200",
  },
  {
    id: 4,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img4,
    aosDelay: "300"
  },

  {
    id: 5,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img5,
    aosDelay: "300"
  },
  {
    id: 6,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img6,
    aosDelay: "300"
  },
  {
    id: 7,
    name: "The Marle Sweat",
    price: "$69.95",
    img: Img7,
    aosDelay: "300"
  },
];

const Testimonials = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      

      <div data-aos="zoom-in">
          <Slider {...settings} >
            {Clothes.map((data) => (
              
                <div className=" flex flex-col">
                  <div
                    data-aos="zoom-in-left"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="flex cursor-pointer flex-col gap-2 shadow-lg mx-1 rounded-lg  bg-gray-200"
                  >
                    
                     <div>
                      <img
                        src={data.img}
                        alt=""
                        className=" w-full h-[380px] object-contain"
                      /></div>
                    
                
                    </div>
                    <div>
                        <h1 className="text-md mt-2 text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                        <h1 className="text-md mt-1 text-black/80 dark:text-light">
                          {data.price}
                        </h1>
                        </div>
                  </div>
                
              ))}
          </Slider>
        </div>
      </div>

  );
};

export default Testimonials;
