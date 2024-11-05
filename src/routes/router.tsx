import { createBrowserRouter } from "react-router-dom";
import CoffeeMenu from "../pages/CoffeeMenu";
import About from "../pages/About";
import Status from "../pages/Status";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoffeeMenu />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/status",
    element: <Status />,
  },
]);

export default router;
