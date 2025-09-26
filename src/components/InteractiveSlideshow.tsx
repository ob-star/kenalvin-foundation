import React, { useState } from "react";

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    image: "https://images.pexels.com/photos/3825587/pexels-photo-3825587.jpeg",
    title: "Education & Awareness",
    description:
      "Spreading knowledge about sickle cell disease in communities worldwide",
  },
  {
    id: 1,
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
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
  const [activeIndex, setActiveIndex] = useState(0);

  // next & prev handlers
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // slice out 3 visible slides
  const visibleSlides = [
    slides[activeIndex],
    slides[(activeIndex + 1) % slides.length],
    slides[(activeIndex + 2) % slides.length],
  ];

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

        {/* Slideshow */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-8 z-20 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
          >
            ◀
          </button>
          

          <div className="flex w-full overflow-hidden gap-4 justify-center">
            {visibleSlides.map((slide) => (
              <div
                key={slide.id}
                className="relative w-[90%] sm:w-[70%] md:w-1/3 h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500"
              >
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
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-8 z-20 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
          >
            ▶
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveSlideshow;
