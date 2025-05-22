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
    },
    {
      id: 5,
      title: "Winter Care",
      subHeading: "Beat the cold",
      heading: "Winter-Proof Your Plants",
      description: "How to protect your greens from frost and low humidity.",
      image: "https://i.ibb.co/jkSvdJ3x/hero-1.jpg",
      link: "/winter-care",
      category: "seasonal",
    },
    {
      id: 6,
      title: "Air Purifiers",
      subHeading: "Breathe easy",
      heading: "Top Air-Cleaning Houseplants",
      description:
        "NASA-approved plants that filter toxins and boost your home’s air quality.",
      image: "https://i.ibb.co/4RLJs821/hero-2.jpg",
      link: "/air-purifying-plants",
      category: "health",
    },
    {
      id: 7,
      title: "Rare Finds",
      subHeading: "For the plant collector",
      heading: "Exotic Plants Worth the Hype",
      description: "Unique and rare varieties to elevate your plant game.",
      image: "https://i.ibb.co/d0gZJzTY/hero-3.jpg",
      link: "/rare-plants",
      category: "exotic",
    },
    {
      id: 8,
      title: "Vertical Gardens",
      subHeading: "Small space? No problem!",
      heading: "Grow Up, Not Out",
      description:
        "Transform walls into lush green spaces with these vertical gardening ideas.",
      image: "https://i.ibb.co/XxzmKV3f/hero-4.jpg",
      link: "/vertical-gardens",
      category: "design",
    },
    {
      id: 9,
      title: "Herb Haven",
      subHeading: "Fresh flavors at your fingertips",
      heading: "Grow Your Kitchen Garden",
      description:
        "The easiest herbs to grow indoors for year-round freshness.",
      image: "https://i.ibb.co/jkSvdJ3x/hero-1.jpg",
      link: "/herb-garden",
      category: "edible",
    },
    {
      id: 10,
      title: "Blooming Bliss",
      subHeading: "Color all year round",
      heading: "Flowering Houseplants 101",
      description:
        "Brighten your home with plants that bloom indoors effortlessly.",
      image: "https://i.ibb.co/nMc8LcLc/hero-6.jpg",
      link: "/flowering-plants",
      category: "flowers",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {banners.map((banner) => (
          <HeroSlider key={banner.id} banner={banner}></HeroSlider>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
