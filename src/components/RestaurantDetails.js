import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantDetails = () => {
  const { id } = useParams();
  const resDatails = useRestaurantMenu(id);
  const [showItem, setShowItem] = useState(0);

  if (resDatails === undefined || null)
    return <h1 className="text-center">LOADING......</h1>;
  debugger;
  const { name, cuisines, costForTwoMessage } =
    resDatails?.cards[2]?.card?.card.info;
  const { itemCards } =
    resDatails?.cards[resDatails?.cards?.length - 1]?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards[1]?.card?.card;
  const categories = resDatails?.cards[
    resDatails?.cards?.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return !categories && categories?.length === 0 ? (
    <div>No details</div>
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")}-{costForTwoMessage}
      </p>
      <ul>
        {categories?.map((item, index) => (
          <RestaurantCategory
            key={item.card.card.title}
            category={item?.card?.card}
            showItem={index === showItem}
            setShowItem={setShowItem}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
