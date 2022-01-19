import React from 'react';

const MenuMobile = () => {
  return (
    <div className='mobile-menu'>
      <p>CATEGORIES</p>
      <ul>
        <li>All</li>
        <li>Clothes</li>
        <li>Electronics</li>
        <li>Furnitures</li>
        <li>Toys</li>
        <li className='mobile-menu--others'>Others</li>
      </ul>
      <ul>
        <li>My orders</li>
        <li>My account</li>
      </ul>
      <ul>
        <li className='email'>camilayokoo@gmail.com</li>
        <li className='sign-out'>Sign out</li>
      </ul>
    </div>
  )
};

export { MenuMobile };
