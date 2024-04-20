"use client";
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
  const { cart, setCart,user } = useContext(cartcontext);

  const userDetails: UserDetails = {
    fullName: "John Doe",
    address: "123 Main Street, City, Country",
    email: "john@example.com",
  };

    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

  const handeldecrease = (x) => {
    let newarrr = [...cart];
    if (x.quantity == 1) {
      newarrr = newarrr.filter((e) => e._id !== x._id);
      
      setCart(newarrr);
    } else {
      for (let i = 0; i < newarrr.length; i++) {
        if (newarrr[i]._id == x._id) {
          newarrr[i].quantity = newarrr[i].quantity - 1;
        }
      }

      setCart(newarrr);
    }
    // console.log(newarrr)
  };
  const handelincrease = (x) => {
    let newarrr = [...cart];
    for (let i = 0; i < newarrr.length; i++) {
        if (newarrr[i]._id == x._id) {
          newarrr[i].quantity = newarrr[i].quantity + 1;
        }
      }

      setCart(newarrr);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
          <ul>
            {cart.map((item: CartItem) => (
              <li key={item._id} className="m-5 p-5">
                <span>{item.title}</span> - <span>${item.price}</span>{" "}
                <button onClick={() => handeldecrease(item)}>-</button>{" "}
                <span>
                  {item.quantity}{" "}
                  <button onClick={() => handelincrease(item)}> +</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            {/* <strong>Total Items:</strong> {cartItems.length} */}
          </div>
          <div className="mb-4">
            <strong>Total Amount:</strong> ${calculateTotal().toFixed(2)}
          </div>
          <div className="mb-4">
            <strong>Full Name:</strong> {user?.user?.firstName +` `+ user?.user?.lastName}
          </div>
          <div className="mb-4">
            <strong>Address:</strong> {user?.user?.emailAddresses[0]?.emailAddress}
          </div>
          <div className="mb-4">
            <strong>Email:</strong> {user?.user?.emailAddresses[0]?.emailAddress}
          </div>
          <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       
          >
          <PaymentForm/>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CheckoutPage;
