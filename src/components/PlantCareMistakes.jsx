import React from "react";
import { motion } from "motion/react";
import {
  GiWaterDrop,
  GiSun,
  GiPlantWatering,
  GiSpiderWeb,
} from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { FaCut } from "react-icons/fa";

const PlantCareMistakes = () => {
  const plantMistakes = [
    {
      title: "Overwatering",
      description:
        "The #1 killer of houseplants. Roots need oxygen - soggy soil suffocates them and leads to root rot. Always check soil moisture 2 inches deep before watering.",
      icon: (
        <GiWaterDrop className="text-blue-600 dark:text-blue-400 text-3xl" />
      ),
      color: "border-blue-500",
      solution:
        "Water only when top 2 inches of soil are dry. Use pots with drainage holes.",
    },
    {
      title: "Wrong Lighting",
      description:
        "Plants have specific light needs. Low-light plants bleach in direct sun, while sun-lovers stretch and weaken in dark corners.",
      icon: <GiSun className="text-yellow-500 dark:text-yellow-400 text-3xl" />,
      color: "border-yellow-500",
      solution: "Research your plant's needs. Use light meters for precision.",
    },
    {
      title: "Ignoring Humidity",
      description:
        "Tropical plants suffer in dry air, leading to brown leaf tips and dropped leaves. Winter heating exacerbates this issue.",
      icon: <MdAir className="text-teal-600 dark:text-teal-400 text-3xl" />,
      color: "border-teal-500",
      solution:
        "Group plants together, use pebble trays, or invest in a humidifier.",
    },
    {
      title: "Improper Fertilizing",
      description:
        "Too much burns roots, too little stunts growth. Seasonal changes affect nutrient needs.",
      icon: (
        <GiPlantWatering className="text-green-600 dark:text-green-400 text-3xl" />
      ),
      color: "border-green-500",
      solution:
        "Fertilize monthly in growing season, sparingly in winter. Always dilute.",
    },
    {
      title: "Pest Neglect",
      description:
        "Early infestation signs (sticky residue, webbing, spots) often go unnoticed until severe damage occurs.",
      icon: <GiSpiderWeb className="text-red-600 dark:text-red-400 text-3xl" />,
      color: "border-red-500",
      solution:
        "Inspect leaves weekly. Isolate infected plants. Use neem oil or insecticidal soap.",
    },
    {
      title: "Skipping Pruning",
      description:
        "Unpruned plants become leggy, unbalanced, and direct energy to old growth instead of new.",
      icon: <FaCut className="text-purple-600 dark:text-purple-400 text-3xl" />,
      color: "border-purple-500",
      solution:
        "Prune in spring using clean shears. Remove dead/damaged growth regularly.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-green-50 dark:bg-zinc-900/70">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Common Plant Care Pitfalls
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Avoid these frequent mistakes to keep your plants thriving
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plantMistakes.map((mistake, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              className={`bg-white dark:bg-zinc-800 rounded-xl shadow-sm border-l-8 ${mistake.color} p-6 transition-shadow duration-300 cursor-pointer flex flex-col`}
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                  {mistake.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {mistake.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {mistake.description}
                  </p>
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-md border border-green-200 dark:border-green-700">
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">
                      <span className="font-bold">Solution:</span>{" "}
                      {mistake.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <p className="text-gray-500 dark:text-gray-400 italic">
            Remember: Every plant is unique! Always research specific care
            needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantCareMistakes;
