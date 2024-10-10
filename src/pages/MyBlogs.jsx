import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { db } from "../firebase";

// Firebase Firestore
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

//ICONS
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";


const MyBlogs = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [myblogs, setMyblogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const postCollectionRef = collection(db, "myblogs");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      const blogDoc = doc(db, "myblogs", editId);
      await updateDoc(blogDoc, { title, content });
      setEditId(null);
    } else {
      await addDoc(postCollectionRef, { title, content });
    }

    setTitle('');
    setContent('');
    fetchBlogs();

  const fetchBlogs = async () => {
    const data = await getDocs(postCollectionRef);
    setMyblogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  
  useEffect(() => {
    fetchBlogs();
  }, []);

  //edit
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setEditId(blog.id);
  };

  //delete
  const handleDelete = async (id) => {
    const blogDoc = doc(db, "myblogs", id);
    await deleteDoc(blogDoc);
    fetchBlogs();
  };

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
            {editId ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>

      <div className="myblogs h-auto w-full bg-blacklite mt-5 ">
        {myblogs.map((blog) => (
          <div className="myblog flex flex-col items-center" key={blog.id}>
            <div className="innerpart bg-bgdeepTurquoise h-auto w-[80%] mt-5 rounded-xl p-6">
              <h1 className="font-sans text-lg md:text-4xl font-bold text-orange break-words">
                {blog.title}
              </h1>
              <p className="font-sans text-xs md:text-xl break-words mt-4">
                {blog.content}
              </p>
              <div className="editDelete flex justify-center items-center ">
                <button
                  onClick={() => handleEdit(blog)}
                  className="h-[50px] w-[50px]"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="h-[50px] w-[50px]"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
}
export default MyBlogs;
