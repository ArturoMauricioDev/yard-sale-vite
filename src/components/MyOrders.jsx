import React from 'react';
import { OrdersList } from './OrdersList';

const MyOrders = () => {
    return (
        <div className='my-orders'>
            <div className="my-orders-container">
                <h1 className='title'>My orders</h1>
                
                <OrdersList />
            </div>
        </div>
    );
};

export { MyOrders };
