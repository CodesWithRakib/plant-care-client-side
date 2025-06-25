import React from "react";
import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const CustomerReviews = () => {
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
        "Thanks to this app, I’ve actually kept my plants alive for more than 3 months!",
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white dark:bg-zinc-800/50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Happy Plant Parents
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful plant caregivers worldwide
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {customerReviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-zinc-700 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-500 dark:border-green-600"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <IoLocationOutline className="mr-1" />
                        {review.location}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 left-0 text-green-100 dark:text-green-900/30 text-3xl" />
                <p className="text-gray-700 dark:text-gray-300 pl-8 relative z-10">
                  {review.review}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {review.rating}/5 rating
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
