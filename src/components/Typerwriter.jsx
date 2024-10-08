import React, { useState, useEffect } from 'react'

const Typewriter = () => {

    const[text,setText]=useState('');
    const message='hello';

    useEffect(()=>{
        let index=0;
        const typeWriter=()=>{
            if(index<message.length){
                setText((prev)=>message.charAt(index));
                index++;
                setTimeout(typeWriter,100); //SPEED
            }
        };
        typeWriter();
    },[]);

return (
    <div className="flex justify-center items-center h-screen">
    <h1 className="text-sm md:text-2xl font-bold text-gray-400 border-r-2 border-black pr-2 animate-typewriter">
    {text}
    </h1>
</div>
)
}

export default Typewriter;
