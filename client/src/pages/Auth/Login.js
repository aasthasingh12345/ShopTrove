import React,{useEffect, useState} from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import { useNavigate,useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import {useAuth}  from "../../context/auth"; 
import { set } from 'mongoose';

   
const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[auth,setAuth]=useAuth()
  const navigate=useNavigate()
  const location=useLocation()
 
  // useEffect(()=>{
  //   if(localStorage.getItem('auth')) navigate('/dashboard')
  //   console.log(localStorage.getItem('auth'))
  //   console.log("HERE IT IS")
  //   },[]) 
  //forms function
const handleSubmit = async(e) => {
 
  e.preventDefault();
  try {
    
      const res=await axios.post("http://localhost:8080/api/v1/auth/login",{email,password});
      console.log(res.data)
      if(res.data.success)
      {
        
          toast.success(res.data && res.data.message);
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
          });
          localStorage.setItem('auth',JSON.stringify(res.data))
          
          navigate("/dashboard");
          
      }else{
        
          toast.error(res.data.message);
      }
  } catch (error) {
     
      console.log(error)
      toast.error("Something went wrong");
  }
};



  return (
<Layout title={"Login-ShopTrove"} >
      <div className="register">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmai" placeholder='Enter Your Email' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter Password' required/>
  </div>
  
  <button type="submit" className="btn btn-primary">LOGIN</button>
</form>

      </div>
      
    </Layout>

  )
}

export default Login
