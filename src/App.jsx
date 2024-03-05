import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./routes/Home";
import Products, { loader as productLoader } from "./routes/Products";
import SingleProduct, {
  loader as singleProductLoader,
} from "./routes/SingleProduct";
import "./App.css";
import ProductsCategory, {
  loader as productsCategoryLoader,
} from "./routes/ProductCategories";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "/category/:category",
        element: <ProductsCategory />,
        loader: productsCategoryLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
