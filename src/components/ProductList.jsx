import React from 'react'
import { Product } from './Product'

const products = [{
    id: '1',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '2',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '3',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '4',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '5',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '6',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '7',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '8',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '9',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '10',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '11',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '12',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '13',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '14',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '15',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '16',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '17',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '18',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
{
    id: '19',
    image: "https://i.ibb.co/YBkgMmc/round-shelf.jpg",
    price: 120,
    name: 'Roundshelf'
},
{
    id: '20',
    image: "https://i.ibb.co/yYHPcRB/Retro-regrigerator.jpg",
    price: 120,
    name: 'Retro regrigerator'
},
]

const ProductList = () => {
    return (
        <section className='main-container'>
            <div className='cards-container'>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export { ProductList }
