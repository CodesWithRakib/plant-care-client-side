const Features = () => {
  const features = [
    {
      id: 1,
      title: "Smart Watering Reminders",
      description:
        "Never forget to water your plants. Get automatic alerts based on plant type and care history.",
      icon: "💧",
    },
    {
      id: 2,
      title: "Plant Health Tracking",
      description:
        "Monitor plant growth, track diseases, and maintain a care journal.",
      icon: "🌿",
    },
    {
      id: 3,
      title: "Beginner-Friendly Guidance",
      description:
        "Step-by-step tips for new plant parents to grow confidently.",
      icon: "🌱",
    },
    {
      id: 4,
      title: "Personalized Care Tips",
      description:
        "AI-powered suggestions tailored to your environment and care style.",
      icon: "🤖",
    },
    {
      id: 5,
      title: "Huge Plant Database",
      description:
        "Access detailed info, images, and care guides for hundreds of plants.",
      icon: "📚",
    },
    {
      id: 6,
      title: "Customer Reviews & Ratings",
      description:
        "Read real user experiences to help you choose the right plant.",
      icon: "⭐",
    },
    {
      id: 7,
      title: "Dark Mode Available",
      description:
        "Use the app comfortably at night with soothing dark themes.",
      icon: "🌙",
    },
    {
      id: 8,
      title: "Multi-Device Sync",
      description: "Sync your plant data across all devices seamlessly.",
      icon: "🔄",
    },
  ];

  return (
    <section className="py-16 px-4 bg-green-50 dark:bg-zinc-800 ">
      <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-10">
        🌟 Amazing Features
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow text-center"
          >
            <div className="text-4xl mb-4">{feature?.icon}</div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-500">
              {feature?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {feature?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
