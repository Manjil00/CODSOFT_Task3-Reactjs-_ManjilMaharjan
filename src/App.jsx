import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
{/* <Route path="/Home" element={<Home/>}/>
<Route path="/MyBlogs" element={<MyBlogs/>}/>
<Route path="/Profile" element={<Profile/>}/> */}
</Routes>
</BrowserRouter>
);
}

export default App;
