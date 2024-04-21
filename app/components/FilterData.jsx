'use client'
import React, { useState, useEffect } from "react";

import { Slider } from "@/components/ui/slider";
import { Search ,Delete} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterData = ({ properties,setfilterdata }) => {
  const [filteredList, setFilteredList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [location, setLocation] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [rangeval, setRangeVal] = useState(300);

  useEffect(() => {
    // Extract unique locations and amenities from properties data
    const uniqueLocations = [...new Set(properties.map(property => property.location))];
    const uniqueAmenities = [...new Set(properties.flatMap(property => property.amenities))];
    setLocation(uniqueLocations);
    setAmenities(uniqueAmenities);
  }, [properties]);
  const handelCity = (selectedCity) => {
    if (filterList.length > 0) {
        const existingFilter = filterList.find(filter => filter.city !== undefined);

        if (existingFilter) {
            // Update the existing filter with the selected city
            const updatedFilterList = filterList.map(filter => {
                if (filter.city) {
                    return { ...filter, city: selectedCity };
                } else {
                    return filter;
                }
            });
            setFilterList(updatedFilterList);
        } else {
            // Add a new filter with the selected city
            setFilterList(prevFilters => {
                return selectedCity !== "Select a city" ? [...prevFilters, { city: selectedCity }] : [];
            });
        }
    } else {
        // Add a new filter with the selected city
        setFilterList(selectedCity !== "Select a city" ? [{ city: selectedCity }] : []);
    }
  
};

  
const handelRooms = (selectedRooms) => {
    if (filterList.length > 0) {
        const existingFilter = filterList.find(filter => filter.rooms !== undefined);

        if (existingFilter) {
            // Update the existing filter with the selected rooms
            const updatedFilterList = filterList.map(filter => {
                if (filter.rooms) {
                    return { ...filter, rooms: selectedRooms };
                } else {
                    return filter;
                }
            });
            setFilterList(updatedFilterList);
        } else {
            // Add a new filter with the selected rooms
            setFilterList(prevFilters => {
                return selectedRooms !== "all" ? [...prevFilters, { rooms: selectedRooms }] : [];
            });
        }
    } else {
        // Add a new filter with the selected rooms
        setFilterList(selectedRooms !== "all" ? [{ rooms: selectedRooms }] : []);
    }
};

  
const handelAmenities = (selectedAmenity) => {
    if (filterList.length > 0) {
        const existingFilter = filterList.find(filter => filter.amenities !== undefined);

        if (existingFilter) {
            // Update the existing filter with the selected amenity
            const updatedFilterList = filterList.map(filter => {
                if (filter.amenities) {
                    return { ...filter, amenities: selectedAmenity };
                } else {
                    return filter;
                }
            });
            setFilterList(updatedFilterList);
        } else {
            // Add a new filter with the selected amenity
            setFilterList(prevFilters => {
                return selectedAmenity !== "Select a theme" ? [...prevFilters, { amenities: selectedAmenity }] : [];
            });
        }
    } else {
        // Add a new filter with the selected amenity
        setFilterList(selectedAmenity !== "Select a theme" ? [{ amenities: selectedAmenity }] : []);
    }
};

  
  const applyFilters = () => {
    let filteredList = [...properties]; // Create a copy of the original properties array
 
    filterList.forEach(filter => {
      if (filter.city) {
        filteredList = filteredList.filter(property => property.location === filter.city);
      }
      if (filter.amenities) {
        filteredList = filteredList.filter(property => property.amenities.includes(filter.amenities));
      }
      if (filter.rooms) {
        filteredList = filteredList.filter(property => property.bedrooms.toString() === filter.rooms);
      }
    });
  
    // Filter by price range
    filteredList = filteredList.filter(property => parseInt(property.price) <= rangeval);
  
    setFilteredList(filteredList);

  };
  
  

  useEffect(() => {
    applyFilters();
  }, [filterList, rangeval]);

const handelSearch = ()=>{
    setfilterdata(filteredList)
   
}
const handelclearfilter = ()=>{
  setFilteredList([])
  setfilterdata(properties)
}




  return (
    <>
      <h1 className=" text-2xl font-semibold w-[90%] m-auto mt-5 text-center text-teal-700" >
Apply <span className="font-bold text-orange-500">filters</span>  to refine your home search for the best results.</h1>
    <div id="property" className="w-full mt-6 flex justify-center">
      <div className="w-[90%] bg-white p-4 rounded-lg md:rounded-full flex justify-between flex-col shadow-lg md:flex-row">
        <div className=" ">
          <p className="text-gray-400 pl-2">CITY</p>
          <Select onValueChange={(e) => handelCity(e)}>
            <SelectTrigger className="w-[190px]">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {location.map((e, index) => (
                <SelectItem key={index} value={e}>{e}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <hr className="border-gray-400 h-full border-1 " />
        <div className=" ">
          <p className="text-gray-400 pl-2 uppercase">Amenities</p>
          <Select onValueChange={(e) => handelAmenities(e)}>
            <SelectTrigger className="w-[190px]">
              <SelectValue placeholder="Select a amenities" />
            </SelectTrigger>
            <SelectContent>
              {amenities.map((e, index) => (
                <SelectItem key={index} value={e}>{e}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <hr className="border-gray-400 h-full border-1 " />
        <div className=" ">
          <p className="text-gray-400 pl-2 uppercase">Bed Rooms</p>
          <Select onValueChange={(e) => handelRooms(e)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue  placeholder="select rooms" />
            </SelectTrigger>
            <SelectContent>
         
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <hr className="border-gray-400 h-full border-1 " />
        <div className="md:w-[20%]">
          <div className="flex h-full flex-col gap-y-4 justify-center">
            <div className="flex justify-between">
              <p className="text-gray-400 uppercase">Price range</p>
              <p className="font-bold text-black uppercase">₹ 0 - ₹ {rangeval}</p>
            </div>
            <Slider
              onValueChange={(e) => setRangeVal(e[0])}
              defaultValue={[rangeval]}
              max={1000}
              step={10}
            />
          </div>
        </div>
        <hr className="border-gray-400 h-full border-1 " />
        <div className=" items-center px-2">
          <div className=" h-full text-black flex justify-between items-center gap-x-7 mt-5 md:mt-0 mb-5 md:mb-0 ">
            <h2 className="text-blue-300 text-sm md:lg text font-bold  ">
              {filteredList.length} houses available
            </h2>
            <div onClick={handelclearfilter} className="bg-black p-3 rounded-full cursor-pointer">
              <Delete className="text-[#9BF8F8]" />
            </div>
            <div onClick={handelSearch} className="bg-black p-3 rounded-full cursor-pointer">
              <Search className="text-[#9BF8F8]" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterData;
