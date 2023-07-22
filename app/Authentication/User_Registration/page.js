'use client'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

export default function UserRegistration(){
    //Sign Up New Account in Firebase and automatically Login
    function createUserandLogin (event) {
      event.preventDefault();

      const email = event.target.email_id.value;
      const password = event.target.password.value;
      const user_fname = event.target.first_name.value;
      const user_lname = event.target.last_name.value;
      const phone = event.target.phone_no.value;
      const user_dob = event.target.user_dob.value;

      const auth = getAuth(app);
      const db = getFirestore(app);

      createUserWithEmailAndPassword(auth, email, password)
        .then(
          async (userCredential) => {
          // Signed in 
          const user = userCredential.user;

            const profileData = {
              fname: user_fname,
              lname: user_lname,
              phone: phone,
              userdob: user_dob
            }

            try {
              const userRef = doc(db, "users", user.uid);
              await setDoc(userRef, { profile: profileData }, { merge: true });
              alert("Profile created successfully!");
            } catch (error) {
              console.error("Error creating profile:", error);
            }
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    return (
      <>
      <div className="m-14"></div>
      
      <div className="grid align-center justify-center m-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register a New Account
          </h2>
        </div>

      <form class="w-full max-w-lg" onSubmit={createUserandLogin}>
        {/* Input First and Last name */}
        <div class="flex flex-wrap -mx-3 mb-6">
          {/* First Name */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="first_name"/>
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>

          {/* Last name */ }
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="last_name"/>
          </div>
        </div>

        {/* Email Input */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Email ID
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="user@example.com" name="email_id"/>
            <p class="text-gray-600 text-xs italic">Username is same as Email ID</p>
          </div>
        </div>

        {/* Password Input */}
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" name="password" placeholder="******************" />
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">

          {/* Country Input */}
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-country">
              Country
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-country" type="text" placeholder="India" />
          </div>

          {/* Mobile Input */}
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mobile">
              Mobile
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mobile" type="text" placeholder="9998887771" name="phone_no"/>
          </div>

          {/* Date of Birth DOB Input */}
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-dob">
              Date of Birth
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-dob" type="date" name="user_dob"/>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">Submit and Register</button>
      </form>

      </div>
      </>
    );
}

