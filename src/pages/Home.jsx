import React from "react";
import Hero from "../components/Hero";
import NewPlants from "../components/NewPlants";
import PlantCareMistakes from "../components/PlantCareMistakes";
import BeginnerFriendly from "../components/BeginnerFriendly";
import Features from "../components/Features";
import Accordion from "../components/Accordion";
import useTitle from "../hooks/useTitle";
import CustomerReviewsCarousel from "../components/CustomerReviewsCarousel";

const Home = () => {
  const title = "Green Nest - Home";
  useTitle(title);
  return (
    <div className="">
      <Hero></Hero>
      <NewPlants></NewPlants>
      <Features></Features>
      <PlantCareMistakes></PlantCareMistakes>
      <BeginnerFriendly></BeginnerFriendly>
      <CustomerReviewsCarousel></CustomerReviewsCarousel>
      <Accordion></Accordion>
    </div>
  );
};

export default Home;
