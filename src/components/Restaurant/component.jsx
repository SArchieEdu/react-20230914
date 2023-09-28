import React from "react";
import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurantData }) => {
  return (
    <div>
      <h2>{restaurantData.name}</h2>
      <Menu menu={restaurantData.menu} />
      <Reviews reviews={restaurantData.reviews} />
    </div>
  );
};
