import React from 'react';
import { Article } from './Article';
const productsList = [
    {
        id: '1',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    },
    {
        id: '2',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    },
    {
        id: '3',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    },
    {
        id: '4',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    },
    {
        id: '5',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    },
    {
        id: '6',
        image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
        price: 120.00,
        name: 'Roundshelf'
    }
]
const MyOrderList = () => {
    return (
        <>
            {productsList.map(product => (
                <Article key={product.id} product={product} />
            ))}
        </>
    );
};

export { MyOrderList };
