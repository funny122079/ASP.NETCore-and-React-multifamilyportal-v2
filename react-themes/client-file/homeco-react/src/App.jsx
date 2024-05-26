import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Home2 from "./component/Home-2";
import Home3 from "./component/Home-3";
import Property from "./component/Property";
import PropertySingle from "./component/Property Single";
import EditProperty from "./component/Edit Property";
import AddProperty from "./component/AddProperty";
import SubmitProperty from "./component/SubmitProperty";
import Dashboard from "./component/Dashboard";
import NewsSingle from "./component/NewsSingle.jsx";
import News from "./component/News";
import AgentDetail from "./component/AgentDetail";
import OurAgents from "./component/OurAgents";
import AboutUs from "./component/About";
import Pricing from "./component/Pricing.jsx";
import PaymentMethod from "./component/PaymentMethod";
import Faq from "./component/Faq";
import Login from "./component/Login";
import ErrorPage from "./component/Error";
import Contact from "./component/Contact";
import SignUp from "./component/SignUp";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Home2",
      element: <Home2 />,
    },
    {
      path: "/Home3",
      element: <Home3 />,
    },
    {
      path: "/property",
      element: <Property />,
    },
    {
      path: "/property-single",
      element: <PropertySingle />,
    },
    {
      path: "/edit-property",
      element: <EditProperty />,
    },
    {
      path: "/add-property",
      element: <AddProperty />,
    },
    {
      path: "/submit-property",
      element: <SubmitProperty />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/blog-single",
      element: <NewsSingle />,
    },
    {
      path: "/blog",
      element: <News />,
    },
    {
      path: "/agent-detail",
      element: <AgentDetail />,
    },
    {
      path: "/our-agent",
      element: <OurAgents />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/payment-method",
      element: <PaymentMethod />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/404",
      element: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
}

export default App;
