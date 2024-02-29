import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import Blog from "../Pages/Blogs/Blogs";
import DonationDetails from "../Components/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "donation",
        element: <Donation />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () =>fetch("/public/data.json")
      },
    ],
  },
]);
export default router;
