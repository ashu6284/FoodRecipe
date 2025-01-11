import { createContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState("");
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data.recipes);
        setLoading(false);
        setSearchValue("");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function handleFavourites(currItem) {
    // console.log(currItemId);
    let CpyfavouriteList = [...favouriteList];
    const index = CpyfavouriteList.findIndex((item) => item.id === currItem.id);
    if (index === -1) {
      CpyfavouriteList.push(currItem);
    } else {
      CpyfavouriteList.splice(index);
    }
    setFavouriteList(CpyfavouriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        handleSubmit,
        loading,
        recipeList,
        searchValue,
        setSearchValue,
        recipeDetailsData,
        setRecipeDetailsData,
        handleFavourites,
        favouriteList,
        setFavouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
