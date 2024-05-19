import React from "react";
import sweats from "../assets/collection/sweats.png";
import shirts from "../assets/collection/shirts.png";
import pants from '../assets/collection/pants.png'

const ProductsData = [
  {
    id: 1,
    img: pants,
    title: "Shop Pants",
    aosDelay: "50",
  },
  {
    id: 2,
    img: shirts,
    title: "Shop Shirts",
    aosDelay: "100",
  },
  {
    id: 1,
    img: sweats,
    title: "Shop Sweats",
    aosDelay: "200",
  }

];

const Collections = () => {
  return (
    <div className="mt-14 mb-24">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
           COLLECTIONS
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 place-items-center ">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="h-[400px] w-[400px]  rounded-xl shadow-lg bg-stone-50 justify-center flex flex-col gap-2 items-center "
              >
                <img
                  src={data.img}
                  className="h-[340px] w-[340px] border-black-2  object-cover rounded-md "
                />
                   <div>
                    <p className="font-medium"> {data.title}</p>
                    </div>
                </div>
            
           
          
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
