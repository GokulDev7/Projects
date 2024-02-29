import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  return (
    <div className='w-[100%]'>
      <div onClick={scrollUp} className="flex items-center justify-center w-[100%] h-12 bg-[#004b59] text-white cursor-pointer hover:bg-[#004c59d9]">
        <p>Back to Top</p>
      </div>

      <div className="flex justify-center text-white bg-[#232f3e] w-[100%] h-[310px] gap-[70px] pt-8">
        <div className="font-bold">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Carrers</p>
          <p>Press Release</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer_options_col">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer_options_col">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer_options_col">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Return Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer_bottom">
        <img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" alt="" />
      </div>
    </div>
  )
}

export default Footer