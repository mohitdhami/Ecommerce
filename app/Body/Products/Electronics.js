import { useEffect, useState } from 'react'

export default function Electronics() {
    const [state, setState] = useState([]);
    async function getData() {
      const res = await fetch('https://fakestoreapi.com/products/category/electronics?limit=4');
      const data = await res.json();
      setState(data);
    }

    useEffect(() => { getData(); }, [])
    return <>
    <div className='m-2 bg-slate-white p-2 rounded-xl'>
    <span className='bg-emarald-500 p-2 rounded-xl m-2'> Electronics</span>
    <div className='flex flex-wrap align-center justify-evenly m-3'>
        {
            state.map((e) => (
                <div key = {e.id} class="max-w-xs rounded-xl overflow-hidden shadow-lg bg-neu-black m-1">
                    <div class="px-6 py-4">
                        <img src={e.image} width={90} height={50}/>
                    <p class="text-gray-400 text-base"> {e.title} </p>
                    <p className='bg-rose-600 p-1 rounded-md text-center'>Price: {e.price}$</p>
                    <p className='bg-purple-400 p-1 rounded-md m-1 cursor-pointer text-center'>
                        Add to Cart | Buy</p>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
    </>
}