import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase'
import {useNavigate} from 'react-router-dom'
import "../App.css";
const NavBar = ({user, logoutUser}) => {
  const navigate = useNavigate()
    return (
        <nav>
        
        <div className="nav-wrapper indigo darken-4">
        
          <Link to="/" className="brand-logo ">News App</Link>
          
          <ul id="nav-mobile" className="right ">
          {
            user?
              <li>
                  <button className= "btn red" onClick={()=>{
                        auth.signOut()
                        logoutUser(null)
                        navigate('/')
                  }}>logout</button>
              </li>
              :
            
            <>
              <li><button className= "btn light-blue accent-3" ><Link to="/login">login</Link></button></li>
              <li><button className= "btn light-blue accent-3" ><Link to="/signup">signup</Link></button></li>
            </>
           
          }
            
          </ul>
        </div>
        
      </nav>
            
    )
}

export default NavBar;
