import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [answer,setAnswer]=useState("")
    const navigate=useNavigate()
//forms function
const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
        const res=await axios.post("http://localhost:8080/api/v1/auth/register",{name,email,password,phone,address,answer});
        if(res.data.success)
        {
            toast.success(res.data && res.data.message);
            navigate("/login");
        }else{
            toast.error(res.data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong");
    }
};





  return (
    <Layout title={"Register-ShopTrove"} >
      <div className="register">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
   
    <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter Your Name' required/>
    
    
  </div>
  <div className="mb-3">
    <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmai" placeholder='Enter Your Email' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter Password' required/>
  </div>
  
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputNumber" placeholder='Enter Your  Number' required />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    
    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter Your Address' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
   
    <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder='Your favorite dish' required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
      
    </Layout>
  )
}

export default Register
