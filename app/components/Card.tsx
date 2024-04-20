'use client'
import { useState,useEffect } from "react";
import Image from "next/image";

import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffect({properties}) {
const [list,setList] = useState([])
//   const getProperty =async ()=>{
//   const response = await fetch('/api/PropertyListings')
//   const data = await response.json()
//   console.log(data) 
//   }


// useEffect(()=>{
//   getProperty()
// },[])

console.log(properties)



  return (
    <div className="w-full mx-auto px-8 mt-11">
      <div className="md:ml-5 flex flex-col gap-y-3">      <h1 className="text-3xl text-slate-700 font-semibold">Spacein Exclusives</h1>
      <p className=" text-slate-700" >Discover unique spaces not listed elsewhere.</p>
      </div>
      <div className="flex flex-wrap gap-10">
      {properties.map((e)=>{
  return (
    <div className="w-[300px] bg-white p-2 rounded-md">
      <div className="h-[200px] overflow-hidden object-contain"><Image className="rounded-md" src={e.images[0]} width={200} height={200} layout="responsive" alt={e.title} /></div>
<div className="flex flex-col gap-y-2">
      <h1 className="text-gray-800 font-bold">{e.title}</h1>  
      <h1 className="text-gray-500  text-sm">{e.description}</h1>  
      <h1 className="text-black font-semibold text-lg">₹ {e.price}</h1>  
      <div className="flex justify-between items-center">
      <a className="text-blue-500" target="_blank" href={`https://www.google.com/maps/place/${e.location}`}>{e.location}</a>
      <button  className="text-white bg-blue-400 p-2 rounded-lg border-b-2 border-gray-500 active:border-b-0">
      Book Now
      </button>
      </div>
      </div>    
    </div>
  )

})}
     </div>
    </div>
  );
}
