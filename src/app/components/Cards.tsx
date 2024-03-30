"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote: "Driving a Mercedes-Benz is not just a journey; it's a symphony of elegance, performance, and innovation.",
      name: "John Doe",
      title: "Mercedes Enthusiast"
    },
    {
      quote: "Mercedes-Benz: Where luxury meets performance, turning every drive into an unforgettable experience.",
      name: "Emma Thompson",
      title: "Automotive Connoisseur"
    },
    {
      quote: "Driving a Mercedes-Benz is like conducting a symphony of power and elegance on the open road.",
      name: "Michael Rodriguez",
      title: "Lifestyle Influencer"
    },
    {
      quote: "Innovation, precision, and style — Mercedes-Benz defines the art of automotive craftsmanship.",
      name: "Sophia Lee",
      title: "Tech Enthusiast"
    },
    {
      quote: "As a Mercedes-Benz owner, I revel in the seamless fusion of luxury and cutting-edge technology.",
      name: "David Harris",
      title: "Proud Mercedes Owner"
    },
    
   
  ];


function Cards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
        <h2  className="text-3xl text-center font-bold mb-8 z-10 ">Customer Experiences </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
     
      </div>
      </div>
    
    </div>
  )
}

export default Cards
