import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Collections from "./components/Collections";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "fade-down",
      delay: 10,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Home handleOrderPopup={handleOrderPopup} />
      <Collections />
      <Banner />
      <Products />
      <Subscribe />
      <Testimonials />
      
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
