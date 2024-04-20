"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { Loader } from "lucide-react";
import  cartcontext  from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ClerkLoaded,ClerkLoading ,SignedIn,SignedOut,SignInButton, UserButton } from "@clerk/nextjs";
import UserData from './UserData'
export function Navbar() {
 
  // console.log(g)
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarBody className="top-2 bg-red-100x" />

    </div>
  );
}

function NavbarBody({ className }: { className?: string }) {
  const {cart} = useContext(cartcontext)
  // const [item,setItem] = useState(cart)
  interface CartItem {
    _id:String;
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
        <div className="flex  w-full justify-between">
         
        <div className=""><h1 className="text-black" > <Link href={'/'}>logo</Link> </h1></div>
        <div className="flex gap-x-9">
      <Link className="text-gray-700" href={'/'}>
      About Us
      </Link>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        {/* <ShoppingCart className="text-black" /> */}

<div className="relative">
  <span className="text-white absolute right-[-10px] top-[-10px] bg-red-500 z-10 w-[20px] h-[20px] flex items-center justify-center rounded-full " >{cart.length}</span>
        <MenuItem setActive={setActive} active={active} item="cart">
          <div className=" text-sm grid grid-cols-1 gap-10 p-4">
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
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

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
