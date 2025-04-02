import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AnimalPage from "./pages/ AnimalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "animals", 
        element: <Home />, 
      },
      {
        path: "animal/:id",
        element: <AnimalPage />,
      },
    ],
  },
]);
