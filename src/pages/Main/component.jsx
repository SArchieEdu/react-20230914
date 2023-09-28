import { useState } from "react";
import { RestaurantTabs } from "../../components/RestarantTabs/component";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../../components/Restaurant/component";

export const MainPage = () => {
  if (!restaurants?.length) {
    return null;
  }

  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handleRestaurantClick = (id) => {
    setActiveRestaurant(restaurants.find((rests) => rests.id === id));
  };

  return (
    <div>
      <RestaurantTabs handleClick={handleRestaurantClick} />
      <Restaurant restaurantData={activeRestaurant} />
    </div>
  );
};
