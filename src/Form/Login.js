import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function LoginButton(){
    const navigate=useNavigate()
    const [user,setUser]=useState(
        {
            email:"",
            password:""
        }
    )
   
  const changeme=(e)=>{
        setUser({...user,
        [e.target.name]:e.target.value
        })
    }


    const handle=(e)=>{

e.preventDefault()
        axios.post("http://localhost:5000/api/login",user)
        .then((res)=>{
            console.log(res)
          alert(res.data.msg) 
          
          localStorage.getItem("token",res.data.token)
          navigate('/home')
        })

        setUser({
            email:"",
            password:""

        })
    }
    
    return(
        <div className="login">
        <form>
      <h1 className="headingtwo">Login Page</h1>
      <label htmlFor="email" className="email">Email</label>
      <input type="email" name="email" id="email" placeholder="enter your email" value={user.email} onChange={changeme} className="emailinput"/><br/>
      <label htmlFor="password" className="password">Password</label>
      <input type="password" id="password" name="password" placeholder="enter your password" value={user.password} onChange={changeme} className="passwordinput"/><br/>
     
     
      <button onClick={handle} className="loginbtn">Login</button>

        </form>
        </div>
    )
}
export default LoginButton;