import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterButton(){
 
    const Navi=useNavigate()
    const [data,setData]=useState({
        name:"",
        phone:"",
        email:"",
        password:""
    })

    // const [store,setStore]=useState([])
    const changeHandle=(e)=>{
        setData({
        ...data,[e.target.name]:e.target.value
    })
    }
    // console.log(data)

    

  const handleSubmit =(e)=>{
          e.preventDefault()
  

        
            axios.post("http://localhost:5000/api/register",data)
            .then((res)=>{
             alert(res.data.msg)
          //    setStore(res.data)
             localStorage.setItem('token',res.data.token)
             Navi("/login")
  
            })


            setData({
                name:"",
                phone:"",
                email:"",
                password:""
              })
          console.log(data)
         

  }

return(
    <div className="register">
       <h1  className="heading" >Register Page</h1>
    <form onSubmit={handleSubmit}>
        
        <label htmlFor="name" className="name">Name</label>
        <input type="text" id="name" name="name" palceholder="enter your name" value={data.name} autoComplete="off" onChange={changeHandle} className="nameinput"/><br/>
       
        <label htmlFor="email" className="email">Email</label>
        <input type="email" name="email" palceholder="enter your mail" id="email" value={data.email}  autoComplete="off"   onChange={changeHandle} className="emailinput"/><br/>
        <label htmlFor="password" className="password">Password</label>
        <input type="password" name="password" palceholder="enter your password" value={data.password}  id="password"  autoComplete="off" onChange={changeHandle} className="passwordinput"/><br/>
        <label htmlFor="num" className="phone">Number</label>
        <input type='number' name="phone" palceholder="enter your number" id="num" value={data.phone}  autoComplete="off"  onChange={changeHandle} className="phoneinput"/><br/>
        <button type="submit" className="submitbtn">Register</button>
    </form>
    

    </div>
)




}
export default RegisterButton;

   
   