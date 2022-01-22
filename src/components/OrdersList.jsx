import React from 'react';
import { Order } from './Order';
const list = [
    {
        id: '1',
        date: "04.25.2021",
        price: 120.00,
        quantity: 6
    },
    {
        id: '2',
        date: "02.20.2021",
        price: 120.00,
        quantity: 6
    },
    {
        id: '3',
        date: "02.10.2021",
        price: 120.00,
        quantity: 6
    },
    {
        id: '4',
        date: "01.09.2021",
        price: 120.00,
        quantity: 6
    },
    {
        id: '5',
        date: "01.08.2021",
        price: 120.00,
        quantity: 6
    }
]
const OrdersList = () => {
    return (
        <>
            {list.map(order => (
                <Order key={order.id} order={order} />
            ))}
        </>
    );
};

export { OrdersList };
