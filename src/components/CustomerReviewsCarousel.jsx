import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const customerReviews = [
  {
    id: 1,
    name: "Arif Hasan",
    review:
      "This app made plant care so easy! I never forget watering schedules anymore.",
    rating: 5,
    location: "Dhaka, Bangladesh",
    date: "2025-04-10",
    avatarUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mehjabin Alam",
    review:
      "I love the reminders and the interface is so calming. Perfect for plant lovers.",
    rating: 4,
    location: "Chittagong, Bangladesh",
    date: "2025-04-12",
    avatarUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Ryan Lee",
    review:
      "Green Nest has completely changed how I care for my indoor garden. Highly recommend!",
    rating: 5,
    location: "San Francisco, USA",
    date: "2025-04-14",
    avatarUrl: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Ananya Das",
    review:
      "So helpful and easy to use! Even as a beginner I feel confident caring for my plants.",
    rating: 4,
    location: "Kolkata, India",
    date: "2025-04-15",
    avatarUrl: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Liam Carter",
    review:
      "Great app with a clean UI. I love the calendar view for watering reminders.",
    rating: 5,
    location: "London, UK",
    date: "2025-04-18",
    avatarUrl: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: 6,
    name: "Fatema Nahar",
    review:
      "Thanks to this app, I've actually kept my plants alive for more than 3 months!",
    rating: 5,
    location: "Sylhet, Bangladesh",
    date: "2025-04-20",
    avatarUrl: "https://i.pravatar.cc/100?img=6",
  },
  {
    id: 7,
    name: "Carlos Jimenez",
    review:
      "Super helpful for tracking sunlight needs. My balcony garden is thriving!",
    rating: 4,
    location: "Barcelona, Spain",
    date: "2025-04-22",
    avatarUrl: "https://i.pravatar.cc/100?img=7",
  },
  {
    id: 8,
    name: "Sadia Rahman",
    review:
      "I never thought plant care could be this organized. Thank you Green Nest!",
    rating: 5,
    location: "Rajshahi, Bangladesh",
    date: "2025-04-25",
    avatarUrl: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: 9,
    name: "Emily Chen",
    review:
      "Love the simplicity and how I can track multiple plants in one place.",
    rating: 4,
    location: "Singapore",
    date: "2025-04-28",
    avatarUrl: "https://i.pravatar.cc/100?img=9",
  },
  {
    id: 10,
    name: "Abir Hossain",
    review:
      "Green Nest is a game-changer for my plant collection. Highly recommended!",
    rating: 5,
    location: "Khulna, Bangladesh",
    date: "2025-04-30",
    avatarUrl: "https://i.pravatar.cc/100?img=10",
  },
];

// Custom arrow components with improved styling
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden sm:flex items-center justify-center`}
      style={{
        ...style,
        left: "-40px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
      onClick={onClick}
      aria-label="Previous review"
    >
      <FaChevronLeft className="text-green-600 dark:text-green-400 text-xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden sm:flex items-center justify-center`}
      style={{
        ...style,
        right: "-40px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
      onClick={onClick}
      aria-label="Next review"
    >
      <FaChevronRight className="text-green-600 dark:text-green-400 text-xl" />
    </div>
  );
};

// Enhanced StarRating component with better spacing
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const CustomerReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: false,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-300 hover:bg-green-500 dark:hover:bg-green-400"
        aria-label={`Go to review ${i + 1}`}
      />
    ),
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-green-300 mb-3">
          Happy Plant Parents
        </h2>
        <p className="text-lg text-gray-600 dark:text-green-200 max-w-2xl mx-auto">
          See what our community is saying about their plant care journey
        </p>
      </div>

      <div className="relative px-4 sm:px-0">
        <Slider
          {...settings}
          aria-label="Customer reviews carousel"
          className="overflow-hidden"
        >
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="px-2 sm:px-3 py-1 sm:py-2 focus:outline-none"
            >
              <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-green-700 p-4 sm:p-6 flex flex-col h-full w-full mx-auto min-h-[300px] sm:min-h-[340px] transform hover:-translate-y-1">
                {/* Card content */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-500 dark:border-green-600 shadow-sm flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-green-200 truncate text-sm sm:text-base">
                          {review.name}
                        </h4>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-green-400 mt-0 sm:mt-1">
                          <IoLocationOutline className="mr-1 text-sm sm:text-base" />
                          <span className="truncate">{review.location}</span>
                        </div>
                      </div>
                      <time
                        dateTime={review.date}
                        className="text-xs text-gray-400 dark:text-green-500 whitespace-nowrap"
                      >
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </div>

                <div className="relative mb-4 sm:mb-6 flex-grow">
                  <FaQuoteLeft className="absolute -top-1 sm:-top-2 left-0 text-green-100 dark:text-green-900/50 text-3xl sm:text-4xl pointer-events-none select-none" />
                  <p className="text-gray-700 dark:text-green-200 pl-7 sm:pl-9 relative z-10 leading-relaxed text-xs sm:text-sm break-words">
                    {review.review}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-500 dark:text-green-400 select-none">
                    {review.rating}/5 rating
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviewsCarousel;
