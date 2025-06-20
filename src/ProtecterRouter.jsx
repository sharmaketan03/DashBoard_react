import React, { useEffect, useState } from 'react'
import {auth} from "./Firebase"
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

function ProtecterRouter({children}) {
    const [user,setUser]=useState(undefined)
    const navigate=useNavigate()
    useEffect(()=>{
         const unsubscraibe=onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser)

             return ()=> unsubscraibe()
         })
    },[])
 

    if(user==undefined){
        return  <div>Loading...</div>
    }
    
  return  user?children:navigate("/");
}

export default ProtecterRouter