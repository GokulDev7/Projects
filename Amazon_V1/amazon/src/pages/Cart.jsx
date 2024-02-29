import React from 'react';
import Subtotal from '../components/Subtotal';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../utils/StateProvider';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const name = user?.email.slice(0, user?.email.indexOf('@'));

  return (

    <div className='flex justify-between p-5 w-[98%] min-w-[1000px] pt-20'>

      <div className="flex flex-col bg-white m-4 mt-5 rounded-[5px] px-3 w-[80%] min-w-[600px] ">
        <div>
          <h3 className='font-semibold py-3 pt-3 ml-5 mt-5 text-xl '>Hello,{user ? name : 'Guest'}</h3>
          <h2 className="font-normal text-2xl ml-5 mb-5 mt-5 border-b-[1px] border-solid border-gray-300">Shopping Cart</h2>
        </div>
        <div className="basket">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} />
          ))}
        </div>
        <div className=' flex justify-end my-5 mr-5'>
          <Subtotal />
        </div>
      </div>
      <div className="m-4 mt-5 bg-white p-5 rounded-[5px] h-40 w-[20%]">
        <Subtotal />
        <button onClick={e => navigate('/payment')} className='border-none w-[100%] mt-5 rounded-[5px] py-1 font-normal bg-gradient-to-b from-[#e9f4bf] to-[#f0c14b]'>Proceed to Checkout</button>
      </div>
    </div>


  )
}

export default Cart
