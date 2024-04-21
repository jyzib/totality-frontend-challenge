'use client'
import { useContext } from 'react';
import cartcontext from '@/context/CartContext';
import './Payment.css'
import Image from 'next/image';
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
type props = {
    totalItem :any;
    price:String
}
 function PaymentForm({totalItem,price}:props) {
  const { toast } = useToast()
    const {user} = useContext(cartcontext)

    const handelclick = async()=>{

      alert('Booking Confirmation mail has been sent to your mail Id')
     
          const res = await fetch(`/api/Bookmail/${price}`)
      const data = await res.json()
  
    }
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='m-5 text-sm' onClick={()=>handelclick()} >Checkout</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
    
          <DialogDescription>
        
          </DialogDescription>
        </DialogHeader>
        <div className="screen flex-center shadow-sm">
      <form className="popup flex flex-col-reverse md:flex-row h-[500px] md:h-full items-center">
        <div className="close-btn pointer flex-center p-sm">
          <i className="ai-cross"></i>
        </div>

        <div className="">
       
          <div className="card-data flex-fill flex-vertical">

        
            <div className="flex-between flex-vertical-center">
              <div className="card-property-title">
                <strong>Card Number</strong>
                <span>Enter 16-digit card number on the card</span>
              </div>
              <div className="f-main-color pointer"><i className="ai-pencil"></i> Edit</div>
            </div>

            {/* Card Field */}
            <div className="flex-between">
              <div className="card-number flex-vertical-center flex-fill">
                <div className="card-number-field flex-vertical-center flex-fill">

                  {/* SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
                    <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"/>
                  </svg>

                  {/* Input Fields */}
                  <input required className="numbers" type="number" min="1" max="9999" placeholder="0000"/>-
                  <input required className="numbers" type="number" placeholder="0000"/>-
                  <input required className="numbers" type="number" placeholder="0000"/>-
                  <input required className="numbers" type="number" placeholder="0000" data-bound="carddigits_mock" data-def="0000"/>
                </div>
                <i className="ai-circle-check-fill size-lg f-main-color"></i>
              </div>
            </div>

            {/* Expiry Date */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>Expiry Date</strong>
                <span>Enter the expiration date of the card</span>
              </div>
              <div className="card-property-value flex-vertical-center">
                <div className="input-container half-width">
                  <input required className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1" max="12" step="1" placeholder="MM"/>
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                  <input required className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23" max="99" step="1" placeholder="YY"/>
                </div>
              </div>
            </div>

            {/* CCV Number */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>CVC Number</strong>
                <span>Enter card verification code from the back of the card</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input required id="cvc" type="password"/>
                  <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="flex-between">
              <div className="card-property-title">
                <strong>Cardholder Name</strong>
                <span>Enter cardholder's name</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input required id="name" data-bound="name_mock"  type="text" className="uppercase" placeholder="CARDHOLDER NAME"/>
                  <i className="ai-person"></i>
                </div>
              </div>
            </div>
            <div className="flex-between">
              <div className="card-property-title">
                <strong>Contact Info </strong>
                <span>Enter Phone number</span>
              </div>
              <div className="card-property-value">
                <div className="input-container">
                  <input required id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="number" className="uppercase" placeholder="Phone Number"/>
                  <i className="ai-person"></i>
                </div>
              </div>
            </div>


          </div>
          <div className="action flex-center">
            <button type="submit" className="b-main-color pointer">Pay Now</button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sidebar none md:block flex-vertical pl-0 md:p-[2rem]">
          <div></div>
          <div className="purchase-section flex-fill flex-vertical">

            <div className="card-mockup flex-vertical">
              <div className="flex  py-4  items-center justify-center">
                <Image src={user?.user?.imageUrl} className='rounded-full' width={80} height={80} alt={user?.user?.firstName}/>
              </div>
              <div>
                <div id="name_mock" className=" size-md font-bold pb-sm uppercase ellipsis">{user?.user?.firstName +` `+ user?.user?.lastName}</div>
                <div className="size-md pb-md">
                  <strong>
                    <span className="pr-sm">
                      &#x2022;&#x2022;&#x2022;&#x2022;
                    </span>
                    <span id="carddigits_mock">0000</span>
                  </strong>
                </div>
                <div className="flex-between flex-vertical-center">
                  <strong className="size-md">
                    <span id="mm_mock">00</span>/<span id="yy_mock">01</span>
                  </strong>

                  {/* SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"/>
                    <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"/>
                    <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48C20.376,15.05,18,19.245,18,24z"/>
                  </svg>
                </div>
              </div>
            </div>

            <ul className="purchase-props">
              <li className="flex-between">
                <span>Company</span>
                <strong>Homily Hub</strong>
              </li>
              <li className="flex-between">
                <span>Order number</span>
                <strong>{Math.floor(Math.random()*10)*100+Math.floor(Math.random()*10) }</strong>
              </li>
              <li className="flex-between">
                <span>Product Count</span>
                <strong>{totalItem}</strong>
              </li>
              <li className="flex-between">
                <span>Gst (18% included)</span>
                <strong>₹ {Number(price)*18/100}</strong>
              </li>
            </ul>
          </div>
          <div className="separation-line"></div>
          <div className="total-section flex-between flex-vertical-center">
            <div className="flex-fill flex-vertical">
              <div className="total-label f-secondary-color">You have to Pay</div>
              <div>
                <strong> ₹ {price}</strong>
           
              </div>
            </div>
            <i className="ai-coin size-lg"></i>
          </div>
        </div>
      </form>
    </div>
        <DialogFooter>
         
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default PaymentForm;