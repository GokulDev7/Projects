import React from 'react'
import { useStateValue } from '../utils/StateProvider'


function CheckoutProduct({ id, image, title, rating, price, hideButton,hideGift }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    })
  }

  return (
    <div className='flex justify-between mx-5 my-1 py-3 border-b-gray-300 border-b-[1px]'>
      <div className='flex' >
        <div className="flex items-center justify-center px-7">
          <img className='w-44 object-contain mb-4' src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <p className='max-w-[700px] overflow-hidden text-ellipsis'>{title}</p>
          <div className="flex items-start ">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideGift && ( <small className='flex mt-3'>
            <input type="checkbox" className='mr-1' />This order contains gift
          </small>)}
          {!hideButton && (
            <button className='bg-gradient-to-b from-[#e9f4bf] to-[#f0c14b] border-none mt-3 py-1 rounded-[5px] w-[25%]' onClick={removeFromBasket}>Remove from Cart</button>
          )}
        </div>
        <div>
        </div>


      </div>
      <p className='text-xl '>
        <small>₹</small>
        <strong>{price}</strong>
      </p>

    </div>


  )
}

export default CheckoutProduct