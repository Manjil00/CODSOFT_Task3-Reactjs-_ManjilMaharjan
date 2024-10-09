import React, { useState } from 'react'
import Nav from '../components/Nav';


const MyBlogs = () => {

const [title, setTitle]=useState('');
const [content, setContent]=useState('');


const handleSubmit=()=>{
    e.preventDefault();
}


return (
    <div className='main-container w-full h-auto'>
    <Nav/>
    <form onSubmit={handleSubmit}
    className="inputs h-[500px] w-full flex justify-center items-center mt-5 ">
        <div className="innercontainer w-[80%] h-full bg-bgdeepTurquoise shadow-xl shadow-black rounded-xl p-5 flex flex-col justify-center items-center gap-10">
            <input onChange={(e)=>setTitle(e.target.value)} value={title}
            type='text' className='title w-[80%] h-[40px] rounded-xl p-4 ' placeholder='Enter the title'/>
            
            <textarea  onChange={(e)=>setContent(e.target.value)} value={content}
            type='text' className='blog w-[80%] h-[80%] rounded-xl p-4 text-start' placeholder='Content Here' />

            <button type='submit' className="Submit w-[100px] h-[50px] bg-white text-orange text-xsx text-xl rounded-xl">Submit</button>
        </div>
    </form>

    <div className="myblogs h-[500px] w-full bg-green-800 mt-5  flex justify-center items-start">
    
       {/* //TERNary */}
        <div className="innerpart bg-bgdeepTurquoise h-auto w-[80%] mt-5 rounded-xl p-6">
            <h1 className='font-sans text-lg md:text-4xl font-bold text-orange break-words'>Title TitleTitleTitleTitleTitleTitle</h1>
            <p className='font-sans text-xs md:text-xl break-words mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis omnis assumenda quibusdam harum totam maiores, odit ullam velit ratione ad, iusto consequuntur suscipit natus similique quam laboriosam cum perferendis.</p>
        </div>

    </div>


    </div>
)
}

export default MyBlogs;
