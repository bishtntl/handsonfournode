import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Home(){
    const Navi=useNavigate()
    const token=localStorage.getItem("token")
    console.log(token)
    

    useEffect(()=>{
        if(token){
            axios.get("http://localhost:5000/api/",{headers:{
            "authorization":`Bearer ${token}`
        }})
        
        .then(res=>console.log(res.data))
        }
        else{
            Navi('/home')
        }
    },[token,Navi])


    const handleclick=()=>{
        localStorage.removeItem('token')
        Navi("/login")
    }
    return(
       <div className="home">
       
       <h1  className="heading"  direction="left"> 🏠 Welcome To Home Page 🏡</h1>
       
      
       
       <h1 className="msg">🤝Hello🤝</h1>

      <button onClick={handleclick} className="logoutbtn"> logout</button>
      
       </div>
    )
}
export default Home;