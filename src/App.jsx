import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

import {auth} from './firebase';

function App() {

    const [user,setUser]=useState();
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
        });
    },[])
return (
<BrowserRouter>
<Routes>
<Route path="/" element={user ? <Navigate to ="/Home"/> : <Login/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="/MyBlogs" element={<MyBlogs/>}/>
<Route path="/Profile" element={<Profile/>}/>
</Routes>
<ToastContainer/>
</BrowserRouter>
);
}

export default App;
