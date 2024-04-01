import React, { useEffect, useState } from 'react'
import { useStateValue } from '../utils/StateProvider'
import CheckoutProduct from '../components/CheckoutProduct';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../utils/reducer';
import { db } from '../utils/firebase';
import Subtotal from '../components/Subtotal';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { collection, doc, setDoc } from 'firebase/firestore';



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async () => {
            try {
                const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error('Error fetching client secret:', error);
              
            }
        };
        getClientSecret();
    }, [basket])
    console.log("Secret is ", clientSecret)

    const handleSubmit = async (event) => {
       
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Test"
                },
            },
        }).then( async ({ paymentIntent }) => {
          
            const userDocRef = doc(db, 'users', user?.uid);
            const ordersCollectionRef = collection(userDocRef, 'orders');
            const orderDocRef = doc(ordersCollectionRef, paymentIntent.id);
            
            try {
              await setDoc(orderDocRef, {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
              });
              console.log("Order added successfully");
            } catch (error) {
              console.error("Error adding order:", error);
            }

            setSucceded(true);
            setError(null)
            setProcessing(false)



            dispatch({
                type: 'Empty_Basket',
            });


            navigate('/orders', { replace: true })
        })

    };


    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='flex flex-col pt-[80px] pb-[40px] justify-center items-center'>
            <h1 className='font-semibold text-3xl my-4'>Checkout:({basket?.length} items)</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white w-[100%] p-5 rounded-[6px] border-[1px] border-solid border-gray-300">
                    <div className="flex gap-x-5 border-b-[1px] border-b-gray-300">
                        <h2 className='font-semibold text-xl ml-5 mt-3'> Delivery Address</h2>
                        <p className="ml-[60px] text-base mb-5 mt-3">{'Guest'} <br />
                            Gokulam <br />
                            India  </p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl my-4 ml-5'>Review the items for shipping</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))}
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl ml-5 my-3'>Payment Method</h3>
                    </div>
                    <div className="mx-5 my-3">
                        {/* {Stripe} */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='my-5 flex flex-col'>
                                <Subtotal />
                                <button className='bg-gradient-to-b from-[#e9f4bf] to-[#f0c14b] rounded-[5px] py-1 w-[20%] mt-3'  disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Proccessing</p> : "Buy Now"} </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
