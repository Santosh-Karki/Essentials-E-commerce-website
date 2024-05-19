import React from "react";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";


const Menu = [
 
  {
    id: 2,
    name: "New Arrivals",
    link: "/#services",
  },
  {
    id: 3,
    name: "Pants",
    link: "/#",
  },
  {
    id: 4,
    name: "Shirts",
    link: "/#",
  },
  {
    id: 4,
    name: "Sweats",
    link: "/#",
  }
 
  
];

const DropdownLinks = [
  {
    id: 1,
    name: "Pants",
    link: "/#",
  },
  {
    id: 2,
    name: "Shirts",
    link: "/#",
  },
  {
    id: 3,
    name: "Sweats",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white w-full  duration-200 fixed z-50">
        <div className="container flex  h-16 items-center justify-between">

<div data-aos="zoom-in" className="flex justify-center items-center">
       <ul className="sm:flex hidden items-center gap-2">
          {Menu.map((data) => (
             <ul key={data.id} >
            <li >
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
            </ul>
          ))}
        
          <li className="group relative cursor-pointer">
            <a href="#" className="flex text-rose-600 items-center gap-[2px] py-2">
              Sales
              <span>
                <FaCaretDown className="transition-all text-black duration-300 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
         
                {DropdownLinks.map((data) => (
                  <ul key={data.id}>
                  <li>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                  </ul>
                ))}
           
            </div>
          </li>
        </ul>
      </div>



      
 
      
          <div >
            <a href="#" className="font-medium text-3xl sm:text-3xl ">
             ESSENTIALS
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-7">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

         
            <button
              className="rounded-full">
          <HiOutlineShoppingBag className="text-2xl"/>
            </button>
            <button
              className="rounded-full">
          <GoPerson className="text-2xl"/>
            </button>

          </div>
        </div>
      </div>
   
      

  );
};

export default Navbar;
