import React, { useState } from 'react'
import Typewriter from '../components/Typerwriter';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/Home';
      toast.success('Login successful', { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className='Maincontainer h-full w-full relative'>
      <div className="login h-full w-full relative flex justify-center items-center">
        <img src='../images/authbg.jpg' className='h-full w-full object-cover' alt='bgpic' />

        <Typewriter />

        <form
          onSubmit={handlelogin}
          className="logincontainer w-[90%] md:w-[420px] bg-slate-500 absolute md:top-[100px] md:right-[200px] top-0 right-0 left-0 bottom-0 m-auto p-6 rounded-xl"
          style={{ maxWidth: '90%', maxHeight: '600px' }}
        >
          <img src='../images/containerbg.jpg' className='absolute inset-0 h-full w-full object-cover rounded-xl' alt='containerbg' />

          <div className="inputs flex flex-col justify-center items-center relative h-full w-full z-10">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='Email'
              className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-12 bg-white shadow-lg'
            />

            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder='Password'
              className='inputfield w-full md:w-[300px] h-[50px] rounded-xl p-4 mt-4 bg-white shadow-lg'
            />

            <button
              type='submit'
              className='bg-bgdeepTurquoise h-[50px] w-[150px] md:w-[100px] rounded-xl text-orange font-sans mt-8'
            >
              Login
            </button>

            <Link to="/Register">
              <h2 className='underline font-sans text-orange text-sm md:text-lg cursor-pointer mt-5'>
                Register
              </h2>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
