'use client'

import {createContext,useState,useEffect} from 'react'
// import {useRouter} from 'next/navigation'
const cartcontext = createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])
    const [user,setCurrentUser] = useState({})

const getCurrentUser = async ()=>{
    const response = await fetch('/api/UserAuth')
    const data = await response.json()
   
    setCurrentUser(data)
}
    useEffect(()=>{
        getCurrentUser()
    },[])
    return (
        <cartcontext.Provider 
         value={{cart,setCart,user}}
         >
            {children}
        </cartcontext.Provider>
    )

}
export default cartcontext;