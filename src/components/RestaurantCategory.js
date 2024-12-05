
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ category, showItem, setShowItem }) => {
  console.log(category);
  return (
    <div>
      {/* {Headers} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setShowItem();
          }}
        >
          <span className="font-bold text-lg">
            {category.title} ({category.itemCards.length})
          </span>
        </div>
        {showItem && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};
