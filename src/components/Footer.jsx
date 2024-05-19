import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";



const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-black bg-white ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-24 pt-5">

          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
           ESSENTIALS
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Viverra orci sagittis eu volutpat odio facilisis mauris. Dui id ornare arcu odio ut sem nulla pharetra. 
            </p>
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2  ml-16 md:pl-10">
            
        
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Information
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
            </div>

           
            <div className="ml-16">
              <div className="flex flex-row items-center gap-3  mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl text-orange-700" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl text-blue-600" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl text-blue-600" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 font-semibold">
                  <FaLocationArrow className="text-blue-500" />
                  <p>Melbourne, Australia</p>
                </div>
                <div className="flex items-center gap-3 mt-3 font-semibold">
                  <FaMobileAlt className="text-blue-800"/>
                  <p>+61 0123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
