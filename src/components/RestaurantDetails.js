import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  let [resDatails, setResDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchData();
    // THIS IS CALLED WHILE UNMOUNTING THE COMPONENT THAT MEANS ONCE YOU LEAVE THE PAGE
    return () => {
      console.log("unmounting");
    };
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
    );
    const jsonData = await data.json();

    setResDetails(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  };

  return !resDatails && resDatails?.length === 0 ? (
    <div>No details</div>
  ) : (
    <div>
      <h1>
        {resDatails?.cards[resDatails?.cards?.length - 1]?.card?.card.name}
      </h1>
      <h2>Restaurant Details</h2>
      {resDatails?.cards[2]?.card?.card?.itemCards?.map((a) => {
        const d = a?.card?.info;
        return (
          <div key={d?.id}>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                d?.imageId
              }
            ></img>
            <h2>Name: {d?.name}</h2>
            <h3>
              {d?.ratings?.aggregatedRating?.rating
                ? `Ratings: ${d.ratings.aggregatedRating.rating}`
                : ""}
            </h3>
            <h3>Price: Rs {d?.defaultPrice / 100}</h3>
            <h4>Description:{d?.description}</h4>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetails;
