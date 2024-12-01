import { useEffect, useState } from "react";

const useGetRestaurants = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [filterRestaurantListData, setFilterRestaurantListData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return [
    restaurantListData,
    filterRestaurantListData,
    setFilterRestaurantListData,
  ];
};

export default useGetRestaurants;
