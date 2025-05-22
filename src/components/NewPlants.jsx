import React, { useEffect, useState } from "react";
import NewPlantCard from "./NewPlantCard";
import Loading from "../pages/Loading";
import { useNavigate } from "react-router";

const NewPlants = () => {
  // const newPlants = [
  //   {
  //     id: 1,
  //     name: "Monstera Deliciosa",
  //     scientificName: "Monstera deliciosa",
  //     category: "indoor",
  //     careLevel: "easy",
  //     description:
  //       "Known for its large, glossy leaves with natural holes. Perfect for adding a tropical vibe to your space.",
  //     watering: {
  //       frequency: "weekly",
  //       tips: "Water when the top 2 inches of soil are dry. Avoid overwatering.",
  //     },
  //     light: {
  //       type: "bright indirect",
  //       tips: "Thrives near east or west-facing windows.",
  //     },
  //     humidity: "high",
  //     temperature: "18-27°C",
  //     fertilizing: "Every 4-6 weeks in spring/summer",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/4RLJs821/hero-2.jpg",
  //     moreInfoLink: "/plants/monstera-deliciosa",
  //   },
  //   {
  //     id: 2,
  //     name: "Snake Plant",
  //     scientificName: "Sansevieria trifasciata",
  //     category: "indoor",
  //     careLevel: "very easy",
  //     description:
  //       "A hardy, low-maintenance plant with tall, sword-like leaves. Great for beginners.",
  //     watering: {
  //       frequency: "bi-weekly",
  //       tips: "Let soil dry completely between waterings.",
  //     },
  //     light: {
  //       type: "low to bright indirect",
  //       tips: "Tolerates low light but grows faster in bright light.",
  //     },
  //     humidity: "low",
  //     temperature: "15-24°C",
  //     fertilizing: "Every 3 months",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/d0gZJzTY/hero-3.jpg",
  //     moreInfoLink: "/plants/snake-plant",
  //   },
  //   {
  //     id: 3,
  //     name: "Echeveria",
  //     scientificName: "Echeveria spp.",
  //     category: "succulent",
  //     careLevel: "easy",
  //     description:
  //       "Rosette-shaped succulent with colorful foliage. Ideal for sunny spots.",
  //     watering: {
  //       frequency: "every 2-3 weeks",
  //       tips: "Soak soil thoroughly, then let it dry completely.",
  //     },
  //     light: {
  //       type: "direct",
  //       tips: "Needs at least 6 hours of sunlight daily.",
  //     },
  //     humidity: "low",
  //     temperature: "15-26°C",
  //     fertilizing: "Once in spring/summer",
  //     toxicity: "Pet-safe",
  //     image: "https://i.ibb.co/nNSfHt0p/hero-8.jpg",
  //     moreInfoLink: "/plants/echeveria",
  //   },
  //   {
  //     id: 4,
  //     name: "Fiddle Leaf Fig",
  //     scientificName: "Ficus lyrata",
  //     category: "indoor",
  //     careLevel: "moderate",
  //     description: "A trendy statement plant with large, violin-shaped leaves.",
  //     watering: {
  //       frequency: "weekly",
  //       tips: "Keep soil consistently moist but not soggy.",
  //     },
  //     light: {
  //       type: "bright indirect",
  //       tips: "Avoid direct sun to prevent leaf burn.",
  //     },
  //     humidity: "medium",
  //     temperature: "18-30°C",
  //     fertilizing: "Monthly in growing season",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/XxzmKV3f/hero-4.jpg",
  //     moreInfoLink: "/plants/fiddle-leaf-fig",
  //   },
  //   {
  //     id: 5,
  //     name: "Jade Plant",
  //     scientificName: "Crassula ovata",
  //     category: "succulent",
  //     careLevel: "easy",
  //     description:
  //       "A symbol of good luck with thick, woody stems and oval leaves.",
  //     watering: {
  //       frequency: "every 2-3 weeks",
  //       tips: "Water deeply but infrequently.",
  //     },
  //     light: {
  //       type: "bright direct",
  //       tips: "South-facing windows are ideal.",
  //     },
  //     humidity: "low",
  //     temperature: "18-24°C",
  //     fertilizing: "Every 6 months",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/jkSvdJ3x/hero-1.jpg",
  //     moreInfoLink: "/plants/jade-plant",
  //   },
  //   {
  //     id: 6,
  //     name: "Peace Lily",
  //     scientificName: "Spathiphyllum wallisii",
  //     category: "indoor",
  //     careLevel: "easy",
  //     description: "Produces elegant white flowers and purifies the air.",
  //     watering: {
  //       frequency: "weekly",
  //       tips: "Drooping leaves signal thirst.",
  //     },
  //     light: {
  //       type: "low to medium indirect",
  //       tips: "Avoid direct sunlight.",
  //     },
  //     humidity: "high",
  //     temperature: "18-27°C",
  //     fertilizing: "Every 6-8 weeks",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/nMc8LcLc/hero-6.jpg",
  //     moreInfoLink: "/plants/peace-lily",
  //   },
  //   {
  //     id: 7,
  //     name: "Aloe Vera",
  //     scientificName: "Aloe barbadensis miller",
  //     category: "succulent",
  //     careLevel: "easy",
  //     description: "A healing plant with soothing gel inside its leaves.",
  //     watering: {
  //       frequency: "every 3 weeks",
  //       tips: "Water deeply but rarely.",
  //     },
  //     light: {
  //       type: "bright indirect",
  //       tips: "Can tolerate some direct sun.",
  //     },
  //     humidity: "low",
  //     temperature: "18-24°C",
  //     fertilizing: "Once a year (spring)",
  //     toxicity: "Mildly toxic to pets",
  //     image: "https://i.ibb.co/0jzw1kYZ/hero-10.jpg",
  //     moreInfoLink: "/plants/aloe-vera",
  //   },
  //   {
  //     id: 8,
  //     name: "ZZ Plant",
  //     scientificName: "Zamioculcas zamiifolia",
  //     category: "indoor",
  //     careLevel: "very easy",
  //     description: "Nearly indestructible with glossy, dark green leaves.",
  //     watering: {
  //       frequency: "monthly",
  //       tips: "Thrives on neglect—overwatering is its only enemy.",
  //     },
  //     light: {
  //       type: "low to bright indirect",
  //       tips: "Tolerates fluorescent office light.",
  //     },
  //     humidity: "low",
  //     temperature: "18-26°C",
  //     fertilizing: "Rarely needed",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/Y4pvZKgC/hero-9.jpg",
  //     moreInfoLink: "/plants/zz-plant",
  //   },
  //   {
  //     id: 9,
  //     name: "Pothos",
  //     scientificName: "Epipremnum aureum",
  //     category: "indoor",
  //     careLevel: "very easy",
  //     description:
  //       "A fast-growing vine with heart-shaped leaves. Perfect for hanging baskets.",
  //     watering: {
  //       frequency: "every 1-2 weeks",
  //       tips: "Let soil dry out between waterings.",
  //     },
  //     light: {
  //       type: "low to bright indirect",
  //       tips: "Leaves variegate more in bright light.",
  //     },
  //     humidity: "medium",
  //     temperature: "18-29°C",
  //     fertilizing: "Every 2-3 months",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/zhB4Cmjc/hero-7.jpg",
  //     moreInfoLink: "/plants/pothos",
  //   },
  //   {
  //     id: 10,
  //     name: "Rubber Plant",
  //     scientificName: "Ficus elastica",
  //     category: "indoor",
  //     careLevel: "moderate",
  //     description: "Bold, burgundy-tinged leaves make a dramatic statement.",
  //     watering: {
  //       frequency: "weekly",
  //       tips: "Reduce watering in winter.",
  //     },
  //     light: {
  //       type: "bright indirect",
  //       tips: "Can tolerate morning direct sun.",
  //     },
  //     humidity: "medium",
  //     temperature: "18-29°C",
  //     fertilizing: "Monthly in spring/summer",
  //     toxicity: "Toxic to pets",
  //     image: "https://i.ibb.co/4RLJs821/hero-2.jpg",
  //     moreInfoLink: "/plants/rubber-plant",
  //   },
  // ];
  const [newPlants, setNewPlants] = useState([]);
  const navigate = useNavigate();
  console.log(newPlants);
  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((response) => response.json())
      .then((data) => {
        setNewPlants(data.data);
      });
  }, []);
  return (
    <div className="bg-green-50 dark:bg-zinc-800 dark:text-white text-zinc-900">
      <div className="text-center py-10 px-10">
        <h1 className="text-5xl font-bold">New Plants</h1>

        <p className="mt-2 text-lg">
          Discover the latest additions to our plant collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {newPlants.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
              No New Plants Found
            </h2>
            <p className="text-center">Please add some new Plants</p>
            <button
              onClick={() => navigate("/add-plant")}
              className="btn px-5 text-white bg-green-600 hover:bg-green-700 rounded-full"
            >
              Add plants
            </button>
          </div>
        ) : (
          newPlants.map((plant) => (
            <NewPlantCard key={plant._id} plant={plant} />
          ))
        )}
      </div>
    </div>
  );
};

export default NewPlants;
