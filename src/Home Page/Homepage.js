import React from 'react'
import './Homepage.css'
import logo from '../images/Logo.png'
import feature1 from '../images/Feature-1.png'
import feature2 from '../images/Feature-2.png'
import feature3 from '../images/Feature-3.png'
import feature4 from '../images/Feature-4.png'
import homeimage from '../images/homepage-homeimg.png'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div id='homepage-container'>
        <div id='homepage-navbar'>
          <div id='nav-img'>
            <img id='homepage-logo' src={logo} alt='logo'></img>
          </div>
          <div id='homepage-navmenu'>
            <h4 className='navmenu-h4'>Home</h4>
            <h4 className='navmenu-h4'>Features</h4>
            <h4 className='navmenu-h4'>Contact</h4>
            <h4 className='navmenu-h4'>About Us</h4>
            <h4 className='navmenu-h4'>Contact</h4>
          </div>
          <div id='homepage-navlogin'>
            <button className='homepage-loginbtn' id='homepage-navbtn'><Link className='homepage-Link' to={'/Login'}>Login</Link></button>
            <button className='homepage-loginbtn'><Link className='homepage-Link' to={'/Register'}>Sign up</Link></button>
          </div>
        </div>
        <div id='homepage-home'>
          <div id='homepage-homedata'>
            <h1 id='homedata-h1'>Manage your<br/>Dukan Khata Account<br/>Smartly with<br/>Apna Khata.</h1>
            <p id='homedata-p'>Track transaction, manages coustmers,<br/>and grow your business effortlessly.</p>
            <button id='homepage-homebtn'><Link className='homepage-Link' to={'/Register'}>Get Started Free</Link></button>
          </div>
          <div id='homepage-homeimg'>
            <img id='homeimg' src={homeimage} alt=''></img>
          </div>
        </div>
        <div id='homepage-features'>
          <h1 id='homepage-featureh1'>Features⚙️</h1>
          <div id='homepage-feature1'>
            <div className='homepagefeature-img'>
              <img className='featue-icon' src={feature1} alt=''></img>
            </div> 
            <div className='feature-data'>
              <h3>Track Payments<br/>& Credits</h3>
              <p>Easy record all<br/>business transactions</p>
            </div>
          </div>
          <div id='homepage-feature2'>
            <div className='homepagefeature-img'>
              <img className='featue-icon' src={feature2} alt=''></img>
            </div>
            <div className='feature-data'>
              <h3>Smart Reports</h3>
              <p>Get insights and<br/>summaries in one<br/>click</p>
            </div>
          </div>
          <div id='homepage-feature3'>
            <div className='homepagefeature-img'>
              <img className='featue-icon' src={feature3} alt=''></img>
            </div>
            <div className='feature-data'>
              <h3>Reminders &<br/>Notifications</h3>
              <p>Never miss a<br/>payment again</p>  
            </div>
          </div>
          <div id='homepage-feature4'>
            <div className='homepagefeature-img'>
              <img id='featureicon-4' src={feature4} alt=''></img>
            </div>
            <div className='feature-data'>
              <h3>Cloud Backup</h3>
              <p>Secure data<br/>accessible anytime</p>
            </div>
          </div>
        </div>
        <div id='why-apnakhata'>
          <h1 id='why-apnakhata-h1'>Why Businesses Love❤️Apna Khata</h1>
          <div className='apnakhata-kyu1'>
            <i class="ri-calendar-todo-fill" ></i><h3>One place to record, remind payment-smartly</h3>
          </div>
          <div className='apnakhata-kyu1' id='apnakhatawhy-data1'>
            <i class="ri-shield-check-fill"></i><h3>100% data security</h3>
          </div>
          <div className='apnakhata-kyu2' >
            <i class="ri-chat-new-fill"></i><h3>Real time updates. Accurate records</h3>
          </div>
          <div className='apnakhata-kyu2' id='apnakhatawhy-data2'>
            <i class="ri-store-2-fill"></i><h3>Made for dukandars, trusted by everyone</h3>
          </div>
        </div>
        <div id='Free-account'>
          <h1>Ready to simplify your business accounting?💼</h1>
          <button><Link className='homepage-Link' to={'/Register'}>Create Your Free Account Now</Link></button>
        </div>
        <div id='homepage-footer'>
          <p>© 2025 Apna Khata | Made for Indian Shopkeepers 💼 | by Karan Kapoor❤️.</p>
        </div>
    </div>
  )
}

export default Homepage