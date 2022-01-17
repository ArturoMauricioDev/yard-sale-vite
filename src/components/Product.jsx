import React from 'react'

const Product = ({ product }) => {
    const { image, price, name } = product
    return (
        <div className='product-card'>
            <img src={image} alt="" />
            <div className='product-card__info'>
                <div>
                    <p>{`$ ${price}`}</p>
                    <p>{name}</p>
                </div>
                <figure>
                    <img src="https://svgshare.com/i/dY6.svg" alt="" />
                </figure>
            </div>
        </div>
    )
}

export { Product }
