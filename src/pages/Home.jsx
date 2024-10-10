import React from 'react'
import Nav from '../components/Nav';

//MOCKDATA
import { mockdata } from "../blog_mockdata";

const Home = () => {

return (
    <div className='main-container w-full h-auto bg-blacklite'>
    <Nav/>

    <div className="home h-auto w-full mt-5  flex flex-col justify-center items-center">
        <h1 className='font-serif text-orange text-xl md:text-4xl font-bold'>Others Blogs</h1>
    
{mockdata.map((blog,id)=>{
    return(<div className="innerpart bg-bgdeepTurquoise h-auto w-[80%] mt-5 rounded-xl p-6">
    <h1 className='font-sans text-lg md:text-4xl font-bold text-orange break-words'>{blog.title}</h1>
    <p className='font-sans text-xs md:text-xl break-words mt-4'>{blog.content}</p>
</div>)
})}

</div>

    </div>
)
}

export default Home;
