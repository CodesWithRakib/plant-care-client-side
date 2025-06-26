import React from "react";
import { motion } from "motion/react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Smart Watering Reminders",
      description:
        "Never forget to water your plants. Get automatic alerts based on plant type and care history.",
      icon: "💧",
      color: "bg-blue-100 dark:bg-blue-900/30",
      borderColor: "border-blue-300 dark:border-blue-700",
      shadowColor: "shadow-blue-300/50",
      hoverShadowColor: "hover:shadow-blue-400/70",
    },
    {
      id: 2,
      title: "Plant Health Tracking",
      description:
        "Monitor plant growth, track diseases, and maintain a care journal.",
      icon: "🌿",
      color: "bg-green-100 dark:bg-green-900/30",
      borderColor: "border-green-300 dark:border-green-700",
      shadowColor: "shadow-green-300/50",
      hoverShadowColor: "hover:shadow-green-400/70",
    },
    {
      id: 3,
      title: "Beginner-Friendly Guidance",
      description:
        "Step-by-step tips for new plant parents to grow confidently.",
      icon: "🌱",
      color: "bg-amber-100 dark:bg-amber-900/30",
      borderColor: "border-amber-300 dark:border-amber-700",
      shadowColor: "shadow-amber-300/50",
      hoverShadowColor: "hover:shadow-amber-400/70",
    },
    {
      id: 4,
      title: "Personalized Care Tips",
      description:
        "AI-powered suggestions tailored to your environment and care style.",
      icon: "🤖",
      color: "bg-purple-100 dark:bg-purple-900/30",
      borderColor: "border-purple-300 dark:border-purple-700",
      shadowColor: "shadow-purple-300/50",
      hoverShadowColor: "hover:shadow-purple-400/70",
    },
    {
      id: 5,
      title: "Huge Plant Database",
      description:
        "Access detailed info, images, and care guides for hundreds of plants.",
      icon: "📚",
      color: "bg-red-100 dark:bg-red-900/30",
      borderColor: "border-red-300 dark:border-red-700",
      shadowColor: "shadow-red-300/50",
      hoverShadowColor: "hover:shadow-red-400/70",
    },
    {
      id: 6,
      title: "Community Wisdom",
      description:
        "Read real user experiences to help you choose the right plant.",
      icon: "⭐",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
      borderColor: "border-yellow-300 dark:border-yellow-700",
      shadowColor: "shadow-yellow-300/50",
      hoverShadowColor: "hover:shadow-yellow-400/70",
    },
    {
      id: 7,
      title: "Dark Mode Available",
      description:
        "Use the app comfortably at night with soothing dark themes.",
      icon: "🌙",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      borderColor: "border-indigo-300 dark:border-indigo-700",
      shadowColor: "shadow-indigo-300/50",
      hoverShadowColor: "hover:shadow-indigo-400/70",
    },
    {
      id: 8,
      title: "Multi-Device Sync",
      description: "Sync your plant data across all devices seamlessly.",
      icon: "🔄",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
      borderColor: "border-cyan-300 dark:border-cyan-700",
      shadowColor: "shadow-cyan-300/50",
      hoverShadowColor: "hover:shadow-cyan-400/70",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-green-50 dark:bg-zinc-900/70">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-400 tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Cultivate with Confidence
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to grow happy, healthy plants at your fingertips
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
        >
          {features.map(
            ({
              id,
              title,
              description,
              icon,
              color,
              borderColor,
              shadowColor,
              hoverShadowColor,
            }) => (
              <motion.div
                key={id}
                variants={item}
                whileHover={{ y: -8 }}
                className={`group rounded-xl border ${borderColor} ${color} shadow-md ${shadowColor} ${hoverShadowColor} transition-shadow duration-300 cursor-pointer flex flex-col p-6 h-full`}
              >
                <div className="text-5xl mb-6 select-none transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
