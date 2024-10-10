import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { db } from "../firebase";

// Firebase Firestore
import { addDoc, collection, getDocs } from "firebase/firestore";

const MyBlogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myblogs, setMyblogs] = useState([]);

  const postCollectionRef = collection(db, "myblogs");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    await addDoc(postCollectionRef, { title, content });
    setTitle(''); // Clear input fields after submission
    setContent('');
    fetchBlogs(); // Fetch updated blogs after submission
  };

  // Fetch blog posts from Firestore
  const fetchBlogs = async () => {
    const data = await getDocs(postCollectionRef);
    setMyblogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

return (
    <div className="main-container w-full h-auto bg-blacklite">
    <Nav />
    <form onSubmit={handleSubmit} className="inputs h-[500px] w-full flex justify-center items-center mt-5">
        <div className="innercontainer w-[80%] h-full bg-bgdeepTurquoise shadow-xl shadow-black rounded-xl p-5 flex flex-col justify-center items-center gap-10">
        <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="title w-[80%] h-[40px] rounded-xl p-4"
            placeholder="Enter the title"
        />

        <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="blog w-[80%] h-[80%] rounded-xl p-4 text-start"
            placeholder="Content Here"
        />

        <button
            type="submit"
            className="Submit w-[100px] h-[50px] bg-white text-orange text-xsx text-xl rounded-xl"
        >
            Submit
        </button>
        </div>
    </form>

    <div className="myblogs h-auto w-full bg-blacklite mt-5 flex flex-col items-center">
        {myblogs.map((blog) => (
        <div key={blog.id} className="innerpart bg-bgdeepTurquoise h-auto w-[80%] mt-5 rounded-xl p-6">
            <h1 className="font-sans text-lg md:text-4xl font-bold text-orange break-words">
            {blog.title}
            </h1>
            <p className="font-sans text-xs md:text-xl break-words mt-4">
            {blog.content}
            </p>
        </div>
        ))}
    </div>
    </div>
);
};

export default MyBlogs;
