import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 relative z-50 bg-blacklite">
    <div className="flex justify-center items-center ">
    <h1 className='text-white ml-6  text-sm md:text-4xl font-LogoFont
cursor-pointer flex justify-center items-center font-serif'> Blogs</h1>

    </div>
    <div className={` bg-transparent absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col md:static md:flex bg-blacklite md:bg-transparent md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-writingFont text-white">
        <Link to="/Home"><li className="hover:text-orange">Home</li></Link>
        <Link to="/MyBlogs"><li className="hover:text-orange">My Blogs</li></Link>
        <Link to="/Profile"><li className="hover:text-orange">Profile</li></Link>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;