import React, { useState } from 'react'
import Typewriter from '../components/Typerwriter';
import { Link } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';



const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handlelogin= async(e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            window.location.href='/Home';
            toast.success('Login successful', {position:"top-center",})

        }
        catch(error){
            toast.success(error.message, {position:"top-center",})

        }
    }
return (
    <div className='Maincontainer  h-[100vh] w-full relative '>
    <div className="login  h-[100vh] w-full relative">
    <img src='../images/authbg.jpg' className='h-[100vh] w-full ' alt='bgpic'/>

    <Typewriter/>

    <form onSubmit={handlelogin}
    className="logincontainer h-[600px] w-[420px] bg-slate-500 absolute top-[100px] right-[200px] rounded-xl ">
    <img src='../images/containerbg.jpg' className='h-[100%] w-full absolute inset-0 rounded-xl' alt='containerbg'/>

        <div className="inputs flex flex-col justify-center items-center relative h-full w-full">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}
            placeholder='Email' className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-12'/>

            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}
            placeholder='Password'  className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-10'/>

            <button type='submit' className='bg-bgdeepTurquoise h-[50px]  w-[100px] rounded-xl text-orange font-sans mt-10'>Login</button>
            <Link to="/Register"> <h2 className='underline font-sans text-orange text-sm md:text-lg cursor-pointer mt-5'>Register</h2></Link>
        </div>
    </form>
</div>
    </div>
)
}

export default Login;
