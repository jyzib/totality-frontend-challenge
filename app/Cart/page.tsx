"use client";
import React from "react";
import { useContext } from "react";
import cartcontext from "@/context/CartContext";
import PaymentForm from "../components/PaymentPage";
import Image from "next/image";
interface CartItem {
  _id: number;
  title: string;
  price: number;
  images: any;
  description: String;
  quantity: number;
}

interface UserDetails {
  fullName: string;
  address: string;
  email: string;
}

const CheckoutPage: React.FC = () => {
  const { cart, setCart, user } = useContext(cartcontext);

  const calculateTotal = (): number => {
    return cart.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
  };

  const handleDecrease = (item: CartItem): void => {
    let newCart = [...cart];
    if (item.quantity === 1) {
      newCart = newCart.filter((cartItem) => cartItem._id !== item._id);
    } else {
      newCart = newCart.map((cartItem) =>
        cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
    setCart(newCart);
  };
 
  const handelDelete = (item:CartItem)=>{
    let newCart = [...cart];
      newCart = newCart.filter((cartItem) => cartItem._id !== item._id);
      setCart(newCart);
  }

  const handleIncrease = (item: CartItem): void => {
    const newCart = cart.map((cartItem: any) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(newCart);
  };

  return (
    <div className=" mx-auto  p-8 mt-[100px]">
      <div className="flex gap-8 flex-wrap">
        <div className="bg-gray-100 flex-2 p-6 rounded-xl ">
          <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
          <ul className="flex flex-col gap-y-10">
            {cart?.map((item: CartItem) => (
              <li key={item._id} className="shadow-md rounded-lg  p-5 flex gap-x-5 flex-col md:flex-row">
                <Image
                  src={item.images[0]}
                  className="rounded-2xl shadow-xl"
                  alt={item.title}
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-y-5 w-full">
                  <span>
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </span>
                  <span className="text-xl font-bold">₹ {item.price}</span>{" "}
                  <div className="flex  items-center justify-around gap-x-2">
                    <div className="flex  items-center justify-center gap-x-2">
                    <button
                      className="bg-gray-100 p-5 shadow-sm  w-5 h-5 flex justify-center items-center border-2 rounded-lg border-b-4 active:border-b-2 border-gray-300"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>{" "}
                    <p className="text-lg font-semibold">{item.quantity}</p>
                    <span>
                      <button
                        className="bg-gray-100 p-5 shadow-sm  w-5 h-5 flex justify-center items-center border-2 rounded-lg border-b-4 active:border-b-2 border-gray-300"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </span>

                  </div>
                  <div className="">
                    <button onClick={()=>handelDelete(item)} className="bg-rose-500 text-white px-8 p-5 shadow-sm  w-5 h-5 flex justify-center items-center border-2 rounded-lg border-b-4 active:border-b-2 border-gray-300" >Delete</button>
                  </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 flex-1 p-6  rounded-xl " >
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            <strong>Total Items:</strong> {cart?.length}
          </div>
          <div className="mb-4">
            <strong>Total Amount:</strong> ₹ {calculateTotal().toFixed(2)}
          </div>
          <div className="mb-4">
            <strong>Full Name:</strong>{" "}
            {user?.user?.firstName + ` ` + user?.user?.lastName}
          </div>
          <div className="mb-4">
            <strong>Address:</strong>{" "}
            {user?.user?.emailAddresses?.[0]?.emailAddress}
          </div>
          <div className="mb-4">
            <strong>Email:</strong>{" "}
            {user?.user?.emailAddresses?.[0]?.emailAddress}
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <PaymentForm totalItem={cart?.length} price={calculateTotal().toFixed(2)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
