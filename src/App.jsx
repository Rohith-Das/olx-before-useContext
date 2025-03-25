import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Create from './components/create/create.jsx'
import { onAuthStateChanged } from 'firebase/auth'
function App() {
 
//   const navigate=useNavigate()
//   useEffect(()=>{
// onAuthStateChanged(auth,async(user)=>{
//   if(user){
//     navigate("/")
//   }else{
//     navigate("/login")
//   }
// })
//   },[])

  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Create />} />
  </Routes>
    </BrowserRouter>
  
  )
}

export default App
