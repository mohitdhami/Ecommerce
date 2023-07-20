import { useEffect, useState } from 'react'

export default function Mixed() {
    const [state, setState] = useState([]);
    async function getData() {
      const res = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await res.json();
      setState(data);
    }

    useEffect(() => { getData(); }, [])
    return <>
    <div className='flex justify-center my-3'>
        <span className='bg-emarald-500 p-2 rounded-xl m-2'> All Categories</span>
    </div>
    <div className='bg-slate-white mx-10 p-5 rounded-xl text-center'>
    <div className='flex flex-wrap align-center justify-center'>
        {
            state.map((e) => (
                <div key = {e.id} class="max-w-xs shadow-lg m-2 p-3">
                    <div className='grid justify-center'>
                        <img src={e.image} height={100} width={80}/>
                    </div>
                    <p class="text-base line-clamp-1 text-left"> {e.title} </p>
                    <p class="text-base text-xs text-black-40 line-clamp-2 text-left"> {e.description} </p>
                    <p className='p-1 text-left'>
                        <span className="rounded-xl bg-rose-600 text-slate-white px-2 m-1">Price</span>
                        {e.price}$</p>
                    <p className='bg-neu-black text-slate-white p-1 cursor-pointer text-center'>
                    Add to Cart
                    </p>
                </div>
            ))
        }
    </div>
    </div>
    </>
}