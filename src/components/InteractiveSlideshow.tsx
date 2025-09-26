"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    image: "/image/home1.webp",
    title: "Education & Awareness",
    description:
      "Spreading knowledge about sickle cell disease in communities worldwide",
  },
  {
    id: 1,
    image: "/image/medical.jpeg",
    title: "Medical Support",
    description:
      "Connecting families with advanced treatment options and medical care",
  },
  {
    id: 2,
    image: "/image/c4.jpeg",
    title: "Community Impact",
    description:
      "Building stronger communities through support and understanding",
  },
  {
    id: 3,
    image: "/image/soupkitchen.webp",
    title: "Food Donation",
    description: "Feeding hope and supporting communities in need",
  },
  {
    id: 4,
    image: "/image/Volunteers.webp",
    title: "Volunteering",
    description: "Inspiring lives through service and collective action",
  },
  {
    id: 5,
    image: "/image/c3.jpeg",
    title: "Youth Engagement",
    description: "Empowering young people to be change-makers",
  },
];

const InteractiveSlideshow: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in the lives of those
            affected by sickle cell disease
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-sm opacity-90">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InteractiveSlideshow;
