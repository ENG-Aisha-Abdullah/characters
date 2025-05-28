import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../component/Layout";
import Home from "../pages/Home";
import CharacterDetails from "../Pages/CharacterDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "character/:index", element: <CharacterDetails /> },
    //   { path: "contact", element: <Contact /> },
    //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
