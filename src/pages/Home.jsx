import React from 'react'
import Nav from '../components/Nav';

const Home = () => {
    
return (
    <div className='main-container w-full h-auto'>
    <Nav/>

    <div className="home h-[500px] w-full bg-green-800 mt-5  flex justify-center items-start">
    
    {/* //TERNary */}
    <div className="innerpart bg-bgdeepTurquoise h-auto w-[80%] mt-5 rounded-xl p-6">
        <h1 className='font-sans text-lg md:text-4xl font-bold text-orange break-words'>Title TitleTitleTitleTitleTitleTitle</h1>
        <p className='font-sans text-xs md:text-xl break-words mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis omnis assumenda quibusdam harum totam maiores, odit ullam velit ratione ad, iusto consequuntur suscipit natus similique quam laboriosam cum perferendis.</p>
    </div>
</div>

    </div>
)
}

export default Home;
