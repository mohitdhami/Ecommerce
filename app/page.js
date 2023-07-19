'use client'

import Header from './Header/Header.js';
import Banner from './Body/Banner.js';
import Products from './Body/Products.js';

export default function Index() {
  return <>
    <main>
      <div className='m-14'></div>
      <Products />
    </main>
  </>
}

