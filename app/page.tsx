'use client'
import Image from "next/image";
import { HoverEffect } from "./components/ui/card-hover-effect";
import {CardHoverEffect} from "./components/Card";
import {getproperty} from '../_actions/propertyaction.js';
import {ImagesSliderDemo} from './components/HeroSection'
import FilterData from "./components/FilterData";
import { useEffect, useState } from "react";
// import Newfilyer from './components'
let data = [
  {
      "_id": "6622e8c1bf82c072eb2725e2",
      "title": "Luxurious Beachfront Villa",
      "description": "Stunning villa located right on the beach, offering breathtaking ocean views.",
      "location": "Goa, India",
      "price": 500,
      "bedrooms": 4,
      "amenities": [
          "Infinity Pool",
          "Private Beach Access",
          "Jacuzzi",
          "WiFi",
          "Air Conditioning"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/ae4ee7ea-e0b7-4a28-9ced-e0e54e8e8f77.jpg?im_w=720",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e2",
      "title": "Luxurious Beachfront Villa",
      "description": "Stunning villa located right on the beach, offering breathtaking ocean views.",
      "location": "Goa, India",
      "price": 500,
      "bedrooms": 4,
      "amenities": [
          "Infinity Pool",
          "Private Beach Access",
          "Jacuzzi",
          "WiFi",
          "Air Conditioning"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/ae4ee7ea-e0b7-4a28-9ced-e0e54e8e8f77.jpg?im_w=720",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e3",
      "title": "Cozy Cottage in the Hills",
      "description": "Charming cottage nestled amidst lush greenery, perfect for nature lovers.",
      "location": "Shimla, India",
      "price": 150,
      "bedrooms": 2,
      "amenities": [
          "Fireplace",
          "Garden",
          "BBQ Area",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/miso/Hosting-50296444/original/c693610c-9fcb-4f59-8bea-345d619930e9.jpeg?im_w=720",
          "https://example.com/image6.jpg",
          "https://example.com/image7.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e4",
      "title": "Modern Apartment in Mumbai",
      "description": "Sleek and contemporary apartment located in the heart of Mumbai's bustling city center.",
      "location": "Mumbai, India",
      "price": 300,
      "bedrooms": 3,
      "amenities": [
          "Gym",
          "Sauna",
          "Security",
          "Parking"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/2cc58022-2004-4034-a281-22fb622e7461.jpg?im_w=1200",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e5",
      "title": "Rustic Farmhouse Retreat",
      "description": "Quaint farmhouse surrounded by fields and orchards, offering a peaceful escape from city life.",
      "location": "Pune, India",
      "price": 250,
      "bedrooms": 3,
      "amenities": [
          "Swimming Pool",
          "Farm-to-Table Dining",
          "Outdoor Activities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/8e0a77fa-5823-4b34-af2f-0e5f5fd7a418.jpg?im_w=1200",
          "https://example.com/image10.jpg",
          "https://example.com/image11.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e6",
      "title": "Secluded Mountain Chalet",
      "description": "Idyllic chalet nestled high in the mountains, providing breathtaking views and ultimate privacy.",
      "location": "Manali, India",
      "price": 400,
      "bedrooms": 3,
      "amenities": [
          "Hot Tub",
          "Ski-in/Ski-out Access",
          "Fire Pit",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/32f5d288-60f2-4bfc-9b24-01e3bc22b30b.jpg?im_w=1200",
          "https://example.com/image12.jpg",
          "https://example.com/image13.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e7",
      "title": "Historic Haveli in Jaipur",
      "description": "Exquisite heritage haveli in the heart of Jaipur, offering a glimpse into Rajasthan's rich history.",
      "location": "Jaipur, India",
      "price": 350,
      "bedrooms": 5,
      "amenities": [
          "Courtyard",
          "Library",
          "Traditional Cuisine",
          "Concierge"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/0ba1ad00-1c88-46c6-9c3c-6a010870b0ae.jpg?im_w=1200",
          "https://example.com/image14.jpg",
          "https://example.com/image15.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e8",
      "title": "Sunny Villa in Bangalore",
      "description": "Bright and spacious villa with a lush garden, ideal for family vacations or gatherings.",
      "location": "Bangalore, India",
      "price": 280,
      "bedrooms": 4,
      "amenities": [
          "Pool Table",
          "Home Theater",
          "Outdoor Dining",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5186ebc4-90e1-41f8-ba7c-8ed3077df055.jpg?im_w=1200",
          "https://example.com/image16.jpg",
          "https://example.com/image17.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e8",
      "title": "Sunny Villa in Bangalore",
      "description": "Bright and spacious villa with a lush garden, ideal for family vacations or gatherings.",
      "location": "Bangalore, India",
      "price": 280,
      "bedrooms": 4,
      "amenities": [
          "Pool Table",
          "Home Theater",
          "Outdoor Dining",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5186ebc4-90e1-41f8-ba7c-8ed3077df055.jpg?im_w=1200",
          "https://example.com/image16.jpg",
          "https://example.com/image17.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e8",
      "title": "Sunny Villa in Bangalore",
      "description": "Bright and spacious villa with a lush garden, ideal for family vacations or gatherings.",
      "location": "Bangalore, India",
      "price": 280,
      "bedrooms": 4,
      "amenities": [
          "Pool Table",
          "Home Theater",
          "Outdoor Dining",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5186ebc4-90e1-41f8-ba7c-8ed3077df055.jpg?im_w=1200",
          "https://example.com/image16.jpg",
          "https://example.com/image17.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e8",
      "title": "Sunny Villa in Bangalore",
      "description": "Bright and spacious villa with a lush garden, ideal for family vacations or gatherings.",
      "location": "Bangalore, India",
      "price": 280,
      "bedrooms": 4,
      "amenities": [
          "Pool Table",
          "Home Theater",
          "Outdoor Dining",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5186ebc4-90e1-41f8-ba7c-8ed3077df055.jpg?im_w=1200",
          "https://example.com/image16.jpg",
          "https://example.com/image17.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725e9",
      "title": "Elegant Penthouse in Delhi",
      "description": "Luxurious penthouse apartment with panoramic views of the city skyline, perfect for urban living.",
      "location": "Delhi, India",
      "price": 600,
      "bedrooms": 3,
      "amenities": [
          "Private Terrace",
          "Fitness Center",
          "Concierge Service",
          "Parking"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/4e42426d-6723-4c30-b2b2-6dbb10a05d20.jpg?im_w=1200",
          "https://example.com/image18.jpg",
          "https://example.com/image19.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725ea",
      "title": "Tranquil Riverside Bungalow",
      "description": "Serene bungalow overlooking a peaceful river, surrounded by lush vegetation and wildlife.",
      "location": "Rishikesh, India",
      "price": 180,
      "bedrooms": 2,
      "amenities": [
          "River Access",
          "Hiking Trails",
          "Bird Watching",
          "WiFi"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5a9ad66a-944a-4d1e-bf29-bae593a206a9.jpg?im_w=1200",
          "https://example.com/image20.jpg",
          "https://example.com/image21.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725eb",
      "title": "Chic Studio Apartment in Chennai",
      "description": "Stylish studio apartment in a vibrant neighborhood, perfect for solo travelers or couples.",
      "location": "Chennai, India",
      "price": 120,
      "bedrooms": 1,
      "amenities": [
          "Balcony",
          "Fitness Room",
          "Laundry Facilities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5f8c319d-7640-4a90-8e67-4fe45dfda92d.jpg?im_w=1200",
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725eb",
      "title": "Chic Studio Apartment in Chennai",
      "description": "Stylish studio apartment in a vibrant neighborhood, perfect for solo travelers or couples.",
      "location": "Chennai, India",
      "price": 120,
      "bedrooms": 1,
      "amenities": [
          "Balcony",
          "Fitness Room",
          "Laundry Facilities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5f8c319d-7640-4a90-8e67-4fe45dfda92d.jpg?im_w=1200",
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725eb",
      "title": "Chic Studio Apartment in Chennai",
      "description": "Stylish studio apartment in a vibrant neighborhood, perfect for solo travelers or couples.",
      "location": "Chennai, India",
      "price": 120,
      "bedrooms": 1,
      "amenities": [
          "Balcony",
          "Fitness Room",
          "Laundry Facilities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5f8c319d-7640-4a90-8e67-4fe45dfda92d.jpg?im_w=1200",
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725eb",
      "title": "Chic Studio Apartment in Chennai",
      "description": "Stylish studio apartment in a vibrant neighborhood, perfect for solo travelers or couples.",
      "location": "Chennai, India",
      "price": 120,
      "bedrooms": 1,
      "amenities": [
          "Balcony",
          "Fitness Room",
          "Laundry Facilities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5f8c319d-7640-4a90-8e67-4fe45dfda92d.jpg?im_w=1200",
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg"
      ]
  },
  {
      "_id": "6622e8c1bf82c072eb2725eb",
      "title": "Chic Studio Apartment in Chennai",
      "description": "Stylish studio apartment in a vibrant neighborhood, perfect for solo travelers or couples.",
      "location": "Chennai, India",
      "price": 120,
      "bedrooms": 1,
      "amenities": [
          "Balcony",
          "Fitness Room",
          "Laundry Facilities"
      ],
      "images": [
          "https://a0.muscache.com/im/pictures/5f8c319d-7640-4a90-8e67-4fe45dfda92d.jpg?im_w=1200",
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg"
      ]
  },
]
export default  function Home() {
  const [filterdata,setfilterdata] = useState([])
  const [list,setList] = useState([])

  const getProperty =async ()=>{
  const response = await fetch('/api/PropertyListings')
  const data = await response.json()
  setfilterdata(data?.data?.data)
  setList(data?.data?.data)
  console.log(data?.data?.data) 
  }


useEffect(()=>{
  getProperty()
},[])
  return (
<>

<ImagesSliderDemo/>
<FilterData properties={list} setfilterdata={setfilterdata} />
{/* {properties.map((e)=>{
  return (
    <h1>{e.title}</h1>  
  )

})} */}
 {/* <HoverEffect items={datafil} /> */}
<CardHoverEffect properties={filterdata} />
</>

  );
}
