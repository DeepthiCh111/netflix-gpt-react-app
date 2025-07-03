import { createBrowserRouter, RouterProvider } from "react-router";
import Authentication from "../components/Authentication";
import { useDispatch } from "react-redux";
import Browser from "./Browser";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
