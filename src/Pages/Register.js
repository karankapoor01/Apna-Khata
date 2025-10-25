import React, { useState } from 'react'
import './Register.css'
import imglogo from '../images/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import Firebase from '../Firebase'

const Register = () => {
  const [obj, setobj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    shopname: ""
  })
  const navigate = useNavigate()
  function set(e) {
    setobj({ ...obj, [e.target.name]: e.target.value })
  }
  function handleSignup(e) {
    e.preventDefault()
    if(obj.name && obj.email && obj.password && obj.phone && obj.shopname){
      Firebase.child("Users").orderByChild("email").equalTo(obj.email).once("value",function(snap){
        if(snap.val()){
          alert("User Already Exist")
        }
        else{
          Firebase.child("Users").push(obj,function(err){
            if(err){
              alert("Network Slow")
            }
            else{
              alert("User Created")
              navigate("/login")
            }
          })
        }
      })
    }
    else{
      alert("Fields are Empty")
    }
  }

  return (
    <div id='container-register'>
      <form id='register-form'>
        <div id='register-img'>
          <img id='register-logo' src={imglogo} alt='logo' />
        </div>
        <div id='register-data'>
          <h2 id='register-title'>Create Your Account</h2><br />
          <input name='name' className='register-input' type='text' value={obj.name} onChange={set} placeholder='Full Name' required /><br />
          <input name='email' className='register-input' type='text' value={obj.email} onChange={set} placeholder='Email Address' required /><br />
          <input name='password' className='register-input' type='password' value={obj.password} onChange={set} placeholder='Password' required /><br />
          <input name='phone' className='register-input' type='text' value={obj.phone} onChange={set} placeholder='Phone Number' required /><br />
          <input name='shopname' className='register-input' type='text' value={obj.shopname} onChange={set} placeholder='Shop Name' required /><br />
          <button onClick={handleSignup} id='register-btn'>Sign up</button>
          <p id='containerp-login'>Already have an account? <Link id='register-p-link' to={'/login'}>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register