import { useContext, useEffect, useState } from "react";
import Restaurant, { promotedRestaurant } from "./Restaurant";
import { Link } from "react-router-dom";
import useGetRestaurants from "../utilities/useGetRestaurants";
import useOnline from "../utilities/useOnline";
import UserContext from "./UserContext";

const Body = () => {
  const [data, setData] = useState("data1");
  const [searchText, setSearchState] = useState("");
  const PromotedRestaurantCard = promotedRestaurant(Restaurant);
  const [
    restaurantListData,
    filterRestaurantListData,
    setFilterRestaurantListData,
  ] = useGetRestaurants();

  const onlineStatus = useOnline();
  const dataFunction = (d) => {
    setData(d);
  };
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { setLoggedInUserName, loggedInUser } = useContext(UserContext);
  return (
    <div>
      <div className="flex py-8">
        <input
          className="px-4 bg-gray-100 m-4 border border-black border-solid"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
        />

        <button
          className="px-4 bg-blue-100 m-4 border border-black border-solid"
          onClick={() => {
            const filterData = restaurantListData.filter((a) =>
              a.info.name?.toLowerCase()?.includes(searchText.toLowerCase())
            );

            setFilterRestaurantListData(filterData);
          }}
        >
          Search
        </button>
        {<h1>data:{data}</h1>}
        <button
          className="px-4 bg-blue-100 m-4 border border-black border-solid"
          onClick={() => {
            const filterData = restaurantListData.filter(
              (a) => a.info.avgRating > 4
            );
            setFilterRestaurantListData(filterData);
          }}
        >
          Filter Top Rated Restaurant
        </button>

        <div>
          <label>Test User Context</label>
          <input
            className="px-4 bg-gray-100 m-4 border border-black border-solid"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setLoggedInUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filterRestaurantListData?.map((a) => {
          if (a.info.id) {
            return (
              <Link to={"./restaurant/" + a.info.id}>
                {/* <Restaurant restaurantListData={a}></Restaurant> */}
                {a?.info?.areaName === "Rohini" &&
                a?.info?.name !== "Hyderabadi Handi Biryani" ? (
                  <PromotedRestaurantCard
                    restaurantListData={a}
                    dataFunction={dataFunction}
                  />
                ) : (
                  <Restaurant
                    dataFunction={dataFunction}
                    restaurantListData={a}
                  ></Restaurant>
                )}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Body;
