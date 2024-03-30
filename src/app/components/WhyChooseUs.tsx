"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Intelligent Drive",
    description: "Experience the future of driving with advanced safety and assistance systems for a smarter and safer journey."
  },
  {
    title: "COMAND Infotainment System",
    description: "Stay connected and entertained with the cutting-edge COMAND system, providing intuitive control and seamless integration."
  },
  {
    title: "AIR BODY CONTROL Suspension",
    description: "Enjoy a smooth and dynamic ride with the adaptive AIR BODY CONTROL suspension, adjusting to road conditions for optimal comfort."
  },
  {
    title: "MBUX Multimedia System",
    description: "Engage with the revolutionary MBUX system, offering a personalized and intuitive interface that responds to your voice and touch."
  },
  {
    title: "Active Parking Assist",
    description: "Effortlessly park in tight spaces with precision using the Active Parking Assist feature, making parking stress-free and efficient."
  },
  {
    title: "Panoramic Sunroof",
    description: "Bask in natural light and open up your driving experience with the panoramic sunroof, adding a touch of luxury and spaciousness."
  }

   
  
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs