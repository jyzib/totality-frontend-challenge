"use client";

import { Card } from "./components/Card";

import { ImagesSliderDemo } from "./components/HeroSection";
import FilterData from "./components/FilterData";
import { useEffect, useState } from "react";

export default function Home() {
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
        <div className="md:ml-5 flex flex-col gap-y-3">
          {" "}
          <h1 className="text-3xl text-slate-700 font-semibold">
            Spacein Exclusives
          </h1>
          <p className=" text-slate-700">
            Discover unique spaces not listed elsewhere.
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          {filterdata.map((e,i) => {
            return (
            
                <Card key={i} e={e} />
            
            );
          })}
        </div>
      </div>

      {/* <CardHoverEffect properties={filterdata} /> */}
    </>
  );
}
