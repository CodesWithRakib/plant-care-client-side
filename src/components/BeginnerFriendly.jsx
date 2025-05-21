const BeginnerFriendly = () => {
  const beginnerPlants = [
    {
      id: 1,
      name: "Snake Plant",
      category: "Succulent",
      careLevel: "Easy",
      wateringFrequency: "Every 2–3 weeks",
      lightRequirement: "Low to bright indirect light",
      description:
        "A hardy plant that can tolerate neglect and low light. Perfect for beginners.",
      imageUrl: "https://example.com/images/snake-plant.jpg",
    },
    {
      id: 2,
      name: "Spider Plant",
      category: "Foliage",
      careLevel: "Easy",
      wateringFrequency: "Once a week",
      lightRequirement: "Bright indirect light",
      description:
        "Very forgiving and grows well in various conditions. Produces 'babies' easily.",
      imageUrl: "https://example.com/images/spider-plant.jpg",
    },
    {
      id: 3,
      name: "Pothos",
      category: "Foliage",
      careLevel: "Easy",
      wateringFrequency: "Once a week",
      lightRequirement: "Low to bright indirect light",
      description:
        "One of the easiest houseplants. Grows long vines and purifies air.",
      imageUrl: "https://example.com/images/pothos.jpg",
    },
    {
      id: 4,
      name: "ZZ Plant",
      category: "Succulent",
      careLevel: "Easy",
      wateringFrequency: "Every 2–3 weeks",
      lightRequirement: "Low light",
      description:
        "Extremely low maintenance and drought-tolerant. Great for offices.",
      imageUrl: "https://example.com/images/zz-plant.jpg",
    },
    {
      id: 5,
      name: "Peace Lily",
      category: "Flowering",
      careLevel: "Easy",
      wateringFrequency: "Once a week",
      lightRequirement: "Medium indirect light",
      description:
        "Gives beautiful white flowers. Tells you when it’s thirsty by drooping.",
      imageUrl: "https://example.com/images/peace-lily.jpg",
    },
  ];

  return (
    <section className="py-12 bg-green-50 px-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌱 Beginner-Friendly Plants
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beginnerPlants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-3 text-green-700">
              {plant.name}
            </h3>
            <p className="text-gray-600 text-sm">{plant.description}</p>
            <ul className="mt-2 text-sm text-gray-700">
              <li>
                <strong>Light:</strong> {plant.lightRequirement}
              </li>
              <li>
                <strong>Water:</strong> {plant.wateringFrequency}
              </li>
              <li>
                <strong>Care Level:</strong> {plant.careLevel}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeginnerFriendly;
