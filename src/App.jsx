import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./assets/components/Header";
import Body from "./assets/components/Body";
import Footer from "./assets/components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./assets/components/About";
import Cart from "./assets/components/Cart";
import Contact from "./assets/components/Contact";
import Error from "./assets/components/Error";
import RestaurantMenu from "./assets/components/RestaurantMenu";
import Profile from "./assets/components/Profile";
import Shimmer from "./assets/components/Shimmer";
// import Instamart from "./assets/components/Instamart";

const Instamart = lazy(() => import("./assets/components/Instamart"));

const AppLayout = () => {
  return (
    /*
 #Header:
    - Logo 
    -ListItem
  #Body
    -Search bar
    -restaurnt list
    -Card: 
    -Image
    -name
    -rating
    -cuisine
 # Footer
  * */
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            // nested routing
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppLayout;
