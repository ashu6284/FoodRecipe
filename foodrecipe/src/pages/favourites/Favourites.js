import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../component/RecipeItem";

export default function Favorites() {
  const { favouriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
