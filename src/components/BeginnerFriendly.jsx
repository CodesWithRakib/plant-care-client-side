const BeginnerFriendly = () => {
  // const beginnerPlants = [
  //   {
  //     id: 1,
  //     name: "Snake Plant",
  //     category: "Succulent",
  //     careLevel: "Easy",
  //     wateringFrequency: "Every 2–3 weeks",
  //     lightRequirement: "Low to bright indirect light",
  //     description:
  //       "A hardy plant that can tolerate neglect and low light. Perfect for beginners.",
  //     imageUrl: "https://example.com/images/snake-plant.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Spider Plant",
  //     category: "Foliage",
  //     careLevel: "Easy",
  //     wateringFrequency: "Once a week",
  //     lightRequirement: "Bright indirect light",
  //     description:
  //       "Very forgiving and grows well in various conditions. Produces 'babies' easily.",
  //     imageUrl: "https://example.com/images/spider-plant.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Pothos",
  //     category: "Foliage",
  //     careLevel: "Easy",
  //     wateringFrequency: "Once a week",
  //     lightRequirement: "Low to bright indirect light",
  //     description:
  //       "One of the easiest houseplants. Grows long vines and purifies air.",
  //     imageUrl: "https://example.com/images/pothos.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "ZZ Plant",
  //     category: "Succulent",
  //     careLevel: "Easy",
  //     wateringFrequency: "Every 2–3 weeks",
  //     lightRequirement: "Low light",
  //     description:
  //       "Extremely low maintenance and drought-tolerant. Great for offices.",
  //     imageUrl: "https://example.com/images/zz-plant.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Peace Lily",
  //     category: "Flowering",
  //     careLevel: "Easy",
  //     wateringFrequency: "Once a week",
  //     lightRequirement: "Medium indirect light",
  //     description:
  //       "Gives beautiful white flowers. Tells you when it’s thirsty by drooping.",
  //     imageUrl: "https://example.com/images/peace-lily.jpg",
  //   },
  // ];
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

  return (
    <section className="py-12 bg-green-50 dark:bg-zinc-800  px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-500 mb-6">
        🌱 Beginner-Friendly Plants
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beginnerPlants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-3 text-green-700 dark:text-green-500">
              {plant.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {plant.description}
            </p>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <li>
                <strong>Light:</strong> {plant.careTips.light}
              </li>
              <li>
                <strong>Water:</strong> {plant.careTips.watering}
              </li>
              <li>
                <strong>Care Level:</strong> {plant.difficulty}
              </li>
              <li>
                <strong>Humidity:</strong> {plant.careTips.humidity}
              </li>
              <li>
                <strong>Special Features:</strong>{" "}
                {plant.specialFeatures.join(", ")}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeginnerFriendly;
