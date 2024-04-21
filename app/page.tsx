"use client";

import { Card } from "./components/Card";
import { ChevronLeft , ChevronRight }  from 'lucide-react'
import { ImagesSliderDemo } from "./components/HeroSection";
import FilterData from "./components/FilterData";
import { useEffect, useState } from "react";

export default function Home() {
  const [page,setPage] = useState(1)
  const [filterdata, setfilterdata] = useState([]);
  const [list, setList] = useState([]);

  const getProperty = async () => {
    const response = await fetch("/api/PropertyListings");
    const data = await response.json();
  
    setfilterdata(data?.data);
    setList(data?.data);
  };

  useEffect(() => {
    getProperty();
  }, []);
  return (
    <>
      <ImagesSliderDemo />

      <FilterData properties={list} setfilterdata={setfilterdata} />

      <div className="w-full mx-auto px-8 mt-11">
        <div className="md:ml-5 flex flex-col gap-y-3 my-5 px-0 md:px-16">
          {" "}
          <h1 className="text-3xl text-teal-700 font-bold  text-center">
          Explore exclusive spaces 
          </h1>
          <p className=" text-slate-700 text-center ">
          Find your perfect property for rent! Whether you're looking for a cozy cabin in the woods, a luxurious villa with a pool, or anything in between, Totallity Rentals has you covered. Start your search today!
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          {filterdata?.slice((page-1) * 8,page*8).map((e,i) => {
            return (
            
                <Card key={i} e={e} />
            
            );
          })}
        </div>

        



      </div>
      <div className="flex justify-center my-6">
      <div className="flex items-center gap-x-3">
          <button className="bg-gray-100 p-2 shadow-sm    flex justify-center items-center border-2 rounded-lg border-b-4 active:border-b-2 border-gray-300" onClick={()=> page > 1 && setPage(page-1)} ><ChevronLeft/> Previous</button>
          <p className="text-lg " > {page}/{Math.round(filterdata?.length/8)}</p>
         
          <button className="bg-gray-100 p-2 shadow-sm   flex justify-center items-center border-2 rounded-lg border-b-4 active:border-b-2 border-gray-300"  onClick={()=> page < Math.round(filterdata?.length/8) && setPage(page+1)} >Next <ChevronRight/>  </button>
        </div>
        </div>
      {/* <CardHoverEffect properties={filterdata} /> */}
    </>
  );
}
