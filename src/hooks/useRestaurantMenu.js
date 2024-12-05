import { useEffect, useState } from "react";

export const useRestaurantMenu = (id) => {
  let [resDatails, setResDetails] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
    );
    const jsonData = await data.json();

    setResDetails(jsonData?.data);
  };
  return resDatails;
};
