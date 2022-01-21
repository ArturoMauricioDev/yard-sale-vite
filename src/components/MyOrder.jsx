import React from 'react';
import { MyOrderList } from './MyOrderList';

const MyOrder = () => {
    return (
        <div className='my-order'>
            <div className="my-order-container">
                <h1 className='title'>My order</h1>
                <div className="my-order-content">
                    <p>
                        <span>04.25.2021</span>
                        <span>6 articles</span>
                    </p>
                    <p>$ 560.00</p>
                </div>
                <MyOrderList />
            </div>
        </div>
    );
};

export { MyOrder };
