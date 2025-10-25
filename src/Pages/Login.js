import React, { useState } from 'react'
import './Login.css'
import imglogo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import Firebase from '../Firebase'


const Login = () => {
  const [obj,setObj] = useState({
    phone:"",
    password:""
  })
  function set(e){
    setObj({...obj,[e.target.name]:e.target.value})
  }
   function handleLogin(e){
    e.preventDefault()
    if(obj.phone && obj.password){
      Firebase.child("Users").orderByChild("Phone").equalTo(obj.phone).once("value",function(snapshot){
        console.log(snapshot.val());
        if(snapshot.val()){
          
          
        }
        else{
          alert("Invalid Phone")
        }
      })
    }
    else{
      alert("Field are Empty")
    }
   } 
  return (
    <div id='container-login'>
      <form id='login-form'> 
        <div id='img'> 
         <img id='logo-img' src={imglogo} alt='logo'/>
        </div>
        <div id='login-data'>
          <h2 id='login-title'>Login to Your Account</h2><br/>
          <input name='phone' value={obj.phone} className='input' id='login-input' type='text' placeholder='Mobile number' onChange={set} required></input><br/>
          <input name='password' value={obj.password} className='input' type='password' placeholder='Password' onChange={set} required></input><br/>
          <button onClick={handleLogin} id='login-btn'>Login</button>
          <p id='login-p'>Don't have an Account? <Link id='p-link' to={'/Register'}>Register</Link> </p>
          {/* <button id='login-btn'>Login</button> */}
        </div>
      </form>
    </div>
  )
}

export default Login