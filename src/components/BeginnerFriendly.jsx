import React, { useState } from "react";
import { motion } from "motion/react";
import {
  GiWateringCan,
  GiSunflower,
  GiPlantRoots,
  GiDogBowl,
} from "react-icons/gi";
import {
  FaLeaf,
  FaRegSnowflake,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const BeginnerFriendly = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const beginnerPlants = [
    {
      id: 1,
      name: "Snake Plant",
      nickname: "Mother-in-Law's Tongue",
      scientificName: "Sansevieria trifasciata",
      description:
        "Nearly indestructible with tall, stiff leaves that purify air. Thrives on neglect!",
      careTips: {
        watering: "Every 2-3 weeks (let soil dry completely)",
        light: "Low to bright indirect light",
        humidity: "Any (even dry air)",
        commonMistake: "Overwatering - causes root rot",
      },
      specialFeatures: [
        "Removes toxins from air",
        "Grows in almost any light",
        "Drought-tolerant",
      ],
      growthRate: "Slow",
      petWarning: "Toxic to cats and dogs",
      image: "https://i.ibb.co/d0gZJzTY/hero-3.jpg",
      difficulty: "Very Easy",
    },
    {
      id: 2,
      name: "ZZ Plant",
      nickname: "Zanzibar Gem",
      scientificName: "Zamioculcas zamiifolia",
      description:
        "Glossy dark green leaves that shine. Perfect for forgetful waterers.",
      careTips: {
        watering: "Every 3-4 weeks (thrives on neglect)",
        light: "Low to bright indirect",
        humidity: "Low",
        commonMistake: "Overwatering - stores water in rhizomes",
      },
      specialFeatures: [
        "Survives fluorescent lighting",
        "Drought-resistant",
        "Pest-resistant",
      ],
      growthRate: "Slow",
      petWarning: "Toxic if ingested",
      image: "https://i.ibb.co/Y4pvZKgC/hero-9.jpg",
      difficulty: "Very Easy",
    },
    {
      id: 3,
      name: "Pothos",
      nickname: "Devil's Ivy",
      scientificName: "Epipremnum aureum",
      description:
        "Fast-growing vine with heart-shaped leaves. Impossible to kill!",
      careTips: {
        watering: "When top inch of soil is dry",
        light: "Low to bright indirect",
        humidity: "Adaptable",
        commonMistake: "Direct sun scorches leaves",
      },
      specialFeatures: [
        "Grows in water or soil",
        "Trailing or climbing habit",
        "Easy to propagate",
      ],
      growthRate: "Fast",
      petWarning: "Toxic to pets",
      image: "https://i.ibb.co/zhB4Cmjc/hero-7.jpg",
      difficulty: "Very Easy",
    },
    {
      id: 4,
      name: "Spider Plant",
      nickname: "Airplane Plant",
      scientificName: "Chlorophytum comosum",
      description:
        "Produces baby plantlets on long stems. Great for hanging baskets.",
      careTips: {
        watering: "Weekly in summer, less in winter",
        light: "Bright indirect",
        humidity: "Average",
        commonMistake: "Fluoride in water causes brown tips",
      },
      specialFeatures: [
        "Non-toxic to pets",
        "Purifies air",
        "Easy to propagate",
      ],
      growthRate: "Moderate",
      petWarning: "Pet-safe",
      image: "https://i.ibb.co/nMc8LcLc/hero-6.jpg",
      difficulty: "Easy",
    },
    {
      id: 5,
      name: "Cast Iron Plant",
      nickname: "Aspidistra",
      scientificName: "Aspidistra elatior",
      description: "Dark green leathery leaves that survive extreme neglect.",
      careTips: {
        watering: "Every 2-3 weeks",
        light: "Low to shade",
        humidity: "Any",
        commonMistake: "Too much light bleaches leaves",
      },
      specialFeatures: [
        "Survives poor light and drafts",
        "Victorian-era favorite",
        "Drought-tolerant",
      ],
      growthRate: "Slow",
      petWarning: "Non-toxic",
      image: "https://i.ibb.co/0jzw1kYZ/hero-10.jpg",
      difficulty: "Very Easy",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const CareTip = ({ icon, title, value, compact = false }) => (
    <div className={`flex items-start ${compact ? "gap-2" : "gap-3"}`}>
      <div className={`${compact ? "text-sm mt-0.5" : "text-base"}`}>
        {icon}
      </div>
      <div>
        <p
          className={`font-medium ${
            compact ? "text-xs" : "text-sm"
          } text-gray-700 dark:text-gray-300`}
        >
          {title}
        </p>
        <p
          className={`${
            compact ? "text-xs" : "text-sm"
          } text-gray-500 dark:text-gray-400`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-green-50 dark:bg-zinc-900/70 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Perfect Starter Plants
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            These resilient plants forgive mistakes and thrive with minimal care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beginnerPlants.map((plant) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className={`bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 flex flex-col h-full ${
                expandedCard === plant.id ? "ring-2 ring-green-500" : ""
              }`}
            >
              {/* Image and Header */}
              <div className="relative h-48">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{plant.name}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-xs text-green-200 italic">
                      {plant.scientificName}
                    </p>
                    <span className="text-xs bg-green-600/80 text-white px-2 py-1 rounded">
                      {plant.difficulty}
                    </span>
                  </div>
                </div>
                {plant.nickname && (
                  <span className="absolute top-3 right-3 bg-green-600/90 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {plant.nickname}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {plant.description}
                  </p>

                  <div className="space-y-2.5 mb-4">
                    <CareTip
                      icon={<GiSunflower className="text-yellow-500" />}
                      title="Light"
                      value={plant.careTips.light}
                      compact
                    />
                    <CareTip
                      icon={<GiWateringCan className="text-blue-500" />}
                      title="Water"
                      value={plant.careTips.watering}
                      compact
                    />
                    <CareTip
                      icon={
                        <GiDogBowl
                          className={
                            plant.petWarning === "Pet-safe"
                              ? "text-green-500"
                              : "text-red-400"
                          }
                        />
                      }
                      title="Pet Safety"
                      value={plant.petWarning}
                      compact
                    />
                  </div>

                  {/* Expandable Section */}
                  {expandedCard === plant.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 dark:border-zinc-700 pt-3 space-y-3">
                        <div>
                          <h4 className="font-medium text-sm text-green-600 dark:text-green-400 mb-1 flex items-center gap-1.5">
                            <FaLeaf className="text-xs" /> Special Features
                          </h4>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-gray-600 dark:text-gray-400">
                            {plant.specialFeatures.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm text-green-600 dark:text-green-400 mb-1 flex items-center gap-1.5">
                            <GiPlantRoots className="text-xs" /> Pro Tip
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {plant.careTips.commonMistake}
                          </p>
                        </div>

                        <CareTip
                          icon={<FaRegSnowflake className="text-cyan-400" />}
                          title="Humidity"
                          value={plant.careTips.humidity}
                          compact
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpand(plant.id)}
                  aria-expanded={expandedCard === plant.id}
                  className="mt-4 w-full py-2 text-xs font-medium text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-zinc-700/50 rounded-md border border-green-200 dark:border-green-700 transition-colors flex items-center justify-center gap-1"
                >
                  {expandedCard === plant.id ? (
                    <>
                      <FaChevronUp className="text-xs" /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown className="text-xs" /> Show More
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriendly;
