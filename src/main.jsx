import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/about-us/AboutUs";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import ContactUs from "./components/contact-us/ContactUs";
import PersonDetail from "./components/personDetail/PersonDetail";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/about-us',
        element: <AboutUs></AboutUs>,
        loader : () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path : 'person/:personID',
        element: <PersonDetail></PersonDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.personID}`)
      },
      {
        path : '/products',
        element: <Products></Products>
      },
      {
        path : '/services',
        element: <Services></Services>
      },
      {
        path : '/contact-us',
        element: <ContactUs></ContactUs>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
