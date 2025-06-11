import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/SignIn";
import About from "./pages/About";

const App = () => {
  return (
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>

  )
};

export default App;
