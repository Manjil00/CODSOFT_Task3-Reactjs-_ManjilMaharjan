import React, { useState } from 'react'
import Typewriter from '../components/Typerwriter';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const Register = () => {
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleRegister = async (e) => {
    e.preventDefault();
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user);
    if (user) {
        await setDoc(doc(db, "Users", user.uid), {
        firstname: fname,
        userName: username,
        email: user.email,
        passWord: password
        });
    }
    toast.success('Successfully registered!!!', { position: "top-center" });
    } catch (error) {
    toast.error(error.message, { position: "bottom-center" });
    }
};

return (
    <div className='Maincontainer h-full w-full relative'>
    <div className="register h-full w-full relative flex justify-center items-center">
        <img src='../images/authbg.jpg' className='h-full w-full object-cover' alt='bgpic' />

        <Typewriter />

        <form onSubmit={handleRegister}
        className="registercontainer w-[90%] md:w-[420px] bg-slate-500 absolute md:top-[100px] md:right-[200px] top-0 right-0 left-0 bottom-0 m-auto p-6 rounded-xl"
        style={{ maxWidth: '90%', maxHeight: '600px' }}
        >
        <img src='../images/containerbg.jpg' className='absolute inset-0 h-full w-full object-cover rounded-xl' alt='containerbg' />

        <div className="inputs flex flex-col justify-center items-center relative h-full w-full z-10">
            <input
            onChange={(e) => setFname(e.target.value)} value={fname}
            type="text"
            placeholder='First name'
            className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-6 bg-white shadow-lg'
            />

            <input
            onChange={(e) => setEmail(e.target.value)} value={email}
            type="email"
            placeholder='Email'
            className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-4 bg-white shadow-lg'
            />

            <input
            onChange={(e) => setUsername(e.target.value)} value={username}
            type="text"
            placeholder='Username'
            className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-4 bg-white shadow-lg'
            />

            <input
            onChange={(e) => setPassword(e.target.value)} value={password}
            type="password"
            placeholder='Password'
            className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-4 bg-white shadow-lg'
            />

            <button
            type='submit'
            className='bg-bgdeepTurquoise h-[50px] w-[150px] md:w-[100px] rounded-xl text-orange font-sans mt-8'
            >
            Submit
            </button>

            <Link to="/">
            <h2 className='underline font-sans text-orange text-sm md:text-lg cursor-pointer mt-5'>
                Login
            </h2>
            </Link>
        </div>
        </form>
    </div>
    </div>
);
}

export default Register;
