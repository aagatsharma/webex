import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Meetings from "./pages/Meetings";
import Developer from "./pages/Developer";
import Accessibility from "./pages/Accessibility";
import Customer from "./pages/Customer";
import Footer from "./components/reusable/Footer/Footer";

import Navbar from "./components/reusable/Navbar/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>404 Not found</h1>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/meetings",
          element: <Meetings />,
        },
        {
          path: "/developer",
          element: <Developer />,
        },
        {
          path: "/accessibility",
          element: <Accessibility />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
