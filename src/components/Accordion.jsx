import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How often should I water my plants?",
      answer:
        "Watering frequency depends on the plant type, size, and environment. Most houseplants prefer being watered when the top 1-2 inches of soil are dry. Succulents need less frequent watering (every 2-3 weeks), while tropical plants may need water weekly.",
      icon: "💧",
    },
    {
      question: "How can I tell if my plant needs more sunlight?",
      answer:
        "Signs your plant needs more light include: yellowing leaves, leggy growth (long stems with sparse leaves), leaning toward light sources, and slower than normal growth. Most houseplants thrive in bright, indirect light near east or west-facing windows.",
      icon: "☀️",
    },
    {
      question: "What kind of soil is best for houseplants?",
      answer:
        "A well-draining potting mix is essential. For most houseplants, look for mixes containing peat moss, perlite, and vermiculite. Special blends exist for specific needs: cactus/succulent mix (grittier), orchid mix (chunky bark), and African violet mix (lighter and fluffier).",
      icon: "🌱",
    },
    {
      question: "Why are my plant's leaves turning brown?",
      answer:
        "Brown leaves can indicate several issues: crispy tips (underwatering/low humidity), soft brown spots (overwatering), edges turning brown (fluoride in water/fertilizer burn), or uniform browning (too much direct sun). Identify the pattern to diagnose the problem.",
      icon: "🍂",
    },
    {
      question: "How do I know if I'm overwatering?",
      answer:
        "Overwatering signs include: constantly wet soil, yellowing lower leaves, soft/mushy stems, and fungus gnats. Always check soil moisture before watering - the top 1-2 inches should be dry. Ensure pots have drainage holes and empty saucers after watering.",
      icon: "⚠️",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-green-50 dark:bg-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Plant Care FAQs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Answers to common questions about keeping your plants thriving
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex items-center justify-between p-5 text-left rounded-lg transition-all ${
                  activeIndex === index
                    ? "bg-green-600 text-white dark:bg-green-700"
                    : "bg-white dark:bg-zinc-900 hover:bg-green-50 dark:hover:bg-zinc-700/50"
                }`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl">{faq.icon}</span>
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <RiArrowUpSFill className="text-xl" />
                ) : (
                  <RiArrowDownSFill className="text-xl" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-zinc-900/80 rounded-b-lg overflow-hidden"
                  >
                    <div className="p-5 pt-2 text-gray-700 dark:text-gray-300">
                      <div className="pl-12 border-l-2 border-green-500 dark:border-green-600">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
