// Homepage.tsx
"use client";

import { useEffect, useState } from "react";
  import { ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import AboutUs from "./Parts/About";
import FactsSection from "./Parts/Facts";
import ProductRangeSection from "./Parts/Productrange";
import WebsiteNavbar from "../../../components/layout/WebsiteNavbar";
import SustainabilitySection from "./Parts/Sustainability";
import EngineeringAccordionSection from "./Parts/Enginnering";
import TestimonialsSection from "./Parts/Testimonials";
import Blogs from "./Parts/Blogs";
import ProvenFieldSection from "./Parts/Fields";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Parallax,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import { useRef } from "react";



const slides = [
  {
    id: 1,
    image:
      "/home1.jpg",
    title: "Endurance, by design",
    description:
      "Delivering world-class power and telecom cables for critical infrastructure across industries",
    nextText: "Sustainable Impact",
    buttonText: "Explore Products",
    buttonLink: "/products",
  },
  {
    id: 2,
    image:
      "/home2.png",
    title: "Transforming lives by building sustainable world-class infrastructure",
    description:
      "Delivering world-class power and telecom cables for critical infrastructure across industries",
    nextText: "Innovation First",
    buttonText: "Sustainability",
    buttonLink: "/products",
  },
  {
    id: 3,
    image:
      "/home3.jpg",
    title: "Powering a future that holds the world",
    description:
      "Delivering world-class power and telecom cables for critical infrastructure across industries",
    nextText: "Global Excellence",
    buttonText: "Company Impact",
    buttonLink: "/products",
  },
  {
    id: 4,
    image:
      "/home4.jpg",
    title: "Reliability, Redefined",
    description:
      "Delivering world-class power and telecom cables for critical infrastructure across industries",
    nextText: "Reliability, Redefined",
    buttonText: "Watch Full Video",
    buttonLink: "/products",
  },
];



export default function Homepage() {


const swiperRef = useRef(null); 

  const [current, setCurrent] = useState(0);

  // Auto slide
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, [current]);

  // const handleNext = () => {
  //   setCurrent((prev) => (prev + 1) % slides.length);
  // };

  return (
    <>
    <WebsiteNavbar />
    <Swiper
  modules={[
    Parallax,
    Autoplay,
  ]}
  speed={1200}
  parallax={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  loop={true}
   onSwiper={(swiper) =>
    (swiperRef.current = swiper)
  }
  onSlideChange={(swiper) =>
    setCurrent(swiper.realIndex)
  }

  
  className="relative h-screen main-banner w-full overflow-hidden bg-black"
>

  {slides.map((slide, index) => (
    <SwiperSlide key={slide.id}>

    {/* BG IMAGE */}
{/* <div
  className="absolute inset-0"
  data-swiper-parallax="-23%"
> */}

  <div className="absolute inset-0 overflow-hidden" >
  
  <img
    src={slide.image}
    alt={slide.title}
    className="h-full w-full object-cover scale-110"
  />
</div>

{/* DARK OVERLAY */}
<div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

{/* BLUE OVERLAY */}
<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom,_rgba(0,140,255,0.35),_transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-30 flex h-full items-end px-6 max-w-[1320px] mx-auto pb-[13%]">

        <div className="max-w-4xl" data-swiper-parallax="-180">

          <h1
            data-swiper-parallax="-50"
            className="text-[58px] font-extrabold italic leading-tight text-white"
          >
            {slide.title}
          </h1>

          <p
            data-swiper-parallax="-50"
            className="mt-2 max-w-xl text-[18px] leading-8 text-white/80"
          >
            {slide.description}
          </p>

          <div data-swiper-parallax="-50">

            <Link
              to={slide.buttonLink}
              className="border-it mt-6 inline-flex items-center gap-2 bg-white px-5 py-2 text-[20px] font-[500] text-[#1E3C8C]"
            >
              {slide.buttonText}

              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}

  {/* NEXT CARD */}
  <button
    onClick={() =>
      swiperRef.current?.slideNext()
    }
    
    className="absolute bottom-40 right-20 z-40 w-[250px] overflow-hidden rounded-[10px] border border-[#383838] shadow-[0px_4px_17.9px_0px_#00000040] bg-black/40 backdrop-blur-xl transition-all duration-500 hover:bg-black/60"
  >

    <div className="flex">

      {/* IMAGE */}
      <div className="h-[66px] w-[58px] shrink-0 overflow-hidden">

        <img
          src={
            slides[
              (current + 1) %
                slides.length
            ].image
          }
          alt="next"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="ml-3">

        <p className="mb-1 text-left text-[13.5px] lowercase tracking-wide text-white">
          next
        </p>

        <p className="text-[16px] font-medium leading-none text-white/70">
          {
            slides[
              (current + 1) %
                slides.length
            ].nextText
          }
        </p>

        {/* BULLETS */}
        <div className="mt-3 flex items-center gap-2">

          {slides.map((_, index) => {
            const isActive =
              index ===
              (current + 1) %
                slides.length;

            return (
              <div
                key={index}
                className="relative h-[1.6px] flex-1 overflow-hidden rounded-full bg-[#A2A2A2]"
              >

                <div
                  className={`absolute left-0 top-0 h-full bg-[#1E3C8C] ${
                    isActive
                      ? "animate-progress"
                      : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </button>
</Swiper>
    <div className="blur-divider">
      <img
  src="/divider.svg"
  alt=""
  className="max-w-[100%]" 
/>
    </div>  
    <AboutUs/>
          <FactsSection/>
          <EngineeringAccordionSection/>
          <ProvenFieldSection/>
          <ProductRangeSection/>
    <SustainabilitySection/>
    <TestimonialsSection/>
    <Blogs/>
    <Footer/>
    </>
  );
}