import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';

import {auth,db} from "../firebase";
import {doc,getDoc} from "firebase/firestore";
import {toast} from 'react-toastify';


const Profile = () => {

    const [userdetails, setUserDetails]=useState(null);

    const fetchUserdata= async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
            const docRef = doc(db,"Users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else{
                console.log("User not logged In");
            }
        });
    };

useEffect(()=>{
    fetchUserdata()
},[]);

async function handleLogout(){
    try{
        await auth.signOut();
        window.location.href="/";
        toast.success("Logged out Successfully",{position:"top-center"})
    } catch(error){

    }
}
return (
    <div className='main-container w-full h-auto'>
    <Nav/>
    <div className="profile bg-white w-full h-[88vh] flex justify-center items-center shadow-xl shadow-black">
        {userdetails ? (
            <div className="userdetails w-[50%] h-[80%] bg-bgdeepTurquoise rounded-xl p-10">
            <h1 className='font-bold text-black font-sans text-sm md:text-4xl'>Welcome Back, <span className='text-orange'>{userdetails.userName}</span></h1>
            <h2 className='font-sans text-black mt-5 font-semibold text-xs md:text-2xl '> User Details:</h2>

            <h3 className='font-sans text-black mt-10 text-xs md:text-xl'>First Name : {userdetails.firstname}</h3>
            <h3 className='font-sans text-black mt-5 text-xs md:text-xl'>Email:  {userdetails.email}</h3>
            <h3 className='font-sans text-black mt-5 text-xs md:text-xl'>Username:  {userdetails.userName}</h3>

            <button onClick={handleLogout}
            className="logout w-[100px] h-[50px] bg-white text-orange text-xsx text-xl rounded-xl mt-28">Logout</button>

        </div>
        ) :(
            <div className="userdetails w-[50%] h-[80%] bg-bgdeepTurquoise rounded-xl p-10 flex justify-center items-center shadow-xl shadow-black">
            <h1 className=' text-orange font-sans text-sm md:text-4xl'> Loading user details......... </h1>
            </div>

        )}

    </div>
    </div>
)
}

export default Profile;
