import React, { useState } from 'react'
import Typewriter from '../components/Typerwriter';
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    const[fname, setFname]=useState('');
    const[email, setEmail]=useState('');
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');

    const handleRegister=  async(e)=>{
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth, email,password);
        const user=auth.currentUser;
            console.log(user);
            console.log("Successfully registerred!!!")
        }
        catch(error){
            console.log(error.message);
        }
}

return (
<div className='Maincontainer  h-[100vh] w-full relative '>
    <div className="register  h-[100vh] w-full relative">
    <img src='../images/authbg.jpg' className='h-[100vh] w-full ' alt='bgpic'/>

    <Typewriter/>

    <form onSubmit={handleRegister}
    className="registercontainer h-[600px] w-[420px] bg-slate-500 absolute top-[100px] right-[200px] rounded-xl ">
    <img src='../images/containerbg.jpg' className='h-[100%] w-full absolute inset-0 rounded-xl' alt='containerbg'/>

        <div className="inputs flex flex-col justify-center items-center relative h-full w-full">
        <input onChange={(e)=>setFname(e.target.value)} value={fname}
        type="text" placeholder='First name'  className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-10'/>

        <input onChange={(e)=>setEmail(e.target.value)} value={email}
        type="email" placeholder='Email'  className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-10'/>

        <input onChange={(e)=>setUsername(e.target.value)} value={username}
        type="text" placeholder='Username' className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-12'/>

        <input onChange={(e)=>setPassword(e.target.value)} value={password}
        type="password" placeholder='Password'  className='inputfield w-[300px] h-[50px] rounded-xl p-4 mt-10'/>

        <button  type='submit' className='bg-bgdeepTurquoise h-[50px]  w-[100px] rounded-xl text-orange font-sans mt-10'>Submit</button>
        <Link to="/"> <h2 className='underline font-sans text-orange text-sm md:text-lg cursor-pointer mt-5'>Login</h2></Link>
        </div>


    </form>
        </div>

    </div>
)
}

export default Register;
