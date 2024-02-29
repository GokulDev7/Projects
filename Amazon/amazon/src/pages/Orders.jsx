import React, { useEffect, useState } from 'react';
import { useStateValue } from '../utils/StateProvider';
import { db } from '../utils/firebase';
import Order from '../components/Order';
import { collection, onSnapshot, orderBy } from 'firebase/firestore'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(db, 'users', user?.uid, 'orders'),
        orderBy('created', 'desc'),
        (snapshot) => {
          console.log('Snapshot:', snapshot);
          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })));
        }
      );

      return () => {
        // Unsubscribe when the component unmounts
        unsubscribe();
      };
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders pt-[80px] flex flex-col justify-center items-center '>
      <h1 className='text-2xl font-semibold m-3 border-b-[1px] '>Your Orders</h1>
        <div className='borders_order m-3 px-2'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>

    </div>
  )
}

export default Orders