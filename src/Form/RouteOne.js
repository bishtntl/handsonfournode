import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import LoginButton from "./Login";
import RegisterButton from "./Regiter";
import Home from "./Home";
import "./style.css"
function Routerall(){

   
    return(
    <>
  
    <h1 className="site">Welcome To My WebSite</h1>

    <BrowserRouter>
      
    <NavLink to="/home"  ><button className="btnone">Home</button></NavLink>
      
      <NavLink to="/register" ><button className="btnone">Regiter</button></NavLink>
      <NavLink to="/login"><button className="btnone">Login</button></NavLink>

 

    <Routes>
        
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<LoginButton/>}></Route>
        <Route path="/register" element={<RegisterButton/>}></Route>
     

    </Routes>
    
    
    </BrowserRouter>
    </>
    )
}
export default Routerall;