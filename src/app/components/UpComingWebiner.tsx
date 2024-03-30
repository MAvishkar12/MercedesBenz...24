"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


const projects = [
    {
      title: "United States",
    description: "Discover the epitome of automotive luxury at our Mercedes-Benz showroom in the United States. Immerse yourself in a world of sophistication and cutting-edge technology.",
      link: "https://www.mercedes-benz-usa.com/dealer-locator"
    },
    {
      title: "Germany",
      description: "Experience the birthplace of Mercedes-Benz in Germany. Our showroom showcases the iconic brand's heritage, blending German engineering with timeless elegance.",
      link: "https://www.mercedes-benz.de/haendler-suche"
    },
    {
      title: "China",
      description: "Step into opulence at our Mercedes-Benz showroom in China. Discover a fusion of modern luxury and traditional craftsmanship, redefining automotive excellence.",
      link: "https://www.mercedes-benz.com.cn/dealer-locator"
    },
    {
      title: "United Kingdom",
      description: "Unveil the prestige of Mercedes-Benz in the United Kingdom. Our showroom offers a curated selection of vehicles that embody British elegance and German engineering.",
      link: "https://www.mercedes-benz.co.uk/passengercars.html"
    },
    {
      title: "Japan",
      description: "Journey into luxury at our Mercedes-Benz showroom in Japan. Imbued with precision and innovation, our vehicles redefine the art of driving in the Land of the Rising Sun.",
      link: "https://www.mercedes-benz.jp/dealer-locator"
    },
    {
      title: "India",
      description: "Indulge in luxury at our Mercedes-Benz showroom in India. Elevate your driving experience with a harmonious blend of sophistication, technology, and unrivaled performance.",
      link: "https://www.mercedes-benz.co.in/passengercars.html"
    },
   
   
  ];

function UpComingWebiner() {
  return (
    <div className="p-12 bg-grey-900 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">OUR OUTLETS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">We ARE All Over The World</p>
                </div>
                <div className="m-10 mx-10">
                       <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                       </div>
                </div>
               

            </div>
     
    </div>
  )
}

export default UpComingWebiner
