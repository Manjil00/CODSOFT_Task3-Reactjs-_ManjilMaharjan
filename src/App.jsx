import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
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
