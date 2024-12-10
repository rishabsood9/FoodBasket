import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({
  category,
  showItem,
  setShowItem,
  index,
}) => {
  const [newIndex, setNewIndex] = useState();
  const [show, setShow] = useState(true);
  console.log(category);
  return (
    <div>
      {/* {Headers} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            if (index === newIndex && show) {
              setShowItem(-1);
              setShow(false);
            } else {
              setShowItem(index);
              setShow(true);
            }
            setNewIndex(index);
          }}
        >
          <span className="font-bold text-lg">
            {category.title} ({category.itemCards.length})
          </span>
          <span>{showItem ? "🔽" : "🔼"}</span>
        </div>
        {showItem && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};
