import React from "react";
import Hero from "../components/Hero";
import NewPlants from "../components/NewPlants";
import PlantCareMistakes from "../components/PlantCareMistakes";
import BeginnerFriendly from "../components/BeginnerFriendly";
import CustomerReviews from "../components/CustomerReviews";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <NewPlants></NewPlants>
      <Features></Features>
      <PlantCareMistakes></PlantCareMistakes>
      <BeginnerFriendly></BeginnerFriendly>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
