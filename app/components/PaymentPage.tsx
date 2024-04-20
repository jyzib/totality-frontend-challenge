import { useContext } from 'react';
import cartcontext from '@/context/CartContext';
import './Payment.css'
import Image from 'next/image';

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

 function PaymentForm() {
    const {user} = useContext(cartcontext)
    console.log(user)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Proceed to Payment</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          {/* <DialogTitle>Edit profile</DialogTitle> */}
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </DialogDescription>
        </DialogHeader>
        <div className="screen flex-center shadow-sm">
      <form className="popup flex  p-lg">
        <div className="close-btn pointer flex-center p-sm">
          <i className="ai-cross"></i>
        </div>

        {/* CARD FORM */}
        <div className="">
          {/* <div className="header flex-between flex-vertical-center">
            <div className="flex-vertical-center">
              <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
              <span className="title">
                <strong>AceCoin</strong><span>ay</span>
              </span>
            </div>
            <div className="timer" data-id="timer">
              <span>0</span><span>5</span>
              <em>:</em>
              <span>0</span><span>0</span>
            </div>
          </div> */}
          <div className="card-data flex-fill flex-vertical">

            {/* Card Number */}
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
                  <input className="numbers" type="number" min="1" max="9999" placeholder="0000"/>-
                  <input className="numbers" type="number" placeholder="0000"/>-
                  <input className="numbers" type="number" placeholder="0000"/>-
                  <input className="numbers" type="number" placeholder="0000" data-bound="carddigits_mock" data-def="0000"/>
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
                  <input className="numbers" data-bound="mm_mock" data-def="00" type="number" min="1" max="12" step="1" placeholder="MM"/>
                </div>
                <span className="m-md">/</span>
                <div className="input-container half-width">
                  <input className="numbers" data-bound="yy_mock" data-def="01" type="number" min="23" max="99" step="1" placeholder="YY"/>
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
                  <input id="cvc" type="password"/>
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
                  <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="text" className="uppercase" placeholder="CARDHOLDER NAME"/>
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
                  <input id="name" data-bound="name_mock" data-def="Mr. Cardholder" type="number" className="uppercase" placeholder="Phone Number"/>
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
        <div className="sidebar none md:block flex-vertical ">
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
                <strong>Apple</strong>
              </li>
              <li className="flex-between">
                <span>Order number</span>
                <strong>429252965</strong>
              </li>
              <li className="flex-between">
                <span>Product</span>
                <strong>MacBook Air</strong>
              </li>
              <li className="flex-between">
                <span>VAT (20%)</span>
                <strong>$100.00</strong>
              </li>
            </ul>
          </div>
          <div className="separation-line"></div>
          <div className="total-section flex-between flex-vertical-center">
            <div className="flex-fill flex-vertical">
              <div className="total-label f-secondary-color">You have to Pay</div>
              <div>
                <strong>549</strong>
                <small>.99 <span className="f-secondary-color">USD</span></small>
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