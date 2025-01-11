import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Favourites from "./pages/favourites/Favourites";
import Details from "./pages/details/Details";
import Navbar from "./component/Navbar";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favourites", element: <Favourites /> },
        {
          path: "/recipe-item/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
