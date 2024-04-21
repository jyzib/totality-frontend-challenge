"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Locate, Boxes, Star, Loader } from "lucide-react";
import Link from "next/link";
import cartcontext from "@/context/CartContext";
// import { Hourglass } from 'lucide-react'
import { Home } from "lucide-react";
const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [added, setaddedflag] = useState(false);
  const { setCart, cart, user } = useContext(cartcontext);
  const [property, setProperty] = useState([]);
  const getProperty = async () => {
    const response = await fetch("/api/PropertyListings");
    const data = await response.json();
    const singledata = data?.data.filter((ele) => ele._id == params.id);

    setProperty(singledata);
    setLoading(false);
    handelcart(singledata[0]);
  };

  useEffect(() => {
    getProperty();
  }, []);

  const handelcart = (ele) => {
    if (added) {
      const filterdata = cart.filter((element) => {
        return element._id !== ele._id;
      });
      setCart([...filterdata]);
    } else {
      let obj = { ...ele, quantity: 1 };
      setCart([...cart, obj]);
    }
    setaddedflag(!added);
  };

  return (
    <main className="pt-10 pb-12 px-2 md:px-0 md:pl-20 ">
      {loading && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-gray-200/50 flex justify-center items-center">
          <Loader className="animate-spin w-[60px]" />
        </div>
      )}
      <div className=" mt-20 flex flex-col-reverse md:flex-row ">
        <div className="flex flex-col md:w-1/2">
          <div className="max-w-md">
            <div className="pt-10">
              <h1 className="text-4xl font-bold tracking-wide">
                {property[0]?.title}
              </h1>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-3xl">₹ {property[0]?.price}</span>
              <div className="flex items-center">
                <div className="flex gap-2 space-x-px">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-5 h-5 rounded-full ">
                      <Star className="text-white" fill="#FFC41F" />
                    </div>
                  ))}
                </div>
                <div className="pl-2 leading-none">
                  4.6 / 5.0 <span className="text-gray-900/40">(556)</span>
                </div>
              </div>
            </div>
            <p className="pt-8 leading-relaxed">{property[0]?.description}</p>
            <div className="flex bg-white gap-x-5 w-full md:w-[40%] mt-5 p-4 rounded-2xl shadow-xl">
              <Home />
              <p>{property[0]?.bedrooms} BEDROOMS</p>
            </div>
            <h1 className="text-xl mt-5 font-bold"> Amenities</h1>
            <div className="grid grid-cols-2 gap-5">
              {property[0]?.amenities.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="flex bg-white gap-x-5 w-full  items-center  mt-5 p-4 rounded-2xl shadow-xl"
                  >
                    <Boxes />
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex space-x-6 pt-9">
              <button
                onClick={() => handelcart(property[0])}
                className="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
              >
                {added ? "Remove" : "Add to cart"}
              </button>
              <Link
                href="/Cart"
                className="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
              >
                Go to Cart
              </Link>
            </div>
            <div className="flex bg-white gap-x-5 w-full mt-5 p-4 rounded-2xl shadow-xl">
              <Locate />
              <p>{property[0]?.location} location</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-end md:w-1/2">
          <div className="flex flex-col gap-y-6 justify-center ">
            <div className=" w-[80%] ">
              <Image
                className="rounded-xl"
                src={property[0]?.images[0]}
                width={200}
                height={100}
                alt={"c"}
                layout="responsive"
              />
            </div>
            {/* <div className="absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent to-teal-600/20 top-24 right-0"></div> */}
            <div className="flex pr:0 md:pr-20 space-x-4">
              {property[0]?.images.map((e, index) => (
                <div
                  key={index}
                  className="w-24 h-20 pl-1 flex justify-center items-center border-2 cursor-pointer border-gray-900/10 hover:border-teal-500"
                >
                  <Image
                    className="h-full"
                    src={property[0]?.images[0]}
                    width={200}
                    height={300}
                    alt={"c"}
                    layout="responsive"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
