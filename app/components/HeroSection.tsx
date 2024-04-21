"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import FilterData from "./FilterData";
export function ImagesSliderDemo() {
  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-730884644046569848/original/23cba0d9-2fcd-4720-a41d-f66092e17a00.jpeg?im_w=1200",
    "/banner.webp",
    "https://a0.muscache.com/im/pictures/23cf8cb5-1937-4e5f-8000-7bf75ffa8f3a.jpg?im_w=720",
  ];
  return (
    <ImagesSlider className="h-[25rem] rounded-[70px] mt-28" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold backdrop-blur-sm p-5 rounded-xl text-xl md:text-6xl text-center bg-clip-text text-white drop-shadow-2xl text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Discover your dream rental  <br /> with Homely Hub
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-xl border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span> <a href="#property">Explore More →</a> </span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
