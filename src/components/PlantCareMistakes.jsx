const plantMistakes = [
  {
    title: "Overwatering",
    description:
      "Too much water can cause root rot. Always check soil moisture before watering.",
  },
  {
    title: "Wrong Lighting",
    description: "Placing sun-loving plants in dark areas can weaken growth.",
  },
  {
    title: "Ignoring Humidity",
    description:
      "Some plants thrive in high humidity. Use a humidifier or mist them regularly.",
  },
  {
    title: "Neglecting Fertilizer",
    description:
      "Plants need nutrients. Use the right fertilizer during the growing season.",
  },
  {
    title: "Pest Infestation",
    description:
      "Regularly check for pests like aphids or spider mites. Treat them promptly.",
  },
  {
    title: "Ignoring Pruning",
    description:
      "Pruning helps maintain plant shape and encourages new growth.",
  },
  // Add more...
];

const PlantCareMistakes = () => {
  return (
    <section className="py-12 px-4 bg-green-50">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌿 Top Plant Care Mistakes
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plantMistakes.map((mistake, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 border-l-4 border-red-400"
          >
            <h3 className="text-xl font-semibold text-red-600">
              {mistake.title}
            </h3>
            <p className="mt-2 text-gray-700">{mistake.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareMistakes;
