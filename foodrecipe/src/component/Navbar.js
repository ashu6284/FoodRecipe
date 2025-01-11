import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function Navbar() {
  const { handleSubmit, searchValue, setSearchValue } =
    useContext(GlobalContext);
  console.log(searchValue);
  return (
    <>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <NavLink to="/">FOOD RECIPE</NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Items"
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
