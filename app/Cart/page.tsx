"use client";
import React from "react";
import { useContext } from "react";
import cartcontext from "@/context/CartContext";
import PaymentForm from "../components/PaymentPage";
import Image from "next/image";
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
  const { cart, setCart, user } = useContext(cartcontext);
if(cart.length == 0){
  router.push(`/`)
}
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
    if(cart.length == 0){
      router.push(`/`)
    }
    setCart(newCart);
  };
 
  const handelDelete = (item:CartItem)=>{
    let newCart = [...cart];
      newCart = newCart.filter((cartItem) => cartItem._id !== item._id);
      setCart(newCart);
      if(cart.length == 0){
        router.push(`/`)
      }
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
    <div className=" mx-auto  mt-[150px]">
      <div className="flex gap-8 flex-wrap">
        <div className="bg-white flex-2 p-6 rounded-xl ">
          <h2 className="text-2xl font-semibold mb-4 ">Cart Items</h2>
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
                  <span className="w-full md:w-[500px]">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </span>
                  <span className="text-xl font-bold">₹ {item.price}</span>{" "}
                  <div className="flex  items-center justify-between gap-x-2">
                    <p className=" text-lg text-gray-500 font-semibold" >Number of Nights - </p>
                    <div className="flex  items-center justify-center gap-x-4">
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
        <div className="flex-1 flex fle-col   rounded-xl justify-center items-center bg-white" >
          <table className="rounded-lg border border-collapse border-gray-100 p-5">
          <h2 className="font-semibold  mb-4 text-xl p-5">Order Summary</h2>
  <tbody className="p-5">
    <tr className="border-b rounded-lg border-gray-400">
      <td className="p-2"><strong>Total Items:</strong></td>
      {/* <td className="p-2">-</td> */}
      <td className="p-2 text-lg font-semibold">  {cart?.length}</td>
    </tr>
    <tr className="border-b border-gray-400">
      <td className="p-2"><strong  >Total Amount:</strong></td>
      {/* <td className="p-2">-</td> */}
      <td className="p-2 text-lg font-semibold">₹ {calculateTotal().toFixed(2)}</td>
    </tr>
    <tr className="border-b border-gray-400">
      <td className="p-2"><strong>Full Name:</strong></td>
      {/* <td className="p-2">-</td> */}
      <td className="p-2 text-lg font-semibold">{user?.user?.firstName} {user?.user?.lastName}</td>
    </tr>
    {/* <tr className="border-b border-gray-400">
      <td className="p-2"><strong>Address:</strong></td>
      <td className="p-2 text-lg font-semibold">{user?.user?.emailAddresses?.[0]?.emailAddress}</td>
    </tr> */}
    <tr>
      <td className="p-2"><strong>Email:</strong></td>
      {/* <td className="p-2">-</td> */}
      <td className="p-2 text-lg font-semibold w-[50px] md:w-full ">{user?.user?.emailAddresses?.[0]?.emailAddress}</td>
    </tr>
  </tbody>
          <span  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <PaymentForm totalItem={cart?.length} price={calculateTotal().toFixed(2)} />
          </span>
</table>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
