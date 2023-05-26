import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart/Cart";
import WishList from "../pages/WishList/WishList";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Brand from "../components/Brand/Brand";
import Tag from "../components/Tag/Tag";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";

// create public routes
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "brand",
            element: <Brand />,
          },
          {
            path: "tag",
            element: <Tag />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

// export
export default publicRoute;
