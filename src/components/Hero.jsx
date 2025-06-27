import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const banners = [
    {
      id: 1,
      title: "Tropical Paradise",
      subHeading: "Bring the jungle home",
      heading: "Create Your Indoor Oasis",
      description:
        "Discover the best tropical plants for vibrant, air-purifying greenery.",
      image: "https://i.ibb.co/zhB4Cmjc/hero-7.jpg",
      link: "/tropical-plants",
      category: "indoor",
      buttonText: "Explore Tropicals",
    },
    {
      id: 2,
      title: "Succulent Love",
      subHeading: "For the forgetful gardener",
      heading: "Thriving Succulents, Zero Effort",
      description:
        "Learn how to care for drought-resistant beauties that thrive on neglect.",
      image: "https://i.ibb.co/nNSfHt0p/hero-8.jpg",
      link: "/succulents",
      category: "succulents",
      buttonText: "Discover Succulents",
    },
    {
      id: 3,
      title: "Bonsai Mastery",
      subHeading: "Patience meets art",
      heading: "Cultivate Serenity with Bonsai",
      description:
        "Essential tips to shape and nurture your miniature tree masterpiece.",
      image: "https://i.ibb.co/Y4pvZKgC/hero-9.jpg",
      link: "/bonsai-guide",
      category: "bonsai",
      buttonText: "Learn Bonsai",
    },
    {
      id: 4,
      title: "Pet-Safe Greens",
      subHeading: "No worries, just wagging tails",
      heading: "Non-Toxic Plants for Pet Owners",
      description:
        "Keep your furry friends safe with these vet-approved plant picks.",
      image: "https://i.ibb.co/0jzw1kYZ/hero-10.jpg",
      link: "/pet-friendly",
      category: "safety",
      buttonText: "Pet-Friendly Picks",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in-out",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-white/40 hover:bg-white transition"></div>
    ),
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden select-none">
      <Slider {...settings} className="h-full">
        {banners.map((banner) => (
          <HeroSlider key={banner.id} banner={banner} />
        ))}
      </Slider>
    </section>
  );
};

// Arrows with smaller width & height (from your first liked version),
// positioned and centered vertically on left/right sides
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Next slide"
      className={`${className} !bg-green-600 !bg-opacity-70 !hover:bg-opacity-90 !p-1.5 !rounded-full !text-white !shadow-lg !transition`}
      style={{
        ...style,
        zIndex: 40,
        right: "1rem",
        top: "50%",
        transform: "translateY(-50%)",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Previous slide"
      className={`${className} !bg-green-600 !bg-opacity-70 !hover:bg-opacity-90 !p-1.5 !rounded-full !text-white !shadow-lg !transition`}
      style={{
        ...style,
        zIndex: 40,
        left: "1rem",
        top: "50%",
        transform: "translateY(-50%)",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default Hero;
