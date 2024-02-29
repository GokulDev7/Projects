import React from 'react';
import { useStateValue } from '../utils/StateProvider';
import { getBasketTotal } from '../utils/reducer';
import CurrencyFormat from "react-currency-format"


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();


  return (
    <div className='flex flex-col'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='text-[20px]'>
       
              Subtotal ({basket.length} items): <strong className='ml-1'>{value}</strong>
            </p>
            <small className="flex mt-2">
              <input type="checkbox" className='mr-1' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  )
}

export default Subtotal