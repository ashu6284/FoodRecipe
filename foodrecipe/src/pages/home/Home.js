import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import RecipeItem from "../../component/RecipeItem";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  if (loading === true) {
    return <h1>Loading.....</h1>;
  }
  return (
    <>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show. Please search something
            </p>
          </div>
        )}
      </div>
    </>
  );
}
