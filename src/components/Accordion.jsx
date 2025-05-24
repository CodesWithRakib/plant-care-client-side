import React from "react";

const Accordion = () => {
  const faqData = [
    {
      question: "How often should I water my plants?",
      answer:
        "Watering frequency depends on the plant type, size, and environment. Most houseplants prefer being watered once a week, but always check the soil before watering.",
    },
    {
      question: "How can I tell if my plant needs more sunlight?",
      answer:
        "If your plant has yellowing leaves, slow growth, or is leaning toward the light, it likely needs more sunlight. Try moving it closer to a window with indirect light.",
    },
    {
      question: "What kind of soil is best for houseplants?",
      answer:
        "Most houseplants do well in well-draining potting mix. Some specific plants like succulents or orchids need special soil blends.",
    },
    {
      question: "Why are my plant’s leaves turning brown?",
      answer:
        "Brown leaf tips are often caused by underwatering, low humidity, or salt buildup in the soil. Trim dead tips and adjust your care routine.",
    },
    {
      question: "How do I know if I’m overwatering?",
      answer:
        "If the soil is constantly wet and leaves are yellow or dropping, you're probably overwatering. Make sure your pot has drainage holes and allow the soil to dry out between waterings.",
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-3 bg-green-50 dark:bg-zinc-800">
      <div className="text-center dark:text-white mb-5">
        <h1 className="text-2xl font-semibold">Frequently Asked Questions</h1>
      </div>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="collapse collapse-plus bg-white dark:bg-zinc-900 dark:text-white border border-base-300"
        >
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">{faq.question}</div>
          <div className="collapse-content text-sm">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
