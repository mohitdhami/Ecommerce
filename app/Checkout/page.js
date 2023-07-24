'use client'

import app from '../Firebase/Firebase';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, setDoc} from "firebase/firestore";
import { useEffect, useState } from 'react';

export default function Checkout() {
    const db = getFirestore(app);
    const [cartItem, updateCartItem] = useState();

    async function getOrderData(userId) {
        try {
          const userRef = doc(db, "users", userId);
          const userSnapshot = await getDoc(userRef);
      
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            const cartData = userData;
            console.log("CartData: ", cartData['cardItems']);
            updateCartItem(cartData);
            console.log("Hook: ", cartItem.title);
          } else {
            console.log("User not found!");
            return null;
          }
        } catch (error) {
          console.error("Error getting profile data:", error);
          return null;
        }
      }

      useEffect(() => {
        const storedData = localStorage.getItem('user');
        const user = storedData ? JSON.parse(storedData) : null;
        console.log("StoredData: ", storedData);
        const uid = user ? getOrderData(user.uid) : null;
      }, [])

    return (
        <>
        <div className="flex min-h-full flex-col align-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Review your Order 
          </h2>

          {/* Review Item (1) */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg my-14 mx-14 grid justify-center">
        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">title</div>
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>


        </div>

        
    
        </div>
        </>
    )
}