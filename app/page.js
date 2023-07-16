'use client'

import Header from './Header/Header.js';
import Banner from './Body/Banner.js';
import Products from './Body/Products.js';

export default function Index() {
  return <>
    <Header/>
    <div className='m-14'></div>

    <main>
      <Products />
    </main>
  </>
}

