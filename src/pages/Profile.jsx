import React from 'react'
import Nav from '../components/Nav';


const Profile = () => {
return (
    <div className='main-container w-full h-auto'>
    <Nav/>
    <div className="profile bg-white w-full h-[88vh] flex justify-center items-center shadow-xl shadow-black">
        {/* //ternary */}
        <div className="userdetails w-[50%] h-[80%] bg-bgdeepTurquoise rounded-xl p-10">
            <h1 className='font-bold text-black font-sans text-sm md:text-4xl'>Welcome Back, <span className='text-orange'>Username</span></h1>
            <h2 className='font-sans text-black mt-5 font-semibold text-xs md:text-2xl '> User Details:</h2>

            <h3 className='font-sans text-black mt-10 text-xs md:text-xl'>fname: Userrrr</h3>
            <h3 className='font-sans text-black mt-5 text-xs md:text-xl'>Email: email</h3>
            <h3 className='font-sans text-black mt-5 text-xs md:text-xl'>Username: Userrrr</h3>

            <button className="logout w-[100px] h-[50px] bg-white text-orange text-xsx text-xl rounded-xl mt-28">Logout</button>

        </div>

    </div>
    </div>
)
}

export default Profile;
