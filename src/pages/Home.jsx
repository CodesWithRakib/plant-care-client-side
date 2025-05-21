import React from "react";
import Hero from "../components/Hero";
import NewPlants from "../components/NewPlants";
import PlantCareMistakes from "../components/PlantCareMistakes";
import BeginnerFriendly from "../components/BeginnerFriendly";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <NewPlants></NewPlants>
      <PlantCareMistakes></PlantCareMistakes>
      <BeginnerFriendly></BeginnerFriendly>
    </div>
  );
};

export default Home;
