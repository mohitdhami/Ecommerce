'use client'

import Products from './Body/Products.js';
import Footer from './Footer/Footer.js';

export default function Index() {
  return <>
    <main>
      <div className='m-14'></div>
      <Products />
    </main>

    <Footer />
  </>
}

