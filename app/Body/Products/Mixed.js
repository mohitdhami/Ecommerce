import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import app from '../../Firebase/Firebase';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc} from "firebase/firestore";

export default function Mixed() { 
    const db = getFirestore(app);
    const [userCart, updateUserCart] = useState([]); 
    async function addToCartFirestore(userId, itemProfile) {
            try {
              // Create a reference to the user document in the "users" collection
              const userRef = doc(db, "users", userId);
          
              // Set the array as a field in the user document
              await setDoc(userRef, { CartItems:  itemProfile}, { merge: true });
          
              console.log("Array data added to the user document successfully!");
            } catch (error) {
              console.error("Error adding array data:", error);
            }
    }

    const [userid, updateUserId] = useState('');
    const router = useRouter();

    const [state, setState] = useState([]);
    async function getData() {
      const res = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await res.json();
      setState(data);
    }

    useEffect(() => { 
        getData();
    }, [])

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
                    <p className='bg-neu-black text-slate-white p-1 cursor-pointer text-center'
                    onClick={() => {
                        const itemProfile = {
                            tile: e.title,
                            description: e.description,
                            price: e.price,
                            src: e.image
                        };
                        updateUserCart(itemProfile);
                        console.log(userCart);
                        const data = localStorage.getItem('user');
                        const user = data ? JSON.parse(data) : null;
                
                        user ? updateUserId(user.uid) : null;
                        userid ? addToCartFirestore(userid, itemProfile) : null;
                        console.log("Executed on click")
                        router.push('/Checkout')
                    }}>Buy</p>
                </div>
            ))
        }
    </div>
    </div>
    </>
}