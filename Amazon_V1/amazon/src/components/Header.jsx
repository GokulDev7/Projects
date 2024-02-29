import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const name = user?.email.slice(0, user?.email.indexOf('@'));
  const handleAuthentication = async () => {
    if (user) {
      await auth.signOut();
      navigate('/login');
    }
  }
  const option_css = "bg-white flex self-left";
  const header_option = "flex flex-col text-white mt-2 ml-2 mr-2";
  const header_optionLineOne = "text-[12px]";
  const header_optionLineTwo = "font-bold text-[14px]";

  return (
    <div className=" bg-[#131921] xl:h-[60px] w-[100%] flex flex-row justify-evenly fixed z-[2] cursor-pointer flex-grow ">
      <Link to="/">
        <img
          className="w-[90px] object-contain mt-5 ml-3 "
          src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
        /></Link>
      <LocationOnOutlinedIcon className="text-white relative top-5 
      ml-2 left-1" />
      <div className={header_option}>

        <span className={header_optionLineOne}>Deliver to User</span>
        <span className={header_optionLineTwo}>User Address</span>
      </div>
      <div className="flex flex-1 rounded-[4px] items-center ml-2 mr-2 overflow-hidden">
        <select className="sel h-[34px] bg-gray-300 min-w-[50px] max-w-[130px] pl-2 rounded-l-[4px] border-solid border-[1px] border-gray-500 text-ellipsis " >
          <option className={option_css} value="aps"> All</option>
          <option className={option_css} value="alexa-skills">Alexa Skills</option>
          <option className={option_css} value="amazon-devices">Amazon Devices</option>
          <option className={option_css} value="fashion">Amazon Fashion</option>
          <option className={option_css} value="freshmeat">Amazon Fresh Meat</option>
          <option className={option_css} value="amazon-pharmacy">Amazon Pharmacy</option>
          <option className={option_css} value="appliances">Appliances</option>
          <option className={option_css} value="mobile-apps">Apps &amp; Games</option>
          <option className={option_css} value="audible">Audible Audiobooks</option>
          <option className={option_css} value="baby">Baby</option>
          <option className={option_css} value="beauty">Beauty</option>
          <option className={option_css} value="stripbooks">Books</option>
          <option className={option_css} value="automotive">Car &amp; Motorbike</option>
          <option className={option_css} value="apparel">Clothing &amp; Accessories</option>
          <option className={option_css} value="collectibles">Collectibles</option>
          <option className={option_css} value="computers">Computers &amp; Accessories</option>
          <option className={option_css} value="todays-deals">Deals</option>
          <option className={option_css} value="electronics">Electronics</option>
          <option className={option_css} value="furniture">Furniture</option>
          <option className={option_css} value="lawngarden">Garden &amp; Outdoors</option>
          <option className={option_css} value="gift-cards">Gift Cards</option>
          <option className={option_css} value="grocery">Grocery &amp; Gourmet Foods</option>
          <option className={option_css} value="hpc">Health &amp; Personal Care</option>
          <option className={option_css} value="kitchen">Home &amp; Kitchen</option>
          <option className={option_css} value="industrial">Industrial &amp; Scientific</option>
          <option className={option_css} value="jewelry">Jewellery</option>
          <option className={option_css} value="digital-text">Kindle Store</option>
          <option className={option_css} value="luggage">Luggage &amp; Bags</option>
          <option className={option_css} value="luxury-beauty">Luxury Beauty</option>
          <option className={option_css} value="dvd">Movies &amp; TV Shows</option>
          <option className={option_css} value="popular">Music</option>
          <option className={option_css} value="mi">Musical Instruments</option>
          <option className={option_css} value="office-products">Office Products</option>
          <option className={option_css} value="pets">Pet Supplies</option>
          <option className={option_css} value="instant-video">Prime Video</option>
          <option className={option_css} value="shoes">Shoes &amp; Handbags</option>
          <option className={option_css} value="software">Software</option>
          <option className={option_css} value="sporting">Sports, Fitness &amp; Outdoors</option>
          <option className={option_css} value="specialty-aps-sns">Subscribe &amp; Save</option>
          <option className={option_css} value="home-improvement">Tools &amp; Home Improvement</option>
          <option className={option_css} value="toys">Toys &amp; Games</option>
          <option className={option_css} value="under-ten-dollars">Under ₹500</option>
          <option className={option_css} value="videogames">Video Games</option>
          <option className={option_css} value="watches">Watches</option>
        </select>
        <input className="h-[32px] w-[100%] p-[10px]" type="text" />
        <div className="flex bg-[#cd9042] h-[32px] p-1 rounded-r-[4px]">
          <SearchIcon className="self-center" name="search" />
        </div>

      </div>
      <div className="flex">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className={header_option}>
            <span className={header_optionLineOne}>Hello,{user ? name : 'Guest'}</span>
            <span className={header_optionLineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to={'/orders'}>
          <div className={header_option}>
            <span className={header_optionLineOne}>Return</span>
            <span className={header_optionLineTwo}>& Orders</span>
          </div>
        </Link>
        <div className={header_option}>
          <span className={header_optionLineOne}>Your</span>
          <span className={header_optionLineTwo}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className="m-2 flex flex-col justify-center items-center mr-3">
            <ShoppingCartIcon className="text-white scale-[1.6] relative top-2 " />
            <span className="text-[#131921] relative text-[14px] font-semibold bottom-[21px]">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;


