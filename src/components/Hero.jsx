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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></div>
    ),
  };

  return (
    <section className="relative overflow-hidden">
      <Slider {...settings} className="hero-carousel">
        {banners.map((banner) => (
          <HeroSlider key={banner.id} banner={banner} />
        ))}
      </Slider>

      {/* Custom navigation arrows */}
      <style jsx global>{`
        .hero-carousel .slick-dots li.slick-active div {
          background: #4ade80;
          width: 1.5rem;
          border-radius: 0.75rem;
        }
        .hero-carousel .slick-dots li div {
          width: 0.75rem;
          height: 0.75rem;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;
