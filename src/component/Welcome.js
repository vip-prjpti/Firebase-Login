

// export default function Welcome() {
//     return (
//         <div>
//             <div classNameName="center-align container" style={{maxWidth:"500px"}} >
//             <h2>NEWS</h2> 
//             <h3>That Matter To You</h3>
            
//         </div>
//     </div>
//     )
// }
import React from 'react'
import {useNavigate} from 'react-router-dom';
import "../App.css";

function Welcome() {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login');
    }
  return (
      <div className="bg_image" style={{position: 'absolute'}}>
        <div className="center">
            <div className="text-center">
                <h1>NEWS THAT MATTER</h1>
		            <span className="tera montserrat ls-xlarge bold"><h3>TO YOU</h3></span>
                    <h3>Now with Voice Assistant</h3>
                <button class="findbtn" onClick={goToLogin}>Get Your News</button>
                
            </div>
        </div>
                
    </div>
            
        
  );
}

export default Welcome;