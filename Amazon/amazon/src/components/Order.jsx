import React from 'react'
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className='flex flex-col p-[40px] my-[20px] bg-white relative rounded-[5px]'>
            <h2 className='font-semibold text-lg'>Order</h2>
            <p className='self-end'>
                <small>{order.id}</small>
            </p>
            <p className=' relative bottom-6 text-sm'>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    price={item.price}
                    hideButton={true}
                    hideGift={true}/>
            ))}
            <div className='flex justify-end px-2 py-3'>
                <CurrencyFormat
                    renderText={(value) => (<>
                        <p className='text-[20px]'> Order Total: <strong className='ml-1'>{value}</strong></p>
                    </>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
            </div>

        </div>
    )
}

export default Order