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
    },
    {
      id: 2,
      title: "Plant Health Tracking",
      description:
        "Monitor plant growth, track diseases, and maintain a care journal.",
      icon: "🌿",
      color: "bg-green-100 dark:bg-green-900/30",
    },
    {
      id: 3,
      title: "Beginner-Friendly Guidance",
      description:
        "Step-by-step tips for new plant parents to grow confidently.",
      icon: "🌱",
      color: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      id: 4,
      title: "Personalized Care Tips",
      description:
        "AI-powered suggestions tailored to your environment and care style.",
      icon: "🤖",
      color: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      id: 5,
      title: "Huge Plant Database",
      description:
        "Access detailed info, images, and care guides for hundreds of plants.",
      icon: "📚",
      color: "bg-red-100 dark:bg-red-900/30",
    },
    {
      id: 6,
      title: "Community Wisdom",
      description:
        "Read real user experiences to help you choose the right plant.",
      icon: "⭐",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      id: 7,
      title: "Dark Mode Available",
      description:
        "Use the app comfortably at night with soothing dark themes.",
      icon: "🌙",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
    },
    {
      id: 8,
      title: "Multi-Device Sync",
      description: "Sync your plant data across all devices seamlessly.",
      icon: "🔄",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-green-50 dark:bg-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cultivate with Confidence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to grow happy, healthy plants at your fingertips
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div
                className={`h-full p-6 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 group-hover:shadow-lg transition-all duration-300 ${feature.color}`}
              >
                <div className="text-4xl mb-5 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
