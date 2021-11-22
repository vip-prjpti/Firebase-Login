// import React,{useState} from 'react'

// const Login = () => {
//     const[email,setEmail] = useState("")
//     const[password,setPassword] = useState("")
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         console.log(email,password)
//     }
//     return (
//         <div className="centre container" style={{maxWidth:"500px"}}>
//             <h3>Please Login</h3>
//             <form onSubmit={(e)=>handleSubmit}>
//             <div className="input-field">
//                 <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}  />
//                 <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  />
               
//         </div>
//         <button type="submit" className= "btn blue">login</button>
//             </form>
//         </div>
//     )
// }

// export default Login;

import React,{useState} from 'react';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom';
import "../App.css";
export default function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const result = await auth.signInWithEmailAndPassword(email,password)
            window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
            navigate('/')
        }catch(err){
            window.M.toast({html: err.message, classes:"red"})
        }
    }
    return (
        <div className="login-body">
        <div className="center container " style={{maxWidth:"500px"}}>
            <div><h3 className="login-text-center">Please Login!!</h3></div>
            <div class="progress light-blue accent-3"></div>

            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="input-field">
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className= "btn light-blue accent-3">login</button>
            </form>
            </div>
        </div>
    )
}
