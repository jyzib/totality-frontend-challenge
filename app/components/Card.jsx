"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";
import cartcontext from "@/context/CartContext";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
export function Card({ e }) {
  const router = useRouter()
  const { toast } = useToast()
 
  const [added, setaddedflag] = useState(false);
  const { setCart, cart, user } = useContext(cartcontext);
function tostdisplay(ele){
  
    toast({
      title: `You Need  to Login to add ${ele} in your cart`,
    
    })
  
}
  const handelcart = (ele) => {
    if(user.user == null){
     tostdisplay(ele.title)
    
   }else{
    console.log('dd')
    router.push(`/${ele._id}`)
  }
  };

  return (
    <div className="w-[300px] bg-white p-2 rounded-md">
      <div className="h-[200px] overflow-hidden object-contain">
      
        <Image
          className="rounded-md"
          src={e.images[0]}
          width={200}
          height={200}
          layout="responsive"
          alt={e.title}
        />
   
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-gray-800 font-bold">{e.title}</h1>
        <h1 className="text-gray-500  text-sm">{e.description}</h1>
        <h1 className="text-black font-semibold text-lg">₹ {e.price}</h1>
        <div className="flex justify-between items-center">
          <a
            className="text-blue-500"
            target="_blank"
            href={`https://www.google.com/maps/place/${e.location}`}
          >
            {e.location}
          </a>
          <button
            onClick={() => handelcart(e)}
            className="text-white bg-blue-400 p-2 rounded-lg border-b-2 border-gray-500 active:border-b-0"
          >
            Book Now
          </button>
    
        </div>
      </div>
    </div>
  );
}
