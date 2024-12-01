// we can destructure too so instead of props use {resName,imgSrc,resCuisines,resRating}
const Restaurant = ({ restaurantListData, dataFunction }) => {
  const data = restaurantListData.info;
  return (
    <div className=" w-[225] mx-8 bg-slate-50 hover:border border-solid border-black rounded-lg">
       {/* <button onClick={() => dataFunction("data sample")}>Data Sample</button> */}
       <button onClick={() => dataFunction("data sample")}>Data Sample</button>
      <div className="text-center text-pink-900 bold font-bold">
        {data.name}
      </div>
     
      <div>
        <img
          className="m=4 p-4 w-[200] rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`}
        ></img>
        <div className="px-4">
          <h2>{data.avgRating} STARS</h2>
          <h3>{data.costForTwo}</h3>
          <h3 style={{ overflowWrap: "anywhere" }}>
            {data.cuisines.join(", ")}
          </h3>
          <h3>{data.sla.deliveryTime} minutes</h3>
        </div>
      </div>
    </div>
  );
};

// Higher Order Conponent takes a component (Restaurant) and returning a component
export const promotedRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <span className="absolute bg-black text-white rounded-lg">
          Promoted
        </span>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
