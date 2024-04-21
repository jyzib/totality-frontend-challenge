"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { Loader } from "lucide-react";
import  cartcontext  from "@/context/CartContext";
import Image from "next/image";
import { HomeIcon } from "lucide-react";
import { useContext } from "react";
import { ClerkLoaded,ClerkLoading ,SignedIn,SignedOut,SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  console.log('%cWelcome to Homely Hub by Jazib!', 'font-size: 20px; color: #3498db; font-weight: bold;');
  console.log('%cThanks for visiting!', 'font-size: 16px; color: #2ecc71;');

  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarBody className="top-2 bg-red-100x" />

    </div>
  );
}

function NavbarBody({ className }: { className?: string }) {
  const {cart} = useContext(cartcontext)

  interface CartItem {
    _id:any;
    title: string;
    images: string[];
    description: string;
    // Add other properties as needed
  }
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-4/5 mx-auto z-50  ", className)}
    >
     
      <Menu  setActive={setActive}>
        <div className="flex  w-full justify-between ">
         
       <div className=""><h1 className="text-black" > <Link href={'/'}><HomeIcon className="text-blue-900 "  size={40}/></Link> </h1></div>
       <div className="flex gap-x-9 items-center">
      <Link className="text-gray-700 text-sm " href={'/aboutUs'}>
      About Me
      </Link>
      
<div className="relative">
  <span className="text-white absolute right-[-10px] top-[-10px] bg-red-500 z-10 w-[20px] h-[20px] flex items-center justify-center rounded-full " >{cart.length}</span>
        <MenuItem setActive={setActive} active={active} item="cart">
          <div className=" text-sm grid grid-cols-1 gap-10 p-4">
            {cart.length == 0 && <><Image src={'https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png'} width={200} height={200} alt="cart empty" /> <p className="text-center text-lg font-bold">Cart is empty</p> </>}
            {cart.map((e:CartItem)=>{
              return (
                <ProductItem
                key={e._id}
                title={e.title}
                href="#"
                src={e.images[0]}
                description={e.description}
              />
              )
            })}
          
         
          </div>
        </MenuItem>
        </div>
       

<div className="">
    <ClerkLoading>

<Loader className="text-black animate-spin" />
    </ClerkLoading>
    <ClerkLoaded>

<SignedIn>
    <UserButton afterSignOutUrl="/">

    </UserButton>
</SignedIn>
<SignedOut>

    <SignInButton mode="modal" afterSignInUrl="/" afterSignUpUrl="/"  >
      <p className="text-black cursor-pointer " >Sign In</p>
    </SignInButton>
</SignedOut>
    </ClerkLoaded>
</div>
</div>
</div>

      </Menu>
    </div>
  );
}
