"use client"
import React from "react";
import { useContext } from "react";
import cartcontext from "@/context/CartContext";
import PaymentForm from "../components/PaymentPage";

interface CartItem {
  _id: number;
  title: string;
  price: number;
  quantity: number;
}

interface UserDetails {
  fullName: string;
  address: string;
  email: string;
}

const CheckoutPage: React.FC = () => {
  const { cart, setCart, user } = useContext(cartcontext);

  const userDetails: UserDetails = {
    fullName: "John Doe",
    address: "123 Main Street, City, Country",
    email: "john@example.com",
  };

  const calculateTotal = (): number => {
    return cart.reduce((total:any, item:any) => total + item.price * item.quantity, 0);
  };

  const handleDecrease = (item: CartItem): void => {
    let newCart = [...cart];
    if (item.quantity === 1) {
      newCart = newCart.filter((cartItem) => cartItem._id !== item._id);
    } else {
      newCart = newCart.map((cartItem) =>
        cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
    }
    setCart(newCart);
  };

  const handleIncrease = (item: CartItem): void => {
    const newCart = cart.map((cartItem:any) =>
      cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(newCart);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
          <ul>
            {cart?.map((item: CartItem) => (
              <li key={item._id} className="m-5 p-5">
                <span>{item.title}</span> - <span>${item.price}</span>{" "}
                <button onClick={() => handleDecrease(item)}>-</button>{" "}
                <span>
                  {item.quantity}{" "}
                  <button onClick={() => handleIncrease(item)}>+</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            <strong>Total Items:</strong> {cart?.length}
          </div>
          <div className="mb-4">
            <strong>Total Amount:</strong> ${calculateTotal().toFixed(2)}
          </div>
          <div className="mb-4">
            <strong>Full Name:</strong> {user?.user?.firstName + ` ` + user?.user?.lastName}
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
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
