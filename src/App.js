// import {Route, BrowserRouter, Switch} from 'react-router-dom'
// // BrowserRouter as Switch, Route
// import Login from './component/Login'
// import Signup from './component/Signup'
// import NavBar from './component/NavBar'
// function App(){
//   return (
//     <BrowserRouter>
//       <NavBar/>
//       <Switch>
//         <Route exact path="/login">
//           <Login />
//         </Route>
//         <Route exact path='/signup'>
//           <Signup />
//         </Route>
//         </Switch>
//         </BrowserRouter>
//   );
// }

// export default App;

import Login from './component/Login'
import Signup from './component/Signup'
import NavBar from './component/NavBar'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Welcome from './component/Welcome';
import React,{useState,useEffect} from 'react'
import {auth} from './firebase'

function App(){
  const [user,setUser] = useState(null)
  useEffect(() =>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
},[])
  return (
    <BrowserRouter>
      <NavBar user = {user} logoutUser={setUser} />
      <Routes>
        <Route exact path="/" element={<Welcome user = {user} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/signup' element={<Signup/>} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;