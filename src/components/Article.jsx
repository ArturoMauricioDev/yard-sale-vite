import React from 'react';

const Article = ({ product }) => {
    const { image, price, name } = product
    return (
        <div className='article'>
            <figure>
                <img src={image} alt="" />
            </figure>
            <p>{name}</p>
            <p>{`$ ${price},00`}</p>
        </div>
    );
};

export { Article };
